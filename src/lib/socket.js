import io from 'socket.io-client'

const socket = io('http://localhost:2020', {
  path: '/socket.io',
  transports: ['websocket'],
  secure: !0,
  timeout: 2e3,
  reconnection: !0,
  reconnectionDelay: 1e3,
  reconnectionDelayMax: 5e3,
  reconnectionAttempts: 3
});

export default socket