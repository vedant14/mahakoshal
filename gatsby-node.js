const path = require("path");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        allGraphCmsCareer {
          nodes {
            id
            jobLink
          }
        }
        allGraphCmsProduct {
          nodes {
            id
            productLink
          }
        }
        allGraphCmsFacility {
          nodes {
            id
            slug
          }
        }
      }
    `
  );

  // if (data.errors) throw data.errors;

  data.allGraphCmsCareer.nodes.forEach((job) => {
    createPage({
      component: path.resolve("./src/templates/jobTemplate.js"),
      context: {
        id: job.id,
        // job,
      },
      path: `careers/${job.jobLink}`,
    });
  });

  data.allGraphCmsProduct.nodes.forEach((product) => {
    createPage({
      component: path.resolve("./src/templates/productTemplate.js"),
      context: {
        id: product.id,
      },
      path: `products/${product.productLink}`,
    });
  });

  data.allGraphCmsFacility.nodes.forEach((facility) => {
    createPage({
      component: path.resolve("./src/templates/facilityTemplate.js"),
      context: {
        id: facility.id,
      },
      path: `${facility.slug}`,
    });
  });
};
