import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Nav = styled.div`
  display: none;
  list-style-type: none;
  padding: 0;
  text-transform: uppercase;
  margin: auto 0px auto auto;
  li {
    display: inline-block;
    position: relative;
    transition: opacity 0.5s ease;
    cursor: pointer;
    font-style: normal;
    padding: 15px 0px;
    margin-right: 30px;
    margin-bottom: auto;
    transition: 5s;
    :last-child {
      margin-right: 0px;
    }
    &:hover {
      > .floating {
        display: block;
      }
    }
    .floating {
      display: none;
      text-transform: initial;
      padding: 0px 20px;
      width: 200px;
      animation: fadeInMenu 0.3s both ease-in;
      top: 50px;
      left: -15px;
      position: absolute;
      background: white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 4px;
    }
    .products {
      width: 600px;
      > div#grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 30px;
        > div#head {
          margin: 20px 0px;
          &:first-child {
            padding-right: 10px;
            border-right: 2px solid ${colors.brandRed};
          }
          > h4 {
            margin: 10px 0px 40px 0px;
            line-height: 0px;
          }
        }
      }
    }

    @keyframes fadeInMenu {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
  .nav-link {
    > a {
      color: ${colors.darkGrey};
      &:hover {
        color: ${colors.primaryBlack};
      }
    }
  }

  @media screen and (min-width: 1024px) {
    display: block;
  }
`;
