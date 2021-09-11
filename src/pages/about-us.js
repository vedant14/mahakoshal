import React from "react";
import {
  Layout,
  SEO,
  BackgroundImage,
  PageContent,
  Team,
  CtaCard,
  Footer,
} from "../components";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About Us" />
      <BackgroundImage imageUrl={data.graphCmsPageData.backgroundImage.url}>
        <h1>About Us</h1>
        <h3>SERVING COMPANIES SINCE 1969</h3>
      </BackgroundImage>
      <PageContent
        center={true}
        htmlContent={data.graphCmsPageData.content.html}
      />
      <Team />
      <CtaCard
        head="Would you like to join the team?"
        subHead="Please fill this form and our team will reach out to you at the earliest."
        btnText="View Job Openings"
        btnLink="/careers"
      />
      <Footer />
    </Layout>
  );
};

export const query = graphql`
  {
    graphCmsPageData(pageType: { eq: AboutPage }) {
      content {
        html
      }
      backgroundImage {
        url
      }
    }
  }
`;

export default IndexPage;
