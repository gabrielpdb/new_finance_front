import React from 'react'
import { Routes } from './routes'
import theme from './styles/theme'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { AuthProvider } from './hooks/auth'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AuthProvider>
      <Routes />
    </AuthProvider>
  </ThemeProvider>
)
