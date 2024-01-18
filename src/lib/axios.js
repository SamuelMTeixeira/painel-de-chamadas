import serverOptions from '@/config/server'
import axios from 'axios'

const url = serverOptions.baseURL

const axiosInstance = axios.create({
  timeout: 100000,
  baseURL: `${url}/api/`
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)


export default axiosInstance
