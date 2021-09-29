require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Mahakoshal Refactories`,
    description: `Refractories Manufacturer products like Fire clay, high alumina bricks & cement, castables, insulating bricks, Flow Control Products & Acid Resistant Bricks`,
    author: `@mahakoshal`,
    keywords: ["Refactories", "insulating bricks", "Acid Resistant Bricks"],
    siteUrl: `https://mahakoshalrefractories.com/`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "ACB",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/gatsby-icon.png",
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: `gatsby-source-graphcms`,
      options: {
        endpoint: process.env.GRAPHCMS_ENDPOINT,
        token: process.env.GRAPHCMS_TOKEN,
        // downloadLocalImages: true,
      },
    },
  ],
};
