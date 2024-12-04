import type { components } from '~types/schema'

export const useUserStore = defineStore('user', () => {
  const data = useLocalStorage<components['schemas']['system.SysUser']>(userKey, {})

  async function login(d: {
    username: string
    password: string
    captcha: string
    captchaID: string
  }) {
    const res = await client.POST('/base/login', {
      body: d,
    }).then(({ data }) => data.data)
    data.value = res.user
    setToken()
  }

  function logout() {
    removeToken()
    resetRouter()
    router.push('/login')
  }

  return {
    data,
    login,
    logout,
  }
})
