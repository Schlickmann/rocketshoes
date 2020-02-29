import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import background from '../assets/images/background.svg';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root, html, body {
    height: 100vh;
    width: 100vw;
  }

  body {
    background: #191920 url(${background}) no-repeat center top;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
