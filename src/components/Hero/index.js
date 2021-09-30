import React from "react";
import { Wrapper } from "./styles";
import { useStaticQuery, graphql } from "gatsby";

export function Hero() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => setVisible(true), []);

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
        className={`fade-in-slow-section ${isVisible ? "is-visible" : ""}`}
        ref={domRef}
        dangerouslySetInnerHTML={{
          __html: HeroData.graphCmsPageData.content.html,
        }}
      />
    </Wrapper>
  );
}
