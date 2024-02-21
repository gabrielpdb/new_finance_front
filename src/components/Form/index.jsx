import { Container } from './styles'

export function Form({ children, onSubmit, ...rest }) {
  return (
    <Container
      onSubmit={e => {
        e.preventDefault()
        onSubmit()
      }}
      {...rest}
    >
      {children}
    </Container>
  )
}
