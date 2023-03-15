import styled from "styled-components";
import { ReactComponent as LogoSVG } from "./assets/logo.svg";
import { ReactComponent as HamburgerIcon } from "./assets/hamburger-icon.svg";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 42px 72px;
  background-color: white;

  @media (max-width:767px) {
      padding: 20px 30px;
  }

  @media (min-width:768px) and (max-width:1023px) {
    padding: 20px 32px;
    }

  @media (min-width:1024px) and (max-width:1279px) {
    padding: 20px 32px;
    }
  
  @media (min-width:1440px) and (max-width:1919px) {
      padding: 30px 76px;
    }
  
    @media (min-width:1920px) {
      padding: 40px 88px;
    }
`

export const Logo = styled(LogoSVG)`
  cursor: pointer;
  object-fit: contain;
`

export const H1 = styled.h1`
  font-family: "Playfair Display", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 52px;
  letter-spacing: auto;
  padding: 0 18px;
  color: #3c6f75;
`

export const Hamburger = styled(HamburgerIcon)`
  cursor: pointer;
`
