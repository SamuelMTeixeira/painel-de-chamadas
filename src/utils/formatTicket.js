export default function formatTicket(data) {
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
