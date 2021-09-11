import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const BackgroundWrapper = styled.div`
    margin-top: 80px;
    background-image: ${(props) =>
        props.image ? `url("${props.image}")` : `${colors.white}`};
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    background-position: center; /* Center the image */
    overflow: hidden;
    min-height: 40vh;
    @media screen and (min-width: 768px) {
        height: 70vh;
    }
    @media screen and (min-width: 1920px) {
        height: 60vh;
    }
    > div {
        position: relative;
        margin: 0px;
        width: 100%;
        height: 100%;
        background-color: ${(props) =>
            props.image ? `${colors.lightBlue}` : `${colors.white}`};
        > div {
            position: absolute;
            @media screen and (min-width: 1920px) {
                left: 25%;
            }
            top: 30%;
            width: 50%;
            color: ${(props) =>
                props.image ? `${colors.white}` : `${colors.primaryBlack}`};
        }
    }
`;
