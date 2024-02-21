import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    padding: 3.6rem;
    border-radius: 0.8rem;

    background: ${({ theme }) => theme.COLORS.BLACK_500};
  }
`
