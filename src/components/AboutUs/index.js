import React from "react";
import { Wrapper } from "./styles";
import { useStaticQuery, graphql } from "gatsby";
import { BackgroundImage } from "../BackgroundImage";
export function AboutUs() {
  const data = useStaticQuery(graphql`
    {
      graphCmsAboutPage {
        content {
          html
        }
        backgroundImage {
          url
        }
      }
    }
  `);
  return (
    <Wrapper>
      <BackgroundImage imageUrl={data.graphCmsAboutPage.backgroundImage.url} />
      <div
        className="Container content"
        dangerouslySetInnerHTML={{
          __html: data.graphCmsAboutPage.content.html,
        }}
      ></div>
    </Wrapper>
  );
}
