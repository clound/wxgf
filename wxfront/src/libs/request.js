import axios from 'axios'
const API = process.env.NODE_ENV === 'production' ? '/node' : '/api'
// 创建axios实例
const service = axios.create({
  baseURL: API, // api的base_url
  timeout: 60000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response
    return res
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
