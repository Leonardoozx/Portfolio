import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  /* Remove default margin and padding */
  margin: 0;
  padding: 0;
  
  /* Box sizing border-box */
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: Arial, sans-serif;
  font-size: 16px;
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
