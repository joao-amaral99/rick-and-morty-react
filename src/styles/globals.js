import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    background-color: #f7f7f7;
  }

  a {
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }

  ul {
    list-style: none;
  }

  .dark-mode {
    background-color: #0a0a0b;
  }
`

