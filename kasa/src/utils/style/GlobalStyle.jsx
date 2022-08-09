import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
@media all {
    body {
        width:90%;
        background-color : ${colors.backgroundBody}
        font-family: 'Montserrat', "Arial", "Sans-serif";
        font-style: normal;
        font-weight: 500;
        margin:auto;
        list-style: none;
    }

    a {
        text-decoration:none;
    }

}

@media (max-width: 375px) {
   
  }
`;

export default GlobalStyle;
