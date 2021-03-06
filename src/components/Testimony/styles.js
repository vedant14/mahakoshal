import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
  margin-top: 200px;
  margin-bottom: 200px;
  text-align: center;
  > h1 {
    margin-bottom: 15px;
  }
  > p {
    margin-top: 0;
    margin-bottom: 55px;
    color: ${colors.washedBlack};
  }
  > div#mobile-button {
    display: flex;
    @media screen and (min-width: 768px) {
      display: none;
    }
    position: relative;
    width: 100%;
    justify-content: center;
    > button {
      cursor: pointer;
      border: none;
      background: none;
      margin-top: 10px;
      margin-bottom: 10px;
      > img {
        width: 40px;
      }
      &:hover {
        box-shadow: none;
      }
    }
  }
`;

export const Card = styled.div`
  position: relative;
  margin: 20px auto;
  text-align: left;
  > div {
    border-radius: 4px;
  }
  > div#text {
    color: ${colors.primaryBlack};
    background: ${colors.lightBlue};
    width: 100%;
    @media screen and (min-width: 1024px) {
      width: 80%;
    }
    margin-left: 0px;
    overflow: hidden;
    @media screen and (min-width: 1920px) {
      width: 90%;
    }
    > h3 {
      padding-bottom: 20px;
      border-bottom: 1px solid ${colors.brandRed};
      width: 70%;
      margin: 60px auto -10px auto;
      @media screen and (min-width: 1024px) {
        margin: 80px 80px 10px 80px;
      }
      @media screen and (min-width: 1920px) {
        margin: 100px 80px 10px 150px;
      }
      > img {
        position: absolute;
        top: 30px;
        width: 30px;
        @media screen and (min-width: 1024px) {
          left: 80px;
          width: 50px;
        }
        @media screen and (min-width: 1920px) {
          left: 150px;
        }
      }
    }
    > div#button {
      display: none;
      @media screen and (min-width: 768px) {
        display: flex;
      }
      position: relative;
      width: 100%;
      justify-content: center;
      > button {
        border: none;
        background: none;
        margin-top: 10px;
        margin-bottom: 10px;
        > img {
          width: 40px;
          cursor: pointer;
        }
        &:hover {
          box-shadow: none;
        }
      }
    }
  }
  > div#author {
    color: ${colors.white};
    background: ${colors.brandBlue};
    position: relative;
    padding: 20px 40px;
    width: 70%;
    margin: 0px auto;
    @media screen and (min-width: 1024px) {
      top: 10%;
      right: 0;
      position: absolute;
      padding: 20px 40px;
      height: 180px;
      width: 25%;
    }
    @media screen and (min-width: 1920px) {
      width: 20%;
    }
    > h3 {
      padding-bottom: 10px;
      border-bottom: 2px solid ${colors.white};
    }
    > h4 {
      margin: 0px;
      padding-bottom: 10px;
    }
  }
`;
