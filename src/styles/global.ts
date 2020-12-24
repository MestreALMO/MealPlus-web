import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #000312;
    color: #fff;
    -webkit-font-smoothing: antialiased;
    font-family: sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
