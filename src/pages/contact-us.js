import React from "react";
import { Layout, SEO, ContactForm, Map, Footer } from "../components";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Contact Us" />
      <ContactForm />
      <Map />
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
