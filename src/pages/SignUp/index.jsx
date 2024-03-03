import { Container } from './styles'
import logo from '../../assets/green_logo.svg'
import { Form } from '../../components/Form'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <Container>
      <img src={logo} alt="Logo FitFinance" />
      <Form>
        <Input id={'name'} title={'Nome'} type={'text'} />
        <Input id={'email'} title={'Email'} type={'email'} />
        <Input id={'password'} title={'Senha'} type={'password'} />
        <Input
          id={'confirm_password'}
          title={'Confirmar senha'}
          type={'password'}
        />
        <Button title={'Cadastrar'} type={'confirm'} />
      </Form>
      <Link to={'/'}>Voltar para o login</Link>
    </Container>
  )
}
