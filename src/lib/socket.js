import serverOptions from '@/config/server'
import io from 'socket.io-client'

const socket = io(`${serverOptions.websocketURL}`, {
  path: '/socket.io',
  transports: ['websocket'],
  secure: !0,
  timeout: 60e3,
  reconnection: !0,
  reconnectionDelay: 80e3,
  reconnectionDelayMax: 30e3,
  reconnectionAttempts: 50,
})

export default socket
