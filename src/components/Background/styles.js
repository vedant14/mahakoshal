import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import BackgroundImage from "../../images/Landing/bg.png";

export const BackgroundWrapper = styled.div`
    background-image: url("${BackgroundImage}");
    background-color: ${colors.lightBlue};
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    background-position: top; /* Center the image */
    overflow: hidden;
`;
