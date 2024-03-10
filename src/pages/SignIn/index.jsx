import { Container } from './styles'
import { useAuth } from '../../hooks/auth'
import logo from '../../assets/green_logo.svg'
import { Form } from '../../components/Form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function SignIn() {
  const { signIn } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignIn(e) {
    e.preventDefault()

    if (!email || !password) {
      return alert('Preencha todos os campos!')
    }

    signIn({ email, password })
  }

  return (
    <Container>
      <img src={logo} alt="Logo FitFinance" />
      <Form onSubmit={e => handleSignIn(e)}>
        <Input
          id={'email'}
          title={'Email'}
          type={'email'}
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          id={'password'}
          title={'Senha'}
          type={'password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button title={'Entrar'} type="submit" />
      </Form>
      <Link to={'/register'}>Criar conta</Link>
    </Container>
  )
}
