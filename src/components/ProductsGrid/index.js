import React, { useState, useEffect } from "react";
import { Wrapper, FilterGrid } from "./styles";
import { Link, useStaticQuery, graphql } from "gatsby";
import { ProductCard } from "../ProductCard";

import BoxArrow from "../../images/Landing/right-arrow-box.png";

export function ProductsGrid({ title }) {
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [filterText, setFilteredText] = useState("all");
    const [active, setActive] = useState(null);
    const data = useStaticQuery(graphql`
        {
            allGraphCmsProduct(sort: { fields: publishedAt, order: DESC }) {
                nodes {
                    id
                    productName
                    productLink
                    cardDescription
                    productImages {
                        url
                    }
                    productCategory {
                        name
                    }
                }
            }
        }
    `);

    const productData = data.allGraphCmsProduct.nodes;
    useEffect(() => {
        if (filteredProducts === null) {
            setFilteredProducts(productData);
        }
    }, []);

    const handleProductFilter = (answer) => {
        setFilteredProducts(
            productData?.filter(
                (productData) => productData.productCategory.name === answer
            )
        );
        setActive(answer);
        setFilteredText(answer.toLowerCase());
        console.log("Action", filteredProducts);
    };

    return (
        <div className="Container">
            {title !== true && (
                <FilterGrid>
                    <button
                        className={`tabs ${
                            active === "Shaped" ? "active-button" : ""
                        }`}
                        onClick={() => handleProductFilter("Shaped")}
                    >
                        <h4>Shaped</h4>
                    </button>
                    <button
                        className={`tabs ${
                            active === "Un-Shaped" ? "active-button" : ""
                        }`}
                        onClick={() => handleProductFilter("Un-Shaped")}
                    >
                        <h4>Un-Shaped</h4>
                    </button>
                    <div>
                        <h4>Showing {filterText} products</h4>
                    </div>
                </FilterGrid>
            )}
            <Wrapper>
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
                {filteredProducts?.map((item) => (
                    <ProductCard
                        key={item.id}
                        link={item.productLink}
                        imageUrl={item.productImages[0].url}
                        name={item.productName}
                        description={item.cardDescription}
                    />
                ))}
            </Wrapper>
        </div>
    );
}
