import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@700;800&family=Roboto:wght@400;700&display=swap');

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body, input, text-area, button {
    background: ${(props) => props.theme.background};
    font-family: 'Roboto', sans-serif;
  }
`
