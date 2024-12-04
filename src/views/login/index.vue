<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import darkIcon from '@/assets/svg/dark.svg?component'
import dayIcon from '@/assets/svg/day.svg?component'
import { useRenderIcon } from '@/components/ReIcon/src/hooks'
import { useDataThemeChange } from '@/layout/hooks/useDataThemeChange'
import { useLayout } from '@/layout/hooks/useLayout'
import { useNav } from '@/layout/hooks/useNav'
import { initRouter } from '@/router/utils'
import { message } from '@/utils/message'
import Lock from '@iconify-icons/ri/lock-fill'
import User from '@iconify-icons/ri/user-3-fill'
import { onBeforeUnmount, onMounted, reactive, ref, toRaw } from 'vue'

import { useRouter } from 'vue-router'
import Motion from './utils/motion'
import { avatar, bg, illustration } from './utils/static'

defineOptions({
  name: 'Login',
})
const router = useRouter()
const loading = ref(false)
const ruleFormRef = ref<FormInstance>()

const { initStorage } = useLayout()
initStorage()

const { dataTheme, overallStyle, dataThemeChange } = useDataThemeChange()
dataThemeChange(overallStyle.value)
const { title } = useNav()

const ruleForm = reactive({
  username: 'admin',
  password: '123123123',
  captcha: '',
})

const { state: captcha } = useAsyncState(client.POST('/base/captcha').then(d => d.data.data), {
  captchaId: '0',
  captchaLength: 6,
  openCaptcha: false,
  picPath: '',
})

async function onLogin(formEl: FormInstance | undefined) {
  if (!formEl)
    return
  await formEl.validate(async (valid) => {
    if (valid) {
      loading.value = true
      try {
        await useUserStore()
          .login({
            username: ruleForm.username,
            password: ruleForm.password,
            captcha: ruleForm.captcha,
            captchaID: captcha.value.captchaId,
          })
        await initRouter()
        router.push('/')
        message('登录成功', { type: 'success' })
      }
      catch (e) {
        message(e.message, { type: 'error' })
      }
      finally {
        loading.value = false
      }
    }
  })
}

/** 使用公共函数，避免`removeEventListener`失效 */
function onkeypress({ code }: KeyboardEvent) {
  if (['Enter', 'NumpadEnter'].includes(code)) {
    onLogin(ruleFormRef.value)
  }
}

onMounted(() => {
  window.document.addEventListener('keypress', onkeypress)
})

onBeforeUnmount(() => {
  window.document.removeEventListener('keypress', onkeypress)
})
</script>

<template>
  <div class="select-none">
    <img :src="bg" class="wave">
    <div class="flex-c absolute right-5 top-3">
      <!-- 主题 -->
      <el-switch
        v-model="dataTheme"
        inline-prompt
        :active-icon="dayIcon"
        :inactive-icon="darkIcon"
        @change="dataThemeChange"
      />
    </div>
    <div class="login-container">
      <div class="img">
        <component :is="toRaw(illustration)" />
      </div>
      <div class="login-box">
        <div class="login-form">
          <avatar class="avatar" />
          <Motion>
            <h2 class="outline-none">
              {{ title }}
            </h2>
          </Motion>

          <el-form
            ref="ruleFormRef"
            :model="ruleForm"
            size="large"
          >
            <Motion :delay="100">
              <el-form-item
                :rules="[
                  {
                    required: true,
                    message: '请输入账号',
                    trigger: 'blur',
                  },
                ]"
                prop="username"
              >
                <el-input
                  v-model="ruleForm.username"
                  clearable
                  placeholder="账号"
                  :prefix-icon="useRenderIcon(User)"
                />
              </el-form-item>
            </Motion>

            <Motion :delay="150">
              <el-form-item
                prop="password"
                :rules="[
                  {
                    required: true,
                    message: '请输入密码',
                    trigger: 'blur',
                  },
                ]"
              >
                <el-input
                  v-model="ruleForm.password"
                  clearable
                  show-password
                  placeholder="密码"
                  :prefix-icon="useRenderIcon(Lock)"
                />
              </el-form-item>
            </Motion>

            <Motion v-if="captcha.openCaptcha" :delay="150">
              <div class="flex gap-20px items-center">
                <div class="max-w-40%">
                  <img :src="captcha.picPath" alt="验证码">
                </div>
                <el-form-item
                  prop="captcha"
                  :rules="[
                    {
                      required: true,
                      message: '请输入验证码',
                      trigger: 'blur',
                    },
                  ]"
                  class="flex-1 m-0!"
                >
                  <el-input
                    v-model="ruleForm.captcha"
                    clearable
                    placeholder="验证码"
                  />
                </el-form-item>
              </div>
            </Motion>

            <Motion :delay="250">
              <el-button
                class="w-full mt-4"
                size="default"
                type="primary"
                :loading="loading"
                @click="onLogin(ruleFormRef)"
              >
                登录
              </el-button>
            </Motion>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("@/style/login.css");
</style>

<style lang="scss" scoped>
:deep(.el-input-group__append, .el-input-group__prepend) {
  padding: 0;
}
</style>
