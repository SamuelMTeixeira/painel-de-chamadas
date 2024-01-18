import serverOptions from '@/config/server';
import io from 'socket.io-client'

const socket = io(serverOptions.websocketURL, {
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