import serverOptions from '@/config/server';
import io from 'socket.io-client'

const socket = io(serverOptions.websocketURL, {
  secure: false,
  requestCert: false,
  path: '/socket.io',
  transports: ['websocket']
});

export default socket