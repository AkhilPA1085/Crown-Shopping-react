import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body{
    font-family: ui-monospace;
    background-color: #F5F8FA;
 }

 p,button{
    color: ${({theme})=>theme.colors.text};
 }



`