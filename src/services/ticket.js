import axiosInstance from '@/lib/axios'
import serverOptions from '@/config/server'
import useAuth from '@/hooks/useAuth'
import formatTicket from '@/utils/formatTicket'

export async function fetchTickets() {
  return new Promise((resolve) => {
    axiosInstance
      .get(`unidades/1/painel?servicos=${serverOptions.services}`)
      .then(
        (response) => {
          const ticketResponse = response.data.map((ticket) =>
            formatTicket(ticket),
          )
          resolve(ticketResponse)
        },
        (error) => {
          const originalRequest = error.config
          const { refreshToken } = useAuth()
          if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true
            return Promise.resolve(refreshToken)
          }

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
