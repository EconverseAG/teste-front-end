import styled from "styled-components"
import { cores } from "../../styles"


export const HeaderBar = styled.header`
    margin: 0 auto;
    z-index: 10; /* Mantém o Header acima de outros elementos */
`

export const HeaderShip = styled.div`
    display: flex;
    justify-content: center;
    gap: 120px;
    padding: 6px 0 6px 0;
    border-bottom: 1px solid ${cores.brancoLinha};

    div {
        display: flex;
        align-items: center;
        gap: 8px;
    }

    p {
        font-size: 12px;
        font-family: Poppins, sans-serif;
        font-weight: 500;
        line-height: 18px;
        color: ${cores.cinzaClaro};
    }

    span {
        color: ${cores.roxoEscuro};
        font-weight: 600;
    }
`

export const HeaderLogo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 16px 0;
    border-bottom: 1px solid ${cores.brancoLinha};

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }

    > div > div:nth-child(1) {
        /* Div da logo */
        display: block;
        align-items: center;
    }

    > div > div:nth-child(2) {
        /* Div do input */
        position: relative;

        input {
        width: 630px;
        border: none;
        height: 48px;
        padding: 8px 12px;
        background-color: ${cores.corInput};
        border-radius: 10px;
        font-size: 14px;
        font-family: Poppins, sans-serif;
        font-weight: 500;
        
        &::placeholder {
            color: ${cores.cinzaClaro}
            }
        }
        
        img {
            position: absolute;
            top: 50%;
            right: 24px;
            transform: translateY(-50%);
            width: 28px;
            height: 28px;
        }
    }

    > div > div:nth-child(3) {
        /* Div dos ícones */
        display: flex;
        justify-content: flex-end;
        gap: 32px; /* Espaçamento entre os ícones */

        img {
            width: 32px;
            height: 32px;
        }
    }
`

export const HeaderMenu = styled.div`
    padding: 16px 0;
    box-shadow: 10px 8px 16px #3930131F; /* Sombra com os valores da imagem */
    position: relative; /* Garante que o Hero comece após o HeaderMenu */
    z-index: 10; /* Mantém o HeaderMenu acima do Hero */

    div {
        max-width: 1140px; /* Limita a largura máxima */
        width: 100%;
        display: flex;
        margin: 0 auto;
        justify-content: center;
    }

    ul {
        display: flex; 
        justify-content: space-between;
        align-items: center;
        list-style: none;
        flex: 1;
    }

    li {
        font-size: 12px; 
        font-weight: 500; 
        font-family: Poppins, sans-serif;
        color: ${cores.cinzaClaro};
        cursor: pointer; 
        text-align: center;
    }

    li:hover {
        color: ${cores.roxoEscuro};
        font-weight: 600;
    }
`