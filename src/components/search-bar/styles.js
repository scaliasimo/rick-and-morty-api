import styled from "styled-components";

export const SearchWrapper = styled.div`
    position:relative;
    padding: 0 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: -30px;
    z-index: 8;

    @media (max-width:767px) {
        display: none;
    }

    @media (min-width:768px) and (max-width:1023px) {
        padding: 0 32px;
    }

    @media (min-width:1024px) and (max-width:1279px) {
        padding: 0 32px;
    }

    @media (min-width:1440px) and (max-width:1919px) {
        padding: 0 76px;
    }

    @media (min-width:1920px) {
      padding: 0px 88px;
    }
`

export const ToggleFilters = styled.div`
    height: 1.5rem;
    width: 1.5rem;
    position: absolute;
    box-sizing:border-box;
    top:50%;
    right: 170px;
    transform: translateY(-50%);

    @media (min-width:768px) and (max-width:1023px) {
        right: 95px;
     }

     @media (min-width:1024px) and (max-width:1279px) {
        right: 130px;
    }

    @media (min-width:1920px) {
      right: 185px;
    }
`

export const FiltersIcons = styled.div`
    display: flex;
`

export const FiltersTextToggle = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #3C6F75;
    margin: 0px 10px 0px 0px;
    cursor: pointer;
`

export const Icon = styled.img`
    cursor: pointer;

    &.show {
        display: block;
    }

    &.hide {
        display: none;
    }

    @media (min-width:768px) and (max-width:1023px) {
        &.show {
        display: none;
    }

    &.hide {
        display: none;
    }
    }
`

export const Input = styled.input`
    height: 50px;
    width: 100%;
    box-sizing:border-box;
    padding-left: 1.5rem;
    padding-top: 1.5rem;
    padding-bottom: 1.8rem;
    font-family: 'Playfair Display', sans-serif;
    font-weight: 700;
    font-size: 30px;
    color: #89BCC2;
    border: 1px solid white;
    border-radius: 50px;
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.1);

    &::placeholder {
        color: #89BCC2;
    }

    &&:focus {
        outline: none;
    }

    @media (min-width:1920px) {
        height: 70px;
    }

    @media (min-width:1440px) and (max-width:1919px) {
        height: 60px;
    }
`

export const FiltersWrapper = styled.div`
    background: transparent;
    width: 100%;
    position: absolute;
    padding: 0 72px;
    box-sizing: border-box;

    @media (max-width:767px) {
        display: none;
    }

    @media (min-width:768px) and (max-width:1023px) {
        padding: 0 32px;
    }

    @media (min-width:1024px) and (max-width:1279px) {
        padding: 0 32px;
    }

    @media (min-width:1440px) and (max-width:1919px) {
        padding: 0 76px;
    }

    @media (min-width:1920px) {
      padding: 0 88px;
    }
`

export const FiltersDiv = styled.div`
    background: #E0F8FC;
    padding: 70px 25px 40px 25px;
    margin-top: -15px;
    width: 100%;
    position: relative;
    z-index: 7;
    border-radius: 15px;
    box-sizing: border-box;

    &.show {
        visibility: visible;
        opacity: 1;
        transition: visibility 0.25s, opacity 0.25s linear;
    }

    &.hide {
        visibility: hidden;
        opacity: 0;
        transition: visibility 0.25s, opacity 0.25s linear; 
    }

`

export const H1 = styled.h1`
    font-family: 'Playfair Display', sans-serif;
    font-size: 20px;
    font-weight: 700;
    margin: 20px 0 0 0;
    color: #3C6F75;

    &:nth-child(1){
        margin-top: 0px
    }
`

export const PWrapper = styled.div`
    display: flex;
`

export const P = styled.p`
    display: flex;
    margin: 10px 10px 10px 0;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    font-size: 12px;
    font-weight: 700;
    color: #3C6F75;
    border: 1px solid #3C6F75;
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background: #3C6F75;
        color: white;
    }
`