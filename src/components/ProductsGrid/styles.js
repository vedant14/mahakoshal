import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";
import { Link } from "gatsby";
export const Wrapper = styled.div`
    margin-top: 100px;
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
        > button {
            background: ${colors.lightBlue};
            padding: 10px 20px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            > h4 {
                margin: 0px;
            }
            > img {
                width: 30px;
                margin-left: 5px;
            }
        }
    }
`;

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
