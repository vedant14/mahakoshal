import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    margin-top: 100px;
    > div#table-data {
        overflow-x: auto;
        table {
            > tbody > tr:first-child {
                background: ${colors.brandBlue};
                color: ${colors.white};
                &:hover {
                    background: ${colors.brandBlue};
                }
            }
            > tbody > tr {
                &:hover {
                    background: ${colors.lightBlue};
                    transition: 0.2s;
                }
                > td {
                    border-left: 0.2px solid ${colors.darkGrey};
                    padding: 10px;
                }
            }
        }
    }
    > div#notes {
        margin-bottom: 100px;
    }
`;
