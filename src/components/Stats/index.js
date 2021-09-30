import React from "react";
import { Wrapper } from "./styles";
import { useStaticQuery, graphql } from "gatsby";
import { Background } from "../Background";

export function Stats() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

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
            <div
              key={item.id}
              className={`slide-in-section  ${isVisible ? "is-visible" : ""}`}
              ref={domRef}
            >
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
