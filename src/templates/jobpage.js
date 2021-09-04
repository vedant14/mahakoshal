import React from "react";
import { graphql } from "gatsby";
import { Layout, SEO, BackgroundImage, Footer } from "../components";

const JobPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title={data.graphCmsCareer.jobName}
        description="Product manager tests"
        pathname="home"
      />
      <BackgroundImage>
        <h1>{data.graphCmsCareer.jobName}</h1>
        <h4>Experience required: {data.graphCmsCareer.experience}</h4>
        <h4>Location: {data.graphCmsCareer.location}</h4>
        <button className="primary-button button">
          <a href="www.goggle.com">Apply Now</a>
        </button>
      </BackgroundImage>
      <div
        className="Container content"
        dangerouslySetInnerHTML={{
          __html: data.graphCmsCareer.jobDescription.html,
        }}
      ></div>
      <div style={{ margin: "150px auto", textAlign: "center" }}>
        <button className="primary-button button">
          <a href="www.goggle.com">Apply Now</a>
        </button>
      </div>
      <Footer />
    </Layout>
  );
};

export default JobPage;

export const query = graphql`
  query JobQuery($id: String!) {
    graphCmsCareer(id: { eq: $id }) {
      id
      jobLink
      jobName
      experience
      location
      jobDescription {
        html
      }
    }
  }
`;
