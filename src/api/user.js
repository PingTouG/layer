import axios from '@/utils/axios'

const key = 'LAYER_USER_INFO'

// 获取本地缓存的用户信息
export function getUserInfo() {
  const userInfo = window.localStorage.getItem(key)

  return userInfo ? JSON.parse(userInfo) : null
}

// 设置本地缓存的用户信息
export function setUserInfo(payload) {
  const userInfo = JSON.stringify(payload)

  window.localStorage.setItem(key, userInfo)
}

// 清理本地缓存的用户信息
export function removeUserInfo() {
  window.localStorage.removeItem(key)
}

// 登录
export function login(payload) {
  return axios.post('/login', payload)
}

export default {
  login
}
