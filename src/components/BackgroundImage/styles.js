import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const BackgroundWrapper = styled.div`
    margin-top: 80px;
    background-image: ${(props) =>
        props.image ? `url("${props.image}")` : `${colors.darkGrey}`};
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    background-position: center; /* Center the image */
    overflow: hidden;
    height: 60vh;
    > div {
        position: relative;
        margin: 0px;
        width: 100%;
        height: 100%;
        background-color: ${colors.lightBlue};
        > div {
            position: absolute;
            top: 20%;
        }
    }
`;
