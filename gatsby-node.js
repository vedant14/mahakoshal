const path = require("path");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        allGraphCmsCareer {
          nodes {
            id
            jobName
            location
            experience
            jobLink
          }
        }
        allGraphCmsProduct {
          nodes {
            id
            productLink
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
};
