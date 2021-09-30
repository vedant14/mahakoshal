import React from "react";
import {
  Layout,
  SEO,
  BackgroundImage,
  IndustryGrid,
  CtaCard,
  Footer,
} from "../components";
import { graphql } from "gatsby";

const IndustryPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Industries" />
      <BackgroundImage imageUrl={data.graphCmsPageData.backgroundImage.url}>
        <div
          dangerouslySetInnerHTML={{
            __html: data.graphCmsPageData.content.html,
          }}
        />
      </BackgroundImage>
      <IndustryGrid />
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
    graphCmsPageData(pageType: { eq: IndustryPage }) {
      content {
        html
      }
      backgroundImage {
        url
      }
    }
    allGraphCmsIndustry {
      nodes {
        id
        industryType
        slug
        industryImage {
          url
        }
      }
    }
  }
`;

export default IndustryPage;
