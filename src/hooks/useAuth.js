import { login } from '@/services/auth'

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

  return {
    login,
    isAuthenticated,
    isTokenExpired,
    logout,
  }
}
