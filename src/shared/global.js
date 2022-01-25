import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700;900&display=swap');
  ${reset}

  font-family: 'Roboto', sans-serif;
  font-family: 'Raleway', sans-serif;
`;

export default GlobalStyle;
