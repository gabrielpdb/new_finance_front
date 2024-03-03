import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  label {
    color: ${({ theme }) => theme.COLORS.FIT_GRAY};
  }

  input {
    font-size: 1.6rem;
    padding: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.BLACK_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button {
    margin-top: 2rem;
  }
`
