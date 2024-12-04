<script setup lang="tsx">
import type { ActionBarProps, PlusColumn } from 'plus-pro-components'
import { cloneDeep } from '@pureadmin/utils'

const tableConfig: PlusColumn[] = [
  {
    label: 'ID',
    prop: 'ID',
  },
  {
    label: '唯一标识',
    prop: 'name',
  },
  {
    label: '标题',
    prop: 'meta.title',
  },
  {
    label: '路径',
    prop: 'path',
  },
  {
    label: '组件',
    prop: 'component',
  },
  {
    label: '是否隐藏',
    prop: 'hidden',
  },
  {
    label: '排序',
    prop: 'sort',
  },
]

const { state: tableData, execute: refresh } = useAsyncState(() => client.POST('/menu/getMenuList').then(({ data }) => data.data), [])
const defualtFrom = {
  name: '',
  title: '',
  path: '',
  sort: 0,
  parentId: 0,
  hidden: true,
  component: '',
}
type FromType = typeof defualtFrom
const formValue = ref<FromType>(cloneDeep(defualtFrom))
const formVisible = ref(false)
const formId = ref(0)
const columns = computed<PlusColumn[]>(() => ([
  {
    label: '唯一标识',
    prop: 'name',
    valueType: 'copy',
    fieldProps: {
      placeholder: '请输入页面唯一标识',
    },
    labelWidth: '100px',
  },
  {
    label: '页面标题',
    prop: 'title',
    valueType: 'copy',
    fieldProps: {
      placeholder: '请输入页面标题',
    },
    labelWidth: '100px',
  },
  {
    label: '路径',
    prop: 'path',
    valueType: 'copy',
    fieldProps: {
      placeholder: '请输入页面路径',
    },
    labelWidth: '100px',
  },
  {
    label: '组件',
    prop: 'component',
    valueType: 'copy',
    fieldProps: {
      placeholder: '请输入组件',
    },
    labelWidth: '100px',
  },
  {
    label: '排序',
    prop: 'sort',
    valueType: 'input-number',
    labelWidth: '100px',
  },
  {
    label: '父菜单',
    labelWidth: '100px',
    prop: 'parentId',
    valueType: 'select',
    options: [
      ...extractPathList(tableData.value).map(item => ({
        label: item.name,
        value: item.ID,
      })).filter((item) => {
        if (formId.value === 0)
          return true
        else
          return item.value !== formId.value
      }),
      {
        label: '无父菜单',
        value: 0,
      },
    ],
  },
  {
    label: '是否隐藏',
    prop: 'hidden',
    valueType: 'switch',
    labelWidth: '100px',
  },
]))

const rules = {
  name: [
    {
      required: true,
      message: '请输入页面唯一标识',
    },
  ],
  title: [
    {
      required: true,
      message: '请输入页面名称',
    },
  ],
  path: [
    {
      required: true,
      message: '请输入页面路径',
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
        openForm(row.ID, {
          path: row.path,
          name: row.name,
          hidden: row.hidden,
          title: row.meta.title,
          parentId: row.parentId,
          sort: row.sort,
          component: row.component,
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
          const { data } = await client.POST('/menu/deleteBaseMenu', {
            body: {
              id: row.ID,
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
      const { data } = await client.POST('/menu/addBaseMenu', {
        body: {
          path: d.path,
          component: d.component,
          name: d.name,
          hidden: d.hidden,
          meta: {
            title: d.title,
          },
          parentId: d.parentId,
          sort: d.sort,
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
      const { data } = await client.POST('/menu/updateBaseMenu', {
        body: {
          ID: formId.value,
          path: d.path,
          component: d.component,
          name: d.name,
          hidden: d.hidden,
          meta: {
            title: d.title,
          },
          parentId: d.parentId,
          sort: d.sort,
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
</script>

<template>
  <div class="min-h-full">
    <ElCard>
      <ElButton @click="openForm(0)">
        新建菜单
      </ElButton>
    </ElCard>
    <ElCard class="mt-4">
      <PlusTable
        :columns="tableConfig"
        :table-data="tableData"
        :action-bar="action"
        title="树形表格"
        :tree-props="{ children: 'children' }"
        row-key="ID"
      />
    </ElCard>
    <PlusDialogForm
      v-model="formValue"
      v-model:visible="formVisible"
      title="创建"
      :form="{ columns, rules }"
      @confirm="submitForm"
    />
  </div>
</template>
