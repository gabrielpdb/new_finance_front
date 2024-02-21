import { Container } from './styles'

export function Button({ title, isActive = true, type, ...rest }) {
  return (
    <Container
      type="button"
      $type={type}
      $isactive={isActive.toString()}
      {...rest}
    >
      {title}
    </Container>
  )
}
