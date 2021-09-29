import React from "react";
import {
  Layout,
  SEO,
  BackgroundImage,
  FacilityTab,
  CtaCard,
  Footer,
} from "../components";
import { graphql } from "gatsby";

const FacilityPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Our Facilities" />
      <BackgroundImage imageUrl={data.graphCmsPageData.backgroundImage.url}>
        <div
          dangerouslySetInnerHTML={{
            __html: data.graphCmsPageData.content.html,
          }}
        />
      </BackgroundImage>
      <FacilityTab facilities={data.allGraphCmsFacility.nodes} />
      <CtaCard
        head="Interested in securing our services?"
        subHead="Please fill out this form and our team will reach out to
                        you at the earliest."
        btnText="Contact Us"
        btnLink="/contact-us"
      />
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  {
    graphCmsPageData(pageType: { eq: FacilityPage }) {
      content {
        html
      }
      backgroundImage {
        url
      }
    }
    allGraphCmsFacility {
      nodes {
        id
        name
        slug
        content {
          html
        }
      }
    }
  }
`;

export default FacilityPage;
