import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
  margin-bottom: 150px;
  margin-top: 150px;
  text-align: center;
  .custom-slide {
    margin: 30px;
  }
  .right-arrow,
  .left-arrow {
    top: 110%;
    @media screen and (min-width: 768px) {
      top: 110%;
    }
    @media screen and (min-width: 1024px) {
      top: 50%;
    }

    > img {
      width: 44px !important;
    }
  }

  .left-arrow {
    left: 35%;
    @media screen and (min-width: 768px) {
      left: 40%;
    }
    @media screen and (min-width: 1024px) {
      left: -4%;
    }
  }
  .right-arrow {
    right: 35%;
    @media screen and (min-width: 768px) {
      right: 40%;
    }
    @media screen and (min-width: 1024px) {
      right: -2%;
    }
  }
`;
export const Card = styled.a`
  text-align: left;
  background: ${colors.lightBlue};
  border-radius: 4px;
  width: 90% !important;
  @media screen and (min-width: 768px) {
    width: 90% !important;
  }
  @media screen and (min-width: 1024px) {
    width: 80% !important;
    margin: 30px 30px;
  }
  > h4 {
    margin: 20px 25px;
  }
  > p {
    margin: 0px 25px 30px 25px;
  }
  > img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 100%;
  }
  &:hover {
    box-shadow: 4px 8px 8px #dae3ea;
  }
`;
