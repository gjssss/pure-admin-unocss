import { useUserStoreHook } from '@/store/modules/user'
import { isIncludeAllChildren, isString, storageLocal } from '@pureadmin/utils'
import Cookies from 'js-cookie'

export const userKey = 'user-info'
export const TokenKey = 'x-token'
/**
 * 通过`multiple-tabs`是否在`cookie`中，判断用户是否已经登录系统，
 * 从而支持多标签页打开已经登录的系统后无需再登录。
 * 浏览器完全关闭后`multiple-tabs`将自动从`cookie`中销毁，
 * 再次打开浏览器需要重新登录系统
 */
export const multipleTabsKey = 'multiple-tabs'

/** 获取`token` */
export function getToken(): string {
  // 此处与`TokenKey`相同，此写法解决初始化时`Cookies`中不存在`TokenKey`报错
  return Cookies.get(TokenKey)
    ? Cookies.get(TokenKey)
    : storageLocal().getItem(userKey)
}

export function setToken() {
  const { isRemembered, loginDay } = useUserStoreHook()

  Cookies.set(
    multipleTabsKey,
    'true',
    isRemembered
      ? {
          expires: loginDay,
        }
      : {},
  )
}

/** 删除`token`以及key值为`user-info`的localStorage信息 */
export function removeToken() {
  Cookies.remove(TokenKey)
  Cookies.remove(multipleTabsKey)
  storageLocal().removeItem(userKey)
}

/** 格式化token（jwt格式） */
export function formatToken(token: string): string {
  return `Bearer ${token}`
}

/** 是否有按钮级别的权限（根据登录接口返回的`permissions`字段进行判断） */
export function hasPerms(value: string | Array<string>): boolean {
  if (!value)
    return false
  const allPerms = '*:*:*'
  const { permissions } = useUserStoreHook()
  if (!permissions)
    return false
  if (permissions.length === 1 && permissions[0] === allPerms)
    return true
  const isAuths = isString(value)
    ? permissions.includes(value)
    : isIncludeAllChildren(value, permissions)
  return !!isAuths
}
