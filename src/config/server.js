const serverOptions = {
  clientId: import.meta.env.VITE_NOVOSGA_ID || '',
  clientSecret: import.meta.env.VITE_NOVOSGA_SECRET || '',
  username: import.meta.env.USERNAME || '',
  password: import.meta.env.PASSWORD || '',
  baseUrl: import.meta.env.VITE_NOVOSGA_API_URL || '',
  mercureUrl: import.meta.env.VITE_NOVOSGA_MERCURE_URL || '',
  services: import.meta.env.VITE_SERVICES || '1',
}

export default serverOptions
