const path = require("path");

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const { data } = await graphql(
    `
      {
        jobs: allGraphCmsCareer {
          nodes {
            id
            jobName
            location
            experience
            jobLink
          }
        }
      }
    `
  );

  if (data.errors) throw data.errors;

  data.jobs.nodes.forEach((job) => {
    createPage({
      component: path.resolve("./src/templates/jobpage.js"),
      context: {
        id: job.id,
        job,
      },
      path: `careers/${job.jobLink}`,
    });
  });
};
