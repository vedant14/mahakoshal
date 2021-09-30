import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    margin-bottom: 100px;
    > div {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 50px;
        > div#map {
            width: 100%;
            overflow: hidden;

            height: 100%;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 20px;
        }
        @media screen and (min-width: 768px) {
            grid-template-columns: 1.5fr 1fr;
        }
        > div#contact {
            > div {
                margin-top: 40px;
                margin-bottom: 0px;
                &:first-child {
                    margin-top: 0px;
                }
                h3 {
                    color: ${colors.darkGrey};
                    margin: 0;
                }
                h4 {
                    margin: 10px 0;
                    &:first-child {
                        margin-top: 0px;
                    }
                }
            }
        }
    }
`;
