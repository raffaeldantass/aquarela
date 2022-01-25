import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  font-family: 'Roboto', sans-serif;
  font-family: 'Raleway', sans-serif;
`;

export default GlobalStyle;
