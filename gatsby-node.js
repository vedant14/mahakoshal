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
        allGraphCmsIndustry {
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

  data.allGraphCmsIndustry.nodes.forEach((industry) => {
    createPage({
      component: path.resolve("./src/templates/industryTemplate.js"),
      context: {
        id: industry.id,
      },
      path: `${industry.slug}`,
    });
  });
};
