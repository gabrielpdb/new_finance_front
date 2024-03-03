import styled from 'styled-components'

export const Container = styled.button`
  border: none;
  font-size: 1.8rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;

  background: ${({ $type, theme }) => {
    switch ($type) {
      case 'confirm':
        return theme.COLORS.FIT_GREEN
      case 'cancel':
        return theme.COLORS.RED
      default:
        return theme.COLORS.BLACK_500
    }
  }};

  color: ${({ theme }) => theme.COLORS.BLACK};

  &:active {
    filter: brightness(0.5);
  }
`
