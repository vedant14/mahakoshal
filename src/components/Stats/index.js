import React from "react";
import { Wrapper } from "./styles";
import { useStaticQuery, graphql } from "gatsby";
import { Background } from "../Background";

export function Stats() {
  const data = useStaticQuery(graphql`
    {
      allGraphCmsStatistic(
        limit: 6
        sort: { fields: publishedAt, order: ASC }
      ) {
        nodes {
          id
          title
          description
          paragraph
        }
      }
    }
  `);
  return (
    <Background>
      <Wrapper>
        <div id="Grid" className="Container">
          {data.allGraphCmsStatistic.nodes.map((item) => (
            <div key={item.id}>
              <div>
                <span id="title">{item.title}</span>
                <h2>{item.description}</h2>
              </div>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </Background>
  );
}
