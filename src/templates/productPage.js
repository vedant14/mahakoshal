import React from "react";
import { graphql } from "gatsby";
import { Layout, SEO, BackgroundImage, Footer } from "../components";

const JobPage = ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.graphCmsProduct.productName}
				description="Product manager tests"
				pathname="home"
			/>
			{data.graphCmsProduct.productName}
			<Footer />
		</Layout>
	);
};

export default JobPage;

export const query = graphql`
	query ProductQuery($id: String!) {
		graphCmsProduct(id: { eq: $id }) {
			id
			productName
			productLink
		}
	}
`;
