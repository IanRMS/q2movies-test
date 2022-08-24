import { createGlobalStyle } from 'styled-components';
import { colors } from '../utils/constants';


const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ::-webkit-scrollbar {
    width: 8px;
    background: ${colors.background};
  }
 
  ::-webkit-scrollbar-track {
    background: transparent;
  }
 
  ::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
}

button {
  font-family: Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;


export default GlobalStyle;
