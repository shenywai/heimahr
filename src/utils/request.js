import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: '/api', // 基地址
  timeout: 10000 // 超时时间
})

// 请求拦截器,第一个是成功,第二个是失败
service.interceptors.request.use((config) => {
  if (store.getters.token) {
    config.headers.Authorization = `Bearer ${store.getters.token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})
export default service
