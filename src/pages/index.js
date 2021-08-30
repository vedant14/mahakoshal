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
    </Layout>
  );
};

export default IndexPage;
