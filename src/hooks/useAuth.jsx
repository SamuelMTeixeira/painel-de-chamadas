import { fetchLogin, logout } from '@/services/auth'
import { useMutation } from '@tanstack/react-query'
import serverOptions from '@/config/server'
import { useState } from 'react'
import { redirect } from 'react-router-dom'

export default function useAuth() {
  const { client_id, client_secret } = serverOptions

  const [userRequest, setUserRequest] = useState({
    username: null,
    password: null,
  })

  const { isError, isPending, mutate } = useMutation({
    mutationFn: () =>
      fetchLogin({
        client_id,
        client_secret,
        username: userRequest.username,
        password: userRequest.password,
      }),
    onSuccess: () => {
      redirect('/')
    },
  })

  const login = ({ username, password }) => {
    setUserRequest({ username: username, password: password })
    mutate()
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
