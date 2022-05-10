import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    background-color: #68A7AD;
    padding: 0;
    margin: 0;
    color: #fff;
    font-family: 'Quicksand', sans-serif;
    font-weight: 500;
    
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
