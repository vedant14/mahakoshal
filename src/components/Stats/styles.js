import styled from "styled-components"
import { colors } from "../../styles/GlobalStyles"
import BackgroundImage from "../../images/Landing/Background.jpg"

export const Wrapper = styled.div`
  background-image: url("${BackgroundImage}");
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  background-position: top; /* Center the image */
  overflow: hidden;
  > div#Grid {
    margin: 100px 40px;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 40px 30px;
    @media screen and (min-width: 768px) {
      margin: 180px 80px;
      grid-template-columns: 1fr 1fr;
      grid-gap: 80px 30px;
    }
    @media screen and (min-width: 1024px) {
      margin: 180px auto;
      padding: 0px 130px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 120px 40px;
    }

    > div {
      > div {
        display: flex;
        align-items: center;
        margin-bottom: 22px;
        @media screen and (min-width: 768px) {
          align-items: baseline;
        }
        > span#title,
        h2 {
          margin: 0px 5px;
        }
        > span#title {
          font-family: "Mulish", sans-serif;
          font-style: normal;
          font-weight: 200;
          font-size: 54px;
          text-transform: uppercase;
          @media screen and (min-width: 1024px) {
            font-size: 86px;
          }
        }
        > h2 {
          text-transform: capitalize;
        }
      }
      > p {
        color: ${colors.darkGrey};
      }
    }
  }
`
