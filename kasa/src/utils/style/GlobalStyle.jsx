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

    main {
        width: 86.11%;
        margin: auto;
    }

    ul{
        box-sizing: border-box;
    }

    a {
        text-decoration:none;
    }

    h1 {
        font-family: 'Montserrat', "Arial", "Sans-serif";
        font-style: normal;
        font-weight: 500;
    }

    h2 {
        font-family: 'Montserrat', "Arial", "Sans-serif";
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 142.6%;
    }

    h1, h2, h3, ul, p{
        margin-block-start :0px;
        margin-block-end:0px;
    }

    button{
        background:none;
        border:none;
    }

}

@media (max-width: 600px) {
    main{
    width: 89.33%;
    }
  }

`;

export default GlobalStyle;