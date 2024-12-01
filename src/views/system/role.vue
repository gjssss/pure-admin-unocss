<!-- eslint-disable ts/no-use-before-define -->
<script setup lang="ts">
import type { ActionBarProps, PlusColumn } from 'plus-pro-components'
import { cloneDeep } from '@pureadmin/utils'
import { ElTree } from 'element-plus'

const tableConfig: PlusColumn[] = [
  {
    label: 'ID',
    prop: 'authorityId',
  },
  {
    label: '角色名',
    prop: 'authorityName',
  },
  {
    label: '默认菜单',
    prop: 'defaultRouter',
  },
]

const { state: tableData, execute: refresh } = useAsyncState(() => client.POST('/authority/getAuthorityList').then(({ data }) => data.data), [])
const defualtFrom = {
  authorityName: '',
  authorityId: undefined,
  parentId: 0,
}
type FromType = typeof defualtFrom
const formValue = ref<FromType>(cloneDeep(defualtFrom))
const formVisible = ref(false)
const formId = ref(0)
const columns = computed<PlusColumn[]>(() => ([
  {
    label: '角色名',
    prop: 'authorityName',
    valueType: 'copy',
    fieldProps: {
      placeholder: '请输入角色名',
    },
    labelWidth: '100px',
  },
  {
    label: '角色ID',
    prop: 'authorityId',
    valueType: 'input-number',
    fieldProps: {
      placeholder: '请输入角色ID',
      disabled: formId.value !== 0,
    },
    labelWidth: '100px',
  },
  {
    label: '父角色',
    labelWidth: '100px',
    prop: 'parentId',
    valueType: 'select',
    options: [
      ...extractPathList(tableData.value).map(item => ({
        label: item.authorityName,
        value: item.authorityId,
      })).filter((item) => {
        if (formId.value === 0)
          return true
        else
          return item.value !== formId.value
      }),
      {
        label: '根角色',
        value: 0,
      },
    ],
  },
]))

const rules = {
  authorityName: [
    {
      required: true,
      message: '请输入角色名',
    },
  ],
  authorityId: [
    {
      required: true,
      message: '请输入角色ID',
    },
  ],
}

const action: ActionBarProps = {
  label: '操作',
  buttons: [
    {
      text: '编辑',
      code: 'edit',
      props: {
        type: 'primary',
      },
      onClick: async ({ row }) => {
        openForm(row.authorityId, {
          authorityName: row.authorityName,
          authorityId: row.authorityId,
          parentId: row.parentId,
        })
      },
    },
    {
      text: '删除',
      code: 'delete',
      props: {
        type: 'danger',
      },
      onClick: async ({ row }) => {
        try {
          const { data } = await client.POST('/authority/deleteAuthority', {
            body: {
              authorityId: row.authorityId,
            },
          })
          message(data.msg, {
            type: 'success',
          })
          await refresh()
        }
        catch (e) {
          message(e.message, {
            type: 'error',
          })
        }
      },
    },
    {
      text: '设置权限',
      code: 'setting',
      props: {
        type: 'info',
      },
      onClick: async ({ row }) => {
        drawerVisible.value = true
        drawerInfo.value = row

        const { data } = await client.POST('/menu/getMenuAuthority', {
          body: {
            authorityId: row.authorityId,
          },
        })
        await nextTick()
        formTree.value.setCheckedNodes(data.data.menus as any || [])
      },
    },
  ],
  type: 'button',
}

function openForm(id: number, option?: FromType) {
  formId.value = id
  if (id === 0) {
    formValue.value = cloneDeep(defualtFrom)
    formVisible.value = true
  }
  else if (option) {
    formValue.value = option
    formVisible.value = true
  }
}

async function submitForm(d: FromType) {
  if (formId.value === 0) {
    try {
      const { data } = await client.POST('/authority/createAuthority', {
        body: {
          authorityId: d.authorityId,
          authorityName: d.authorityName,
          defaultRouter: '/welcome',
          parentId: d.parentId,
        },
      })
      message(data.msg, {
        type: 'success',
      })
      await refresh()
    }
    catch (e) {
      message(e.message, {
        type: 'error',
      })
    }
    finally {
      formVisible.value = false
    }
  }
  else {
    try {
      const { data } = await client.PUT('/authority/updateAuthority', {
        body: {
          authorityName: d.authorityName,
          authorityId: d.authorityId,
          parentId: d.parentId,
        },
      })
      message(data.msg, {
        type: 'success',
      })
      await refresh()
    }
    catch (e) {
      message(e.message, {
        type: 'error',
      })
    }
    finally {
      formVisible.value = false
    }
  }
}

const formTree = ref<InstanceType<typeof ElTree>>()
const drawerVisible = ref(false)
const { state: drawerData, execute: refreshDrawer } = useAsyncState(
  () => client.POST('/menu/getMenuList')
    .then(({ data }) => data.data),
  [],
)
const drawerInfo = ref()
const drawerProp = {
  label: 'path',
}
function closeDrawer() {
  drawerVisible.value = false
}
async function submitDrawer() {
  await wrapperClient(() => {
    return client.POST('/menu/addMenuAuthority', {
      body: {
        authorityId: drawerInfo.value.authorityId,
        menus: formTree.value.getCheckedKeys().map((item: number) => ({ ID: item })),
      },
    })
  })
  drawerVisible.value = false
  await refresh()
}
</script>

<template>
  <div class="min-h-full">
    <ElCard>
      <ElButton @click="openForm(0)">
        新建角色
      </ElButton>
    </ElCard>
    <ElCard class="mt-4">
      <PlusTable
        :columns="tableConfig"
        :table-data="tableData"
        :action-bar="action"
        title="树形表格"
        :tree-props="{ children: 'children' }"
        row-key="authorityId"
      />
    </ElCard>
    <PlusDialogForm
      v-model="formValue"
      v-model:visible="formVisible"
      :title="formId === 0 ? '创建' : '编辑'"
      :form="{ columns, rules }"
      @confirm="submitForm"
    />
    <el-drawer v-model="drawerVisible" title="设置权限">
      <template #default>
        <ElTree
          ref="formTree"
          :props="drawerProp"
          :data="drawerData"
          show-checkbox
          node-key="ID"
          default-expand-all
        />
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button type="info" @click="() => refreshDrawer()">
            刷新
          </el-button>
          <el-button @click="closeDrawer">
            取消
          </el-button>
          <el-button type="primary" @click="submitDrawer">
            确认
          </el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>
