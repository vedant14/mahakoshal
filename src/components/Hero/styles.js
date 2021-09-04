import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  .BGImage {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  height: 80vh;
  @media screen and (min-width: 768px) {
    height: auto;
  }
  > div#HeroText {
    z-index: 100;
    position: absolute;
    top: 40%;
    left: 50%;
    width: 500px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 80%;
    @media screen and (min-width: 768px) {
      left: 60px;
      transform: none;
    }
    @media screen and (min-width: 1324px) {
      left: 150px;
    }
    @media screen and (min-width: 1920px) {
      top: 30%;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      width: 100%;
      max-width: 1800px;
    }
    > h1 {
      color: ${colors.white};
      margin-bottom: 15px;
      @media screen and (min-width: 768px) {
        width: 500px;
      }
    }
    > h3 {
      color: ${colors.white};
      width: fit-content;
      margin-top: 0px;
      border-bottom: 2px solid ${colors.white};
    }
  }
`;
