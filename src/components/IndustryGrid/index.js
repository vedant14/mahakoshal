import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Wrapper } from "./styles";
import { ProductCard } from "../ProductCard";

export function IndustryGrid() {
    const data = useStaticQuery(graphql`
        {
            allGraphCmsIndustry {
                nodes {
                    industryType
                    industryImage {
                        url
                    }
                    slug
                }
            }
        }
    `);
    return (
        <Wrapper className="Container">
            <h2>The industries we serve</h2>
            <div id="grid">
                {data.allGraphCmsIndustry.nodes.map((industry) => (
                    <ProductCard
                        key={industry.id}
                        link={industry.slug}
                        imageUrl={industry.industryImage.url}
                        name={industry.industryType}
                    />
                ))}
            </div>
        </Wrapper>
    );
}
