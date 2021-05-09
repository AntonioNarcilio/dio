import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
    width: 0px;
}

body {
  background-color: ${(props) => props.theme.colors.secondary};
  font-family: 'Arial', Times, serif;
  color: ${(props) => props.theme.colors.white};
}

/* body,
input,
textarea,
button {
  font: 400 1rem "inter", sans-serif;
} 
*/
button {
  cursor: pointer;
}

a {
  color: inherit; 
  text-decoration: none;
}


@media (max-width: 1000px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

`;
