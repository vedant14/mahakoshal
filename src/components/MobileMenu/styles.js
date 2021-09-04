import styled, { createGlobalStyle } from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import { Link } from "gatsby";
export const OverrideGlobalStyle = createGlobalStyle`
  body {
    overflow: ${(props) => (props.menuOpen ? "hidden" : "auto")}
  }
`;
export const Wrapper = styled.div`
  display: block;
  position: fixed;
  background: ${colors.white};
  right: ${(props) => (props.menuOpen ? "0px" : "-100%")};
  width: 100%;
  height: 100%;
  top: 0px;
  padding: 0 0 0 40px;
  transition: all 0.1s;
  z-index: 10;
  box-shadow: 2px 0px 10px 0px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const NavScroll = styled.ul`
  position: absolute;
  width: 80%;
  top: 60px;
  list-style-type: none;
  padding: 0;

  a {
    text-decoration: none;
    color: ${colors.dark};
  }
  .nav-link {
    color: ${colors.darkGrey};
    &:hover {
      color: ${colors.primaryBlack};
    }
  }

  li {
    transition: all 0.5s ease;
    cursor: pointer;
    width: 100%;
    margin: 20px 0;
    font-style: normal;
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 50px;
    @media screen and (min-width: 728px) {
      font-size: 30px;
      line-height: 60px;
      top: 100px;
    }
    > button {
      background: ${colors.lightBlue};
      border-radius: 0px;
      color: ${colors.brandBlue};
      padding: 12px 30px;
      > a {
        font-size: 1.3rem;
        @media screen and (min-width: 728px) {
          font-size: 30px;
        }
      }
    }
  }
`;
