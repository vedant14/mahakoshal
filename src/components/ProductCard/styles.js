import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import { Link } from "gatsby";
export const Card = styled(Link)`
    background: ${colors.lightBlue};
    border-radius: 10px;
    padding: 10px;
    @media screen and (min-width: 768px) {
        padding: 20px;
    }
    transition: 0.5s;
    > img#product-image {
        display: block;
        height: 100px;
        @media screen and (min-width: 768px) {
            height: 200px;
        }
        @media screen and (min-width: 1024px) {
            height: 220px;
        }
        width: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
    > img#arrow {
        width: 45px;
        position: absolute;
    }
    > h4 {
        margin-top: 10px;
        margin-bottom: 10px;
        color: ${colors.primaryBlack};
    }
    > p {
        margin-top: 10px;
        @media screen and (min-width: 768px) {
            margin-top: 20px;
        }
        color: ${colors.darkGrey};
    }
    &:hover {
        box-shadow: 4px 8px 8px #dae3ea;
    }
`;
