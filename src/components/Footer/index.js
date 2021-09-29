import React from "react";
import { Link } from "gatsby";
import { Wrapper } from "./styles";
import Logo from "../../images/Landing/Logo.png";
import { useStaticQuery, graphql } from "gatsby";

export function Footer() {
    const data = useStaticQuery(graphql`
        {
            graphCmsFooter(
                id: { eq: "Footer:ckt59uxcw197z0b3237ixavjc:PUBLISHED" }
            ) {
                growthStoryImage {
                    url
                }
                product
                company
                address
                aboutCompany
            }
        }
    `);
    return (
        <Wrapper className="Container">
            <div id="grid">
                <div id="brand">
                    <img src={Logo} alt="Logo" />
                    <small>{data.graphCmsFooter.aboutCompany}</small>
                </div>
                <div id="company">
                    <h3>Company</h3>
                    <ul>
                        {data.graphCmsFooter.company.map((item) => (
                            <li key={item.id}>
                                <Link className="hover-effect" to={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="product">
                    <h3>Product</h3>
                    <ul>
                        {data.graphCmsFooter.product.map((item) => (
                            <li key={item.id}>
                                <Link className="hover-effect" to={item.link}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div id="address">
                    <h3>Address</h3>
                    <ul>
                        <li>{data.graphCmsFooter.address}</li>
                    </ul>
                </div>
            </div>
            <div id="growth">
                <img
                    src={data.graphCmsFooter.growthStoryImage.url}
                    alt="growth-graph"
                />
            </div>
        </Wrapper>
    );
}
