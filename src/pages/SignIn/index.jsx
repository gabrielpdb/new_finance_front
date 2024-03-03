import { Container } from './styles'
import logo from '../../assets/green_logo.svg'
import { Form } from '../../components/Form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function SignIn() {
  return (
    <Container>
      <img src={logo} alt="Logo FitFinance" />
      <Form>
        <Input id={'email'} title={'Email'} type={'email'} />
        <Input id={'password'} title={'Senha'} type={'password'} />
        <Button title={'Entrar'} type={'confirm'} />
      </Form>
      <Link to={'/register'}>Criar conta</Link>
    </Container>
  )
}
