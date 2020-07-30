import axios from 'axios'
import { getToken } from '@/api/token'

const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL
})

// 请求前拦截
instance.interceptors.request.use(config => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

// 请求后拦截
instance.interceptors.response.use(({ data }) => {
  // mock
  return new Promise((resolve, reject) => {
    const { code } = data
    if (code === 200) {
      resolve(data.data)
    } else {
      reject(data)
    }
  })

  // return response.data;
})

export default instance
