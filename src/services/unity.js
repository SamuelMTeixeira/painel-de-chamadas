import axiosInstance from '@/lib/axios'

export default function fetchUnity() {
  return new Promise((resolve) => {
    axiosInstance.get('/unidades/1').then(
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
        return Promise.reject(message)
      },
    )
  })
}
