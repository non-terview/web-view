import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *
  {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }
  body, html, #root {
    width: 100%;
    height: 100%;
  }
  a{
    text-decoration: none;
  }
  button{
    text-decoration: none;
    border: none;
  }
  input:focus{
    outline: none;
  }

`;

export default GlobalStyle;
