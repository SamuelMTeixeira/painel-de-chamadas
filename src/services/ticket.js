import axiosInstance from "@/lib/axios"
import { updateToken } from "./auth"
import serverOptions from "@/config/server"

export async function fectchTickets() {
    return new Promise((resolve, reject) => {
        axiosInstance.get('unidades/1/painel?servicos=1')
            .then(response => {
                updateToken({
                    client_id: serverOptions.client_id,
                    client_secret: serverOptions.client_secret,
                    refresh_token: localStorage.getItem('refresh_token')
                })
                
                resolve(response.data)
            }, error => {

            
                   
                
                /*   console.log(error)
   
                   let message = error.message
                   if (error.response) {
                       message = error.response.statusText
                       if (error.response.data && error.response.data.error_description) {
                           message += ': ' + error.response.data.error_description
                       }
                   }
                   reject(message)
                   */
            })
    })
}


export async function tickets() {
    const tickets = await fectchTickets()

    const ticketsList = tickets.map(ticket => normalizeMessage(ticket))

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
        $data: data
    }
}