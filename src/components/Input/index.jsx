import { Container } from './styles'

export function Input({ id, title, type, isActive = true, ...rest }) {
  const inputMode = type === 'number' ? 'decimal' : null

  return (
    <Container $isActive={isActive}>
      <label htmlFor={id}>{title}</label>
      <input id={id} inputMode={inputMode} type={type} {...rest} />
    </Container>
  )
}
