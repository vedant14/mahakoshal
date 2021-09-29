import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
export const Wrapper = styled.div`
    margin-top: 10px;
    margin-bottom: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    @media screen and (min-width: 768px) {
        grid-gap: 40px;
    }
    @media screen and (min-width: 1024px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    > div#title {
        > h1,
        h3 {
            margin-bottom: 0px;
        }
        > h3 {
            color: ${colors.darkGrey};
        }
        grid-column: 1 / span 2;
        @media screen and (min-width: 1024px) {
            grid-column: 1;
        }
        > a {
            background: ${colors.brandBlue};
            padding: 10px 20px;
            margin-top: 20px;
            width: fit-content;
            border-radius: 4px;
            display: flex;
            align-items: center;
            color: ${colors.white};
            > img {
                width: 30px;
                margin-left: 5px;
            }
        }
    }
`;

export const FilterGrid = styled.div`
    > button > h4 {
        margin: 0px;
    }
    > div {
        margin-top: 50px;
    }
`;
