import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body{
   font-family: 'Mukta', sans-serif;
    background-color: #F5F8FA;
    ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
  scrollbar-width: none;
 }

 p,button{
    color: ${({theme})=>theme.colors.text};
 }



`