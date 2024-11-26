import type { FormRules } from 'element-plus'
import { reactive } from 'vue'

/** 密码正则（密码格式应为8-18位数字、字母、符号的任意两种组合） */
export const REGEXP_PWD
  = /^(?!\d+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)]|[()])+$)(?!^[^\n\r\u2028\u2029\u4E00-\u9FA5]*[\u4E00-\u9FA5].*$)([\s\S]){8,18}$/

/** 登录校验 */
const loginRules = reactive<FormRules>({
  password: [
    {
      validator: (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        }
        else if (!REGEXP_PWD.test(value)) {
          callback(
            new Error('密码格式应为8-18位数字、字母、符号的任意两种组合'),
          )
        }
        else {
          callback()
        }
      },
      trigger: 'blur',
    },
  ],
  captcha: [
    {
      trigger: 'blur',
      required: true,
      message: '请输入验证码',
    },
  ],
})

export { loginRules }
