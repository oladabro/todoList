import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    } 

    body{
        font-family: 'Nunito', sans-serif;
        /* background: linear-gradient(171deg, #ffc12f, rgba(255, 72, 0, 1) 91.71%); */
        /* background-color:rgba(255,193,47,255); */

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        /* margin: 0 auto; */
        /* height: 100vh; */

    }
        

`;
