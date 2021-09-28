import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    margin-top: 30px;
    .heading {
        text-align: center;
        margin-top: 100px;
        > h3 {
            margin: auto;
            width: fit-content;
            border-bottom: 5px solid ${colors.brandRed};
            border-radius: 4px;
        }
    }
`;
