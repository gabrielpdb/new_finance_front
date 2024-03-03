import { createGlobalStyle } from 'styled-components'
import '../fonts/index.css'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body, input, button, textarea {
    font-family: 'Grandis', sans-serif;
    font-weight: 300;
    outline: none;
  }

  body {
    width: 100%;
    font-size: 1.6rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_DARK};
    color: ${({ theme }) => theme.COLORS.BLACK_900};

    -webkit-font-smoothing: antialiased;

    display: grid;
    grid-template-rows: 6.4rem auto;
    grid-template-areas: 
    'header'
    'content';
    
  }

  a  {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE}
  }

  button, a {
    cursor: pointer;
    transition: 200ms;
  }
`
