import { login, updateToken } from '@/services/auth'
import config from '@/config/server'

export default function useAuth() {
  const expire_date = new Date(localStorage.getItem('expire_date'))

  const token = localStorage.getItem('token')
  const isAuthenticated = !!token
  const isTokenExpired = new Date() > expire_date

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('refresh_token')
    localStorage.removeItem('expire_date')
  }

  const refreshToken = async () => {
    if (!isTokenExpired) return

    await updateToken({
      client_id: config.client_id,
      client_secret: config.client_secret,
      refresh_token: localStorage.getItem('refresh_token'),
    })
  }

  return {
    login,
    isAuthenticated,
    updateToken,
    isTokenExpired,
    refreshToken,
    logout,
  }
}
