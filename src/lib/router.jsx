import Home from '@/pages/Home'
import Settings from '@/pages/Settings'
import { createBrowserRouter, redirect } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: async () => {
      const isAuthenticated = !!localStorage.getItem('token')

      if (!isAuthenticated) {
        console.warn(
          'Usuário não autenticado, redirecionando para a página de login.',
        )
        return redirect('/login')
      }

      return null
    },
  },
  {
    path: '/login',
    element: <Settings />,
    loader: async () => {
      const isAuthenticated = !!localStorage.getItem('token')

      if (isAuthenticated) {
        console.warn(
          'Usuário autenticado, redirecionando para a página inicial.',
        )
        return redirect('/')
      }

      return null
    },
  },
])

export default router
