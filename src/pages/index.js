import React from "react"
import {
  Layout,
  SEO,
  Hero,
  Clients,
  Stats,
  News,
  Testimonials,
} from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Clients />
    <Stats />
    <News />
    <Testimonials />
  </Layout>
)

export default IndexPage
