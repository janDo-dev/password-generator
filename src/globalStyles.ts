import { createGlobalStyle } from "styled-components";
import "./reset.css";

const GlobalStyle = createGlobalStyle`
  :root {
    --dark: #0f0a0a;
    --light: #f5efed;
    --accent: #2292a4;
    --success: #cbe896;
  }

  body {
    background-color: var(--dark);
    color: #fff;
    text-align: center;
    margin: 0;
    font-family: "Arvo", "Arial", "Verdana", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    display: flex;
    justify-content: center; 
    align-items: center;
    min-height: 100vh;
  }
`;

export default GlobalStyle;
