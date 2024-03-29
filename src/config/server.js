const serverOptions = {
  client_id: import.meta.env.VITE_CLIENT_ID || '',
  client_secret: import.meta.env.VITE_CLIENT_SECRET || '',
  username: import.meta.env.USERNAME || '',
  password: import.meta.env.PASSWORD || '',
  baseURL: import.meta.env.VITE_API_URL || '',
}

export default serverOptions
