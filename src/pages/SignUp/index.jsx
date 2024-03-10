import { Container } from './styles'
import logo from '../../assets/green_logo.svg'
import { Form } from '../../components/Form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { api } from '../../services/api'

export function SignUp() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  async function handleSignUp(e) {
    e.preventDefault()

    if (!name || !email || !password || !confirmPassword) {
      return alert('Preencha todos os campos!')
    }

    if (password != confirmPassword) {
      return alert('Senhas não conferem')
    }

    try {
      await api.post('/users', { name, email, password })

      alert('Usuário cadastrado com sucesso')

      return navigate('/')
    } catch (error) {
      if (error.message) {
        return alert(error.response.data.message)
      } else {
        return alert('Não foi possível cadastrar')
      }
    }
  }
  return (
    <Container>
      <img src={logo} alt="Logo FitFinance" />
      <Form onSubmit={e => handleSignUp(e)}>
        <Input
          id={'name'}
          title={'Nome'}
          type={'text'}
          value={name}
          onChange={e => setName(e.target.value)}
        />
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
        <Input
          id={'confirm_password'}
          title={'Confirmar senha'}
          type={'password'}
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <Button title={'Cadastrar'} type={'submit'} />
      </Form>
      <Link to={'/'}>Voltar para o login</Link>
    </Container>
  )
}
