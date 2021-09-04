import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    > div#grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas:
            "brand brand"
            "company product"
            "address address";
        grid-gap: 40px;
        @media screen and (min-width: 768px) {
            grid-gap: 80px;
            grid-template-columns: 1fr 1fr;
        }
        @media screen and (min-width: 1024px) {
            grid-template-columns: 1fr 1fr 1fr 1fr;
            grid-template-areas: "brand company product address";
        }
        > div#brand {
            grid-area: brand;
            display: block;
            overflow: hidden;
            > img {
                display: block;
                width: 150px;
                margin-bottom: 40px;
            }
        }
        > div {
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
        > div#company {
            grid-area: company;
        }
        > div#product {
            grid-area: product;
        }
        > div#address {
            grid-area: address;
        }
    }
    > div#growth {
        > img {
            width: 100%;
        }
    }
`;
