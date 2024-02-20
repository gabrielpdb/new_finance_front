import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/login', { email, password })
      const { user, token } = response.data

      localStorage.setItem('@fitfinance:user', JSON.stringify(user))
      localStorage.setItem('@fitfinance:token', token)

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ user, token })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert('Não foi possível entrar')
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@fitfinance:token')
    localStorage.removeItem('@fitfinance:user')

    setData({})

    window.location.assign('/')
  }

  useEffect(() => {
    const token = localStorage.getItem('@fitfinance:token')
    const user = localStorage.getItem('@fitfinance:user')

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ token, user: JSON.parse(user) })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, signOut, user: data.user }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
