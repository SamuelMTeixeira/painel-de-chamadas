import serverOptions from '@/config/server'
import axios from 'axios'

const url = serverOptions.baseURL

const axiosInstance = axios.create({
  timeout: 100000,
  baseURL: `${url}/api/`
})

axiosInstance.interceptors.request.use(
  async (config) => {

    const date = new Date()
    const expire_date = new Date(localStorage.getItem('expire_date'))
    const token = localStorage.getItem('token')
    
    if (token && !(date > expire_date)) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  error => Promise.reject(error)
)


export default axiosInstance
