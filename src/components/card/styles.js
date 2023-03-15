import styled, { css } from "styled-components"

export const CardComponent = styled.div`
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    background: white;
    border-radius: 15px;
`

export const ImgContainer = styled.div`
    img { 
        width: 100%;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
    }
`

export const PGlobal = css`
    font-family: 'Open Sans', sans-serif;
`

export const TextContainer = styled.div`
    padding: 20px 20px 20px;
    height: 210px;
    grid-auto-rows: 1fr;


    h1 {
        color: #3C6F75;
        font-weight: 700;
        margin: 0px;
        font-size: 29px;
    }

    .species-gender {
        ${PGlobal};
        font-weight: 700;
        font-size: 16px;
        color: #69A8AF;
        margin-top: 5px;
        text-transform: capitalize;
    }

    .status {
        ${PGlobal};
        font-size: 14px;
        font-weight: 700;
        margin: 0;
        padding: 3px 15px;
        border-radius: 10px;
        text-transform: uppercase;
    }

    .description {
        ${PGlobal};
        font-size: 14px;
        color: #275054;
        margin-bottom: 0px;
    }

    @media (max-width:767px) {
        height: 240px;
    }

    @media (min-width:768px) and (max-width:1023px) {
        height: 220px;
    }

    @media (min-width:1024px) and (max-width:1279px) {
        height: 230px;
    }

    @media (min-width:1920px) {
        height: 215px;
    }
`

export const CardGrid = styled.div`
    background: linear-gradient(180deg, #C6E4E6 0%, rgba(224, 248, 252, 0) 40%);
    padding: 70px 72px 30px 72px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 35px;
    margin-bottom: 30px;

    &.visible {
        filter: blur(0);
        transition: filter 0.25s linear;
    }

    &.blur {
        filter: blur(3px);
        transition: filter 0.25s linear;
    }

    @media (max-width:767px) {
        padding: 40px 25px;
        grid-template-columns: repeat(1, 1fr);
    }

    @media (min-width:768px) and (max-width:1023px) {
        padding: 80px 32px;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 24px;
        grid-row-gap: 24px;
    }

    @media (min-width:1024px) and (max-width:1279px) {
        padding: 70px 32px;
    }

    @media (min-width:1440px) and (max-width:1919px) {
        padding: 65px 76px;
    }

    @media (min-width:1920px) {
        padding: 80px 88px;
        grid-template-columns: repeat(4, 1fr);
    }
`;