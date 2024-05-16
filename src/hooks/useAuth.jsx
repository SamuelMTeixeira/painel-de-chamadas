import { fetchLogin, logout } from '@/services/auth'
import { useMutation } from '@tanstack/react-query'

export default function useAuth() {
  const { isError, isPending, mutate } = useMutation({
    mutationFn: async (data) => {
      return await fetchLogin(data)
    },
    onSuccess: () => {
      window.location.href = '/'
    },
  })

  const login = ({ username, password }) => {
    mutate({
      username,
      password,
    })
  }

  const isAuthenticated = !!localStorage.getItem('token')

  return {
    login,
    logout,
    isAuthenticated,

    isError,
    isPending,
  }
}
