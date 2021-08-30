import React from "react"
import { Wrapper } from "./styles"
import { useStaticQuery, graphql } from "gatsby"

export function Stats() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { type: { eq: "stats" } }) {
        id
        frontmatter {
          statistics {
            id
            number
            sub
            text
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <div id="Grid" className="Container">
        {data.markdownRemark.frontmatter.statistics.map(item => (
          <div key={item.id}>
            <div>
              <span id="title">{item.number}</span>
              <h2>{item.sub}</h2>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  )
}
