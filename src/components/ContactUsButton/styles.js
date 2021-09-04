import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    margin-top: 200px;
    margin-bottom: 200px;
    text-align: center;
    > div {
        text-align: center;
        > button {
            margin: 20px auto;
            background: ${colors.white};
            padding: 20px 50px;
            color: ${colors.brandBlue};

            transition: 0.5s;
            @media screen and (min-width: 768px) {
                padding: 10px 100px;
            }
        }
    }
    > h2 {
        margin-bottom: 0px;
    }
    > p {
        margin-top: 10px;
    }
    > small {
        border-bottom: 1px solid ${colors.brandRed};
    }
`;
