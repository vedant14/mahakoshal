import React from "react";
import { Layout, SEO, BackgroundImage, JobTable, Footer } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage>
        <h1>Join Us</h1>
        <h3>
          Become part of an amazing team willing to serve the best companies in
          the world.
        </h3>
      </BackgroundImage>
      <JobTable />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
