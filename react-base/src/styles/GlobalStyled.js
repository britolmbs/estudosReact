import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
*{
margin:0;
padding: 0;
outline: none;
box-sizing: border-box;
}

body {
font-family: sans-serif;
background: ${colors.primaryDarkColor};
color: ${colors.primaryDarkColor};
}

html, body, #root {
heigh: 100%;
}

button {
cursor: pointer;
background: ${colors.primaryColor};
boder: none;
color: #fff;
padding: 10px 20px;
boder-radius: 4px;
font-weight: 700;
trasition: all 300ms;
}
button:hover {
filter: brightness(75%);
}

a {
text-decoration: none:
color: ${colors.primaryColor};
}

ul {
list-style: none;
}

`;

export const Container = styled.section`
  max-width: 480px;
  background: #fff;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0 0.1);
`;
