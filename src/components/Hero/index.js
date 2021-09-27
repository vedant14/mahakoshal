import React from "react";
import { Wrapper } from "./styles";
import { useStaticQuery, graphql } from "gatsby";

export function Hero() {
  const HeroData = useStaticQuery(graphql`
    {
      graphCmsPageData(pageType: { eq: HeroPage }) {
        id
        backgroundImage {
          url
        }
        content {
          html
        }
      }
    }
  `);
  return (
    <Wrapper>
      <div className="Overlay"></div>
      <img
        src={HeroData.graphCmsPageData.backgroundImage.url}
        alt="heo"
        className="BGImage"
      />
      <div
        id="HeroText"
        dangerouslySetInnerHTML={{
          __html: HeroData.graphCmsPageData.content.html,
        }}
      />
    </Wrapper>
  );
}
