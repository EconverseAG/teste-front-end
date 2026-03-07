import styled from "styled-components";
import heroBackground from "../../assets/images/hero-image.svg";
import { cores } from "../../styles";

export const HeroSection = styled.section`
    height: 390px;
    width: 100%;
    background-image: url(${heroBackground});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    justify-content: center; /* Centraliza o container horizontalmente */
    align-items: center; /* Centraliza o conteúdo verticalmente */
    color: white;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Sobreposição preta semi-transparente */
        z-index: 1; /* Mantém a sobreposição atrás do conteúdo */
    }

    .container {
        position: relative; /* Mantém o conteúdo acima da sobreposição */
        z-index: 2; /* Garante que o conteúdo fique acima da sobreposição */
        max-width: 1280px; /* Limita a largura do conteúdo ao container */
        width: 100%;
        padding: 0 16px; /* Espaçamento interno para evitar que encoste nas bordas */
        display: flex;
        flex-direction: column;
        justify-content: center;

        .content {
        max-width: 600px; /* Limita o conteúdo a uma largura menor */
        text-align: left; /* Alinha o texto à esquerda */

        h1 {
            font-size: 48px;
            font-weight: 600;
            margin-bottom: 16px;
            line-height: 50px;
            font-family: Poppins, sans-serif;
        }

        p {
            font-size: 32px;
            font-weight: 400;
            margin-bottom: 40px;
            color: #f7f7f7;
            font-family: Poppins, sans-serif;
        }

        span {
            color: ${cores.amarelo};
            font-weight: 700;
        }

        .cta-button {
            background-color: ${cores.amarelo};
            width: 206px;
            height: 50px;
            color: ${cores.roxoMedio};
            border: none;
            font-family: Poppins, sans-serif;
            border-radius: 6px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;


            &:hover {
            background-color: #e6b10f;
            }
        }
        }
    }
`
