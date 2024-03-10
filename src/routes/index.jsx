import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../hooks/auth'

import { AppRoutes } from './app.routes'
import { AuthRoutes } from './auth.routes'
import { api } from '../services/api'

export function Routes() {
  const { user, signOut } = useAuth()

  api.interceptors.response.use(
    response => response,
    error => {
      console.log(error)
      if (error.response.data.message == 'Invalid JWT Token') {
        signOut()
        error.response.data.message = 'Sessão expirada, faça login novamente'
      }

      throw error
    }
  )

  return <BrowserRouter>{user ? <AppRoutes /> : <AuthRoutes />}</BrowserRouter>
}
