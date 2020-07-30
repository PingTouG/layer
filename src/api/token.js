/**
 * token(@PingTouG)
 * token服务
 */
const key = 'LAYER_ACCESS_TOKEN'

// 获取
export function getToken() {
  return window.localStorage.getItem(key)
}

// 设置
export function setToken(token) {
  if (token) {
    window.localStorage.setItem(key, token)
  }
}

// 删除
export function removeToken() {
  window.localStorage.removeItem(key)
}

export default {
  getToken,
  setToken,
  removeToken
}
