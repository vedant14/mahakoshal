import React from "react";
import { graphql } from "gatsby";
import {
	Layout,
	SEO,
	ProductHead,
	ProductTable,
	CtaCard,
	Footer,
} from "../components";

const JobPage = ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.graphCmsProduct.productName}
				description="Product manager tests"
				pathname="home"
			/>
			<ProductHead
				images={data.graphCmsProduct.productImages}
				title={data.graphCmsProduct.productName}
				description={data.graphCmsProduct.description}
				downloadData={data.graphCmsProduct.downloadData}
			/>
			<ProductTable
				tableData={data.graphCmsProduct.productTable.html}
				htmlContent={data.graphCmsProduct.productNotes.html}
			/>
			<CtaCard
				head={`Interested in ${data.graphCmsProduct.productName}?`}
				subHead="Please fill out this form and our team will reach out to
                        you at the earliest."
				btnText="Contact Us"
				btnLink="/contact-us"
			/>
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
			description
			downloadData
			productTable {
				html
			}
			productNotes {
				html
			}
			productImages {
				url
			}
		}
	}
`;
