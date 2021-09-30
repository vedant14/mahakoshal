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

const IndustryTemplate = ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.graphCmsIndustry.industryType}
				description="Product manager tests"
				pathname="home"
			/>
			<BackgroundImage imageUrl={data.graphCmsIndustry.industryImage.url}>
				<h1>{data.graphCmsIndustry.industryType}</h1>
				<h3>
					Innovative refactory solutions from concept to execution
				</h3>
			</BackgroundImage>
			<PageContent htmlContent={data.graphCmsIndustry.pageContent.html} />
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

export default IndustryTemplate;

export const query = graphql`
	query IndustryQuery($id: String!) {
		graphCmsIndustry(id: { eq: $id }) {
			id
			industryType
			pageContent {
				html
			}
			industryImage {
				url
			}
		}
	}
`;
