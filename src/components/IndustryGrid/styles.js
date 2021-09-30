import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    margin-top: 30px;
    > div#grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
        @media screen and (min-width: 768px) {
            grid-gap: 40px;
        }
        @media screen and (min-width: 1024px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
`;
