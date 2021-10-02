import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    margin-top: 200px;
    margin-bottom: 100px;
    > div {
        margin-top: 40px;
        @media screen and (min-width: 768px) {
            margin-top: 80px;
        }
    }
    > div#submit {
        width: 100%;
        background: ${colors.lightBlue};
        text-align: center;
        padding: 100px 0px;
        border-radius: 10px;
        > img {
            width: 200px;
            max-width: 100%;
        }
        > h3 {
            padding: 10px;
        }
    }
    .form-row {
        margin-bottom: 10px;
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 10px;
        @media screen and (min-width: 768px) {
            grid-gap: 40px;
            margin-bottom: 30px;
            grid-template-columns: 1fr 1fr;
        }
    }
    .full-width {
        grid-template-columns: 1fr !important;
    }
    .form-group {
        display: grid;
        grid-template-columns: 1fr;
        > input,
        > textarea {
            color: ${colors.primaryBlack};
            border-radius: 4px;
            margin-top: 10px;
            padding-top: 5px;
            padding-bottom: 5px;
            border: 1px solid ${colors.brandBlue};
            padding-inline-start: 10px;
            resize: vertical;
            &:focus-visible {
                border: 1.2px solid ${colors.brandBlue};
            }
        }
    }
`;
