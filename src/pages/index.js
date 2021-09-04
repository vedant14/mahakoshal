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
  ContactUsButton,
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
      <ProductsGrid />
      <ContactUsButton />
      <Footer />
    </Layout>
  );
};

export default IndexPage;
