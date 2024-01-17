import axios from 'axios'

const url = 'http://localhost'

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
