import type { Middleware } from 'openapi-fetch'
import type { paths } from '../../types/schema'
import createClient from 'openapi-fetch'
import NProgress from './progress'

interface ResponseData<T = object> {
  code: number
  data: T
  msg: string
}

export const client = createClient<paths>({ baseUrl: 'admin' })

// 检查code，构建干净的data
const middleware: Middleware = {
  onRequest() {
    NProgress.start()
  },
  async onResponse({ response }) {
    const data: ResponseData = await response.clone().json()
    if (data.code !== 0) {
      NProgress.done()
      return Promise.reject(new Error(data.msg))
    }
    NProgress.done()
    return response
  },
}

client.use(middleware)
