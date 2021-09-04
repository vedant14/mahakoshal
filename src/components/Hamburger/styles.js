import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
export const HamburgerIcon = styled.div`
  display: block;
  width: 30px;
  z-index: 1000;
  cursor: pointer;
  margin: auto 10px auto auto;

  :before,
  div {
    background-color: ${colors.primaryBlack};
    border-radius: 2px;
    content: "";
    display: block;
    height: 3px;
    margin: 5px 0;
    transition-duration: 0.35s;
    transition-timing-function: ease;
  }

  :before {
    transform: ${props =>
      props.menuOpen ? "translateY(8px) rotate(45deg)" : ""};
    background-color: ${colors.primaryBlack};
  }

  div {
    transform: ${props =>
      props.menuOpen ? "translateY(0px) rotate(-45deg)" : ""};
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`
