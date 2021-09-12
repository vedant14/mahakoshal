import styled from "styled-components";
import { colors } from "../../styles/GlobalStyles";

export const Wrapper = styled.div`
    margin-top: 130px;
    > div#breadcrumb {
        display: flex;
        align-items: center;
        width: fit-content;
        color: ${colors.brandBlue};
        > a,
        p {
            margin-left: 10px;
            margin-right: 10px;
        }
        > a:first-child {
            margin-left: 0;
        }
    }
    > div#grid {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 30px;
        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }
        > div#image-gallery {
            overflow-x: auto;
        }
        > div {
            > h2 {
                margin-top: 0px;
            }
            > a {
                > h4 {
                    margin: 0px;
                }
            }
        }
        > div#description > div#buttons {
            display: grid;
            grid-gap: 10px;
            text-align: center;
            @media screen and (min-width: 768px) {
                display: flex;
                margin: 40px auto;
            }
            > a {
                width: inherit;
                @media screen and (min-width: 768px) {
                    width: fit-content;
                }
            }
        }

        .image-gallery-thumbnails {
            width: 250px;
            @media screen and (min-width: 768px) {
                width: 500px;
            }
        }
    }
`;
