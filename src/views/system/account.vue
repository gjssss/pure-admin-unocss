<!-- eslint-disable ts/no-use-before-define -->
<script setup lang="ts">
import type { ActionBarProps, PlusColumn, PlusPaginationProps } from 'plus-pro-components'
import { cloneDeep } from '@pureadmin/utils'

const { state: roleList } = useAsyncState(() => client.POST('/authority/getAuthorityList').then(({ data }) => data.data), [])

const tableConfig: PlusColumn[] = [
  {
    label: 'ID',
    prop: 'ID',
  },
  {
    label: '账号',
    prop: 'userName',
  },
  {
    label: '昵称',
    prop: 'nickName',
  },
  {
    label: '电话',
    prop: 'phone',
  },
  {
    label: '邮箱',
    prop: 'email',
  },
]

const paginationOption = ref<PlusPaginationProps>({
  total: 0,
  modelValue: {
    page: 1,
    pageSize: 10,
  },
})
const { state: tableData, execute: refresh } = useAsyncState(
  () => client.POST('/user/getUserList', {
    body: {
      page: paginationOption.value.modelValue.page,
      pageSize: paginationOption.value.modelValue.pageSize,
    },
  })
    .then(({ data }) => data.data)
    .then(({ list, page, pageSize, total }) => {
      paginationOption.value.modelValue.page = page
      paginationOption.value.modelValue.pageSize = pageSize
      paginationOption.value.total = total
      return list
    }),
  [],
)
function paginationChange(p: any) {
  paginationOption.value.modelValue = p
  refresh()
}
const defualtFrom = {
  userName: '',
  passWord: '',
  rePassWord: '',
  nickName: '',
  phone: '',
  email: '',
  authorityIds: [],
  authorityId: undefined,
  enable: 1,
}
type FromType = typeof defualtFrom
const formValue = ref<FromType>(cloneDeep(defualtFrom))
const formVisible = ref(false)
const formId = ref(0)
const columns = computed<PlusColumn[]>(() => ([
  {
    label: '账号',
    prop: 'userName',
    valueType: 'copy',
    fieldProps: {
      placeholder: '请输入账号',
    },
    labelWidth: '100px',
  },
  ...(
    formId.value === 0
      ? [{
          label: '密码',
          prop: 'passWord',
          valueType: 'input',
          fieldProps: {
            placeholder: '请输入密码',
            type: 'password',
          },
          labelWidth: '100px',
        }, {
          label: '确认密码',
          prop: 'rePassWord',
          valueType: 'input',
          fieldProps: {
            placeholder: '请再输入密码',
            type: 'password',
          },
          labelWidth: '100px',
        }]
      : [] as any
  ),
  {
    label: '昵称',
    prop: 'nickName',
    valueType: 'input',
    fieldProps: {
      placeholder: '请再输入昵称',
    },
    labelWidth: '100px',
  },
  {
    label: '电话',
    prop: 'phone',
    valueType: 'input',
    fieldProps: {
      placeholder: '请再输入电话号码',
    },
    labelWidth: '100px',
  },
  {
    label: '邮箱',
    prop: 'email',
    valueType: 'input',
    fieldProps: {
      placeholder: '请再输入邮箱',
    },
    labelWidth: '100px',
  },
  {
    label: '赋予角色',
    labelWidth: '100px',
    prop: 'authorityIds',
    valueType: 'select',
    fieldProps: {
      multiple: true,
      collapseTags: true,
      collapseTagsTooltip: true,
      maxCollapseTags: 3,
    },
    options: extractPathList(roleList.value).map(item => ({
      label: item.authorityName,
      value: item.authorityId,
    })),
  },
  {
    label: '登录角色',
    labelWidth: '100px',
    prop: 'authorityId',
    valueType: 'select',
    options: formValue.value.authorityIds.map((id) => {
      const role = extractPathList(roleList.value).find(item => item.authorityId === id)
      return {
        label: role.authorityName,
        value: id,
      }
    }),
  },
]))

const rules = {
  userName: [
    {
      required: true,
      message: '请输入账号',
    },
  ],
  passWord: [
    {
      required: true,
      message: '请输入密码',
    },
  ],
  rePassWord: [
    {
      required: true,
      message: '请确认密码',
    },
    {
      validator: (rule: any, value: any, callback: any) => {
        if (formValue.value.passWord !== '') {
          if (formValue.value.rePassWord !== formValue.value.passWord) {
            callback(new Error('两次密码不一样'))
          }
          else {
            callback()
          }
        }
        else {
          callback()
        }
      },
    },
  ],
  nickName: [
    {
      required: true,
      message: '请输入昵称',
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
          userName: row.userName,
          passWord: '',
          rePassWord: row.rePassWord,
          nickName: row.nickName,
          phone: row.phone,
          email: row.email,
          authorityIds: row.authorities.map(item => item.authorityId),
          authorityId: row.authorityId,
          enable: row.enable,
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
          const { data } = await client.DELETE('/user/deleteUser', {
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
      const { data } = await client.POST('/user/admin_register', {
        body: d,
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
      const { data } = await client.PUT('/user/setUserInfo', {
        body: {
          ...d,
          ID: formId.value,
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
        新建角色
      </ElButton>
    </ElCard>
    <ElCard class="mt-4">
      <PlusTable
        :columns="tableConfig"
        :table-data="tableData"
        :action-bar="action"
        title="树形表格"
        row-key="ID"
        :pagination="paginationOption"
        @pagination-change="paginationChange"
      />
    </ElCard>
    <PlusDialogForm
      v-model="formValue"
      v-model:visible="formVisible"
      :title="formId === 0 ? '创建' : '编辑'"
      :form="{ columns, rules }"
      @confirm="submitForm"
    />
  </div>
</template>
