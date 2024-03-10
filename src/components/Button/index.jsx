import { Container } from './styles'

export function Button({ title, isActive = true, type, ...rest }) {
  return (
    <Container
      type={type}
      $type={type}
      $isactive={isActive.toString()}
      {...rest}
    >
      {title}
    </Container>
  )
}
