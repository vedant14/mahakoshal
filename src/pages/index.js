import React from "react";
import {
  Layout,
  SEO,
  Hero,
  Clients,
  Stats,
  News,
  Testimony,
  ProductsGrid,
  CtaCard,
  Footer,
} from "../components";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Clients />
      <Stats />
      <News />
      <Testimony />
      <ProductsGrid title={true} />
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

export default IndexPage;
