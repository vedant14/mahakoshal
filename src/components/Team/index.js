import React from "react";
import { Wrapper, TeamCard } from "./styles";
import { useStaticQuery, graphql } from "gatsby";

export function Team() {
  const data = useStaticQuery(graphql`
    {
      allGraphCmsTeam {
        nodes {
          name
          designation
          profileImage {
            url
          }
        }
      }
    }
  `);
  return (
    <Wrapper className="Container">
      <h2>Our Team</h2>
      <div id="grid">
        {data.allGraphCmsTeam.nodes.map((item) => (
          <>
            <TeamCard>
              <img src={item.profileImage.url} alt="image" />
              <h3>{item.name}</h3>
              <small>{item.designation}</small>
            </TeamCard>
            <TeamCard>
              <img src={item.profileImage.url} alt="image" />
              <h3>{item.name}</h3>
              <small>{item.designation}</small>
            </TeamCard>
            <TeamCard>
              <img src={item.profileImage.url} alt="image" />
              <h3>{item.name}</h3>
              <small>{item.designation}</small>
            </TeamCard>
            <TeamCard>
              <img src={item.profileImage.url} alt="image" />
              <h3>{item.name}</h3>
              <small>{item.designation}</small>
            </TeamCard>
            <TeamCard>
              <img src={item.profileImage.url} alt="image" />
              <h3>{item.name}</h3>
              <small>{item.designation}</small>
            </TeamCard>
            <TeamCard>
              <img src={item.profileImage.url} alt="image" />
              <h3>{item.name}</h3>
              <small>{item.designation}</small>
            </TeamCard>
            <TeamCard>
              <img src={item.profileImage.url} alt="image" />
              <h3>{item.name}</h3>
              <small>{item.designation}</small>
            </TeamCard>
            <TeamCard>
              <img src={item.profileImage.url} alt="image" />
              <h3>{item.name}</h3>
              <small>{item.designation}</small>
            </TeamCard>
          </>
        ))}
      </div>
    </Wrapper>
  );
}
