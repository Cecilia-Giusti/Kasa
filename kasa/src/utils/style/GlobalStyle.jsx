import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
@media all {
    body {
        width:100%;
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

    h1 {
        font-family: 'Montserrat', "Arial", "Sans-serif";
        font-style: normal;
        font-weight: 500;
        margin-block-start :0px;
        margin-block-end:0px;
    }

    h2 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 142.6%;
    }

}

`;

export default GlobalStyle;
