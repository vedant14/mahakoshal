import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"

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
  }
  .card {
    text-align: left;
    position: relative;
    > div {
      background: ${colors.lightBlue};
      width: 98%;
      @media screen and (min-width: 1024px) {
        width: 80%;
      }
      overflow: hidden;
      > h3 {
        margin: 40px 25px 10px 25px;
        @media screen and (min-width: 768px) {
          margin: 100px 60px 40px 60px;
        }
        @media screen and (min-width: 1024px) {
          margin: 100px auto 100px 60px;
          width: 450px;
        }
        @media screen and (min-width: 1350px) {
          margin: 100px auto 100px 60px;
          width: 650px;
        }
        @media screen and (min-width: 1920px) {
          margin: 100px auto 100px 160px;
          width: 1000px;
        }

        border-bottom: 1px solid ${colors.brandRed};
        padding-bottom: 15px;
        position: relative;
        > img {
          position: absolute;
          width: 20px;
          top: -35%;
          @media screen and (min-width: 1024px) {
            width: 70px;
            top: -60%;
          }
        }
      }
    }
  }

  .author {
    position: relative;
    background: ${colors.brandBlue};
    color: ${colors.white};
    padding: 20px;
    margin: 20px;
    @media screen and (min-width: 768px) {
      padding: 50px;
      margin: 50px;
    }
    @media screen and (min-width: 1024px) {
      position: absolute;
      top: 10%;
      right: 2%;
      width: 200px;
      padding: 20px 40px 50px 40px;
    }
    @media screen and (min-width: 1350px) {
      top: 10%;
      right: 4%;
    }

    @media screen and (min-width: 1920px) {
      top: 3%;
      right: 10%;
    }
    > h3 {
      padding-bottom: 10px;
      border-bottom: 2px solid ${colors.white};
    }
    > h4 {
      margin: 0px;
    }
  }
`
