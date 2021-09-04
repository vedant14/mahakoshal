import React from "react";
import { Wrapper } from "./styles";
import { useStaticQuery, graphql } from "gatsby";

export function Hero() {
  const HeroData = useStaticQuery(graphql`
    {
      file(relativeDirectory: { eq: "Hero" }) {
        name
        publicURL
        childImageSharp {
          gatsbyImageData
        }
      }
      markdownRemark(frontmatter: { type: { eq: "hero" } }) {
        frontmatter {
          heroTitle
          type
          heroSubTitle
        }
      }
    }
  `);
  const text = HeroData.markdownRemark.frontmatter;
  return (
    <Wrapper>
      <div className="Overlay"></div>
      <img src={HeroData.file.publicURL} alt="heo" className="BGImage" />
      <div id="HeroText">
        <h1>{text.heroTitle}</h1>
        <h3>{text.heroSubTitle}</h3>
      </div>
    </Wrapper>
  );
}
