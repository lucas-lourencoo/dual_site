import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --blue-400: #003752;
    --blue-100: #E7F9FF;
    --green-400: #61BD2E;
    --white: #F6F8FA;
    --gray-200: #EAEAEA;
    --black: #2A2A2A;
  }

  @media (max-width: 768px){
    html {
      font-size: 93.75%;
    }
  }
  
  @media (max-width: 520px){
    html {
      font-size: 87.5%;
    }
  }

  body {
    font-family: "Open Sans", sans-serif;
    color: var(--white);
    position: relative;

    ::before{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      background-image: url('/background.png');
      background-size: contain;
      z-index: -1;

      @media (max-width: 520px){
        background-size: cover;
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  button, input, textarea, select {
    border: 0;
    background: transparent;
  }
`;
