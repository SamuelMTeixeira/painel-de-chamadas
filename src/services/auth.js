import axiosInstance from '@/lib/axios'
import serverOptions from '@/config/server'

async function fetchLogin({ username, password }) {
  const { client_id, client_secret } = serverOptions

  if (!client_id || !client_secret || !username || !password) {
    return Promise.reject('parameters missing')
  }

  const form = new FormData()
  form.append('grant_type', 'password')
  form.append('client_id', client_id)
  form.append('client_secret', client_secret)
  form.append('username', username)
  form.append('password', password)

  return new Promise((resolve, reject) => {
    axiosInstance.post('token', form).then(
      (response) => {
        localStorage.setItem('token', response.data.access_token)
        localStorage.setItem('refresh_token', response.data.refresh_token)

        resolve(response.data)
      },
      (error) => {
        let message = error.message
        if (error.response) {
          message = error.response.statusText
          if (error.response.data && error.response.data.error_description) {
            message += ': ' + error.response.data.error_description
          }
        }
        reject(message)
      },
    )
  })
}

const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('refresh_token')
}

export { fetchLogin, logout }
