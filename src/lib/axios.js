import serverOptions from '@/config/server'
import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'

const url = serverOptions.baseURL

const axiosInstance = axios.create({
  timeout: 100000,
  baseURL: `${url}/api/`,
})

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

const refreshAuthLogic = (failedRequest) => {
  const form = new FormData()
  form.append('grant_type', 'refresh_token')
  form.append('client_id', serverOptions.client_id)
  form.append('client_secret', serverOptions.client_secret)
  form.append('refresh_token', localStorage.getItem('refresh_token'))

  axiosInstance
    .post('token', form)
    .then((tokenRefreshResponse) => {
      localStorage.setItem('token', tokenRefreshResponse.data.access_token)
      localStorage.setItem(
        'refresh_token',
        tokenRefreshResponse.data.refresh_token,
      )
      failedRequest.response.config.headers['Authorization'] =
        'Bearer ' + tokenRefreshResponse.data.token
      return Promise.resolve()
    })
    .catch((error) => {
      console.error('Refresh token failed', error)
      return Promise.reject(error)
    })
    .finally(() => {
      console.log('Refresh token done')
    })
}

createAuthRefreshInterceptor(axiosInstance, refreshAuthLogic)

export default axiosInstance
