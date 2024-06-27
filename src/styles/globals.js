import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --cor-sombra: rgba(0, 0, 0, 0.1);
        --preto: black;
        --branco: #FFFBFB;
        --cinza: #F0EEF1;
        --cinza-escuro: #D8D8D8;
    }

    * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
`
