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
    min-height: 50vh;
    @media screen and (min-width: 768px) {
        height: ${(props) => (props.image ? `70vh` : `50vh`)};
    }
    @media screen and (min-width: 1920px) {
        height: ${(props) => (props.image ? `50vh` : `20vh`)};
    }
    > div#position {
        position: relative;
        margin: 0px;
        width: 100%;
        height: 100%;
        background-color: ${(props) =>
            props.image ? `${colors.bggrey}` : `${colors.white}`};
        > div#container {
            position: ${(props) => (props.image ? `absolute` : `relative`)};
            margin-top: 70px;
            @media screen and (min-width: 768px) {
                margin-top: 0px;
            }
            @media screen and (min-width: 1920px) {
                left: 25%;
                margin-top: 0px;
            }
            top: 30%;
            width: 50%;
            > div {
                > h1 {
                    margin-bottom: 10px;
                }
                > h3 {
                    margin-top: 10px;
                }
            }
            > h1 {
                margin-bottom: 10px;
            }
            > h3 {
                margin-top: 10px;
            }
            color: ${(props) =>
                props.image ? `${colors.white}` : `${colors.primaryBlack}`};
        }
    }
`;
