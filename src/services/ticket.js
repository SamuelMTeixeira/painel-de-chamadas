import axiosInstance from '@/lib/axios'
import serverOptions from '@/config/server'

export async function fectchTickets() {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get(`unidades/1/painel?servicos=${serverOptions.services}`)
      .then(
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

export async function tickets() {
  const tickets = await fectchTickets()

  const ticketsList = tickets.map((ticket) => normalizeMessage(ticket))

  return await ticketsList
}

function normalizeMessage(data) {
  return {
    id: data.id,
    type: 'ticket',
    title: data.siglaSenha + ('000' + data.numeroSenha).slice(-3),
    subtitle: data.local + ' ' + ('00' + data.numeroLocal).slice(-2),
    description: data.prioridade,
    paciente: data.nomeCliente,
    guiche: data.numeroLocal,
    setor: data.servico.nome,
    $data: data,
  }
}
