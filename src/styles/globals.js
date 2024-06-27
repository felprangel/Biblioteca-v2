import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --cor-sombra: rgba(0, 0, 0, 0.1);
        --preto: black;
        --cinza: #F0EEF1;
        --branco: #FFFBFB;
    }

    * {
        margin: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
`
