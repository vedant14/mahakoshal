import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    > div#grid {
        display: grid;
        grid-gap: 80px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        > div#brand {
            display: block;
            overflow: hidden;
            > img {
                display: block;
                width: 150px;
                margin-bottom: 40px;
            }
        }
        > div#list {
            > h3 {
                padding-bottom: 5px;
                border-bottom: 1px solid ${colors.brandRed};
                width: fit-content;
            }
            > ul {
                margin-top: 55px;
                list-style: none;
                padding-inline-start: 0px;
                > li {
                    margin-bottom: 25px;
                    > a {
                        color: ${colors.washedBlack};
                        &:hover {
                            color: ${colors.primaryBlack};
                        }
                    }
                }
            }
        }
    }
    > div#growth {
        > img {
            width: 100%;
        }
    }
`;
