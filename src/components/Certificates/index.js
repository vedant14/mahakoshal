import React from "react";
import { Wrapper, CertificateCard } from "./styles";
import { useStaticQuery, graphql } from "gatsby";

export function Certificates() {
  const CertificatesData = useStaticQuery(graphql`
    {
      allGraphCmsCertificate {
        nodes {
          description
          id
          certificate {
            url
          }
        }
      }
    }
  `);
  return (
    <Wrapper className="Container">
      <h2>Our Certifications</h2>
      <div>
        {CertificatesData.allGraphCmsCertificate.nodes.map((certificate) => (
          <CertificateCard key={certificate.id}>
            <img src={certificate.certificate.url} alt={certificate.id} />
            <p>{certificate.description}</p>
          </CertificateCard>
        ))}
      </div>
    </Wrapper>
  );
}
