import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  /* Remove default margin and padding */
  margin: 0;
  padding: 0;
  
  /* Box sizing border-box */
  box-sizing: border-box;

  /* letter spacing */
  letter-spacing: 0.7px;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  color: #edf6f9;
}

/* Remove list styles */
ol,
ul {
  list-style: none;
}

/* Remove anchor text decoration */
a {
  text-decoration: none;
}

/* Set default font size and family */
body {
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  background-color: #23263a;
}

/* Clear floating elements */
.clearfix::before,
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
`;

export default GlobalStyles;
