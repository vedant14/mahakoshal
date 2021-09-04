import React from "react";
import { Layout, SEO, AboutUs, Team, CtaCard, Footer } from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <AboutUs />
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

export default IndexPage;
