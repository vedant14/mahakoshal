import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
export const HeaderWrapper = styled.header`
  position: fixed;
  background: ${colors.white};
  top: 0;
  z-index: 999;
  width: 100%;
  > div {
    display: flex;
    height: 80px;
    padding-top: 4px;
    margin-top: auto;
    margin-bottom: auto;
    > a#logo {
      display: flex;
    }
  }
`;

export const LogoWrapper = styled.img`
  height: 50px;
  margin: 10px 10px;
  @media screen and (min-width: 768px) {
    margin: auto;
  }
`;
