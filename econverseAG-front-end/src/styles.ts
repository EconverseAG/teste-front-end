import styled, { createGlobalStyle } from "styled-components";

export const cores = {
    branco: '#FFFFFF',
    amarelo: '#F7CA11',
    roxoEscuro: '#3019B2',
    roxo: '#3442B5',
    cinza: '#3F3F40',
    cinzaClaro: '#9F9F9F',
    roxoMedio: '#271C47',
    pretoClaro: '#222222B5',
    brancoLinha: '#F0F0F0',
    corInput: '#F6F5F2',
    boxShadow: '#3930131F',
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: bordex-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${cores.branco};
    }
`

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
`

