import serverOptions from '@/config/server'

const url = new URL(serverOptions.mercureURL)

url.searchParams.append('topic', '/unidades/1/painel')
const mercure = new EventSource(url)

export default mercure
