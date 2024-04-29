import axiosInstance from '@/lib/axios'

async function sendLoginRequest({
  client_id,
  client_secret,
  username,
  password,
}) {
  const form = new FormData()
  form.append('grant_type', 'password')
  form.append('client_id', client_id)
  form.append('client_secret', client_secret)
  form.append('username', username)
  form.append('password', password)

  return new Promise((resolve, reject) => {
    axiosInstance.post('token', form).then(
      (response) => {
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

async function login({ client_id, client_secret, username, password }) {
  const { access_token, expires_in, refresh_token } = await sendLoginRequest({
    client_id,
    client_secret,
    username,
    password,
  })

  const expire_date = new Date(Date.now() + expires_in * 1000)

  if (access_token || expire_date || refresh_token) {
    localStorage.setItem('token', access_token)
    localStorage.setItem('expire_date', expire_date)
    localStorage.setItem('refresh_token', refresh_token)
  }

  return !!access_token
}

export { login }
