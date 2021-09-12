import React from "react";
import { Wrapper, Card } from "./styles";
import { Link, useStaticQuery, graphql } from "gatsby";

import BoxArrow from "../../images/Landing/right-arrow-box.png";
export function ProductsGrid({ title }) {
    const data = useStaticQuery(graphql`
        {
            allGraphCmsProduct(
                filter: { active: { eq: Yes } }
                sort: { fields: publishedAt, order: DESC }
            ) {
                nodes {
                    productName
                    productLink
                    cardDescription
                    productImages {
                        url
                    }
                }
            }
        }
    `);
    return (
        <Wrapper className="Container">
            {title === true && (
                <div id="title">
                    <h1>Our Products</h1>
                    <h3>
                        Trusted products by industry standards and tested
                        thouroghly
                    </h3>

                    <Link to="/products" className="primary-button button">
                        See all
                        <img src={BoxArrow} alt="arrow" />
                    </Link>
                </div>
            )}
            {data.allGraphCmsProduct.nodes.map((item) => (
                <Card to={`/products/${item.productLink}`}>
                    <img
                        id="product-image"
                        src={item.productImages[0].url}
                        alt={item.productName}
                    />
                    <h4>{item.productName}</h4>
                    <p>{item.cardDescription} </p>
                </Card>
            ))}
        </Wrapper>
    );
}
