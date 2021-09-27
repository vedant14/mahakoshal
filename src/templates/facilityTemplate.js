import React from "react";
import { graphql } from "gatsby";
import {
	Layout,
	SEO,
	BackgroundImage,
	PageContent,
	CtaCard,
	Footer,
} from "../components";

const FacilityTemplate = ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.graphCmsFacility.name}
				description="Product manager tests"
				pathname="home"
			/>
			<BackgroundImage>
				<h1>{data.graphCmsFacility.name}</h1>
			</BackgroundImage>
			<PageContent htmlContent={data.graphCmsFacility.content.html} />
			<CtaCard
				head="Interested in securing our services?"
				subHead="Please fill out this form and our team will reach out to
                        you at the earliest."
				btnText="Contact Us"
				btnLink="/contact-us"
			/>
			<Footer />
		</Layout>
	);
};

export default FacilityTemplate;

export const query = graphql`
	query FacilityQuery($id: String!) {
		graphCmsFacility(id: { eq: $id }) {
			id
			name
			content {
				html
			}
		}
	}
`;
