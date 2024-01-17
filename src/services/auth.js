import axiosInstance from '@/lib/axios';

async function makeRequest({ client_id, client_secret, username, password }) {
  const form = new FormData();
  form.append('grant_type', 'password')
  form.append('client_id', client_id)
  form.append('client_secret', client_secret)
  form.append('username', username)
  form.append('password', password)

  return new Promise((resolve, reject) => {
    axiosInstance.post('token', form)
      .then(response => {
        resolve(response.data)
      }, error => {
        let message = error.message
        if (error.response) {
          message = error.response.statusText
          if (error.response.data && error.response.data.error_description) {
            message += ': ' + error.response.data.error_description
          }
        }
        reject(message)
      })
  })
}

async function login({ client_id, client_secret, username, password }) {
  const { access_token } = await makeRequest({ client_id, client_secret, username, password })

  if (access_token) {
    localStorage.setItem('token', access_token)
  }

}


export { login }