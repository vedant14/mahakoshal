import React from "react"
import { Wrapper } from "./styles"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export function Hero() {
  const HeroData = useStaticQuery(graphql`
    {
      file(relativeDirectory: { eq: "Hero" }) {
        name
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
  `)
  const image = getImage(HeroData.file)
  const text = HeroData.markdownRemark.frontmatter
  return (
    <Wrapper>
      <div className="Overlay"></div>
      <GatsbyImage image={image} alt={image.name} className="BGImage" />
      <div id="HeroText">
        <h1>{text.heroTitle}</h1>
        <h4>{text.heroSubTitle}</h4>
      </div>
    </Wrapper>
  )
}
