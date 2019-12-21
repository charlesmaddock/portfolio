import { createGlobalStyle } from 'styled-components/macro';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: 'Courier Prime', monospace;
  }
  a{
    text-decoration: none;
    color: ${props => props.theme.link};
  }
  h1, h2, h3 {
    font-weight: bold;
    font-style: normal;
  }
`;
