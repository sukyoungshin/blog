import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      font-size: 62.5%;
  }

  #__next {
    padding: 0;
    margin: 0 auto;
    width: 100%;
    min-width: 390px;
    max-width: 100%;
    height: 100%;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
    line-height: 150%;
  }
  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    border: none;
    cursor: pointer;
  }
`
