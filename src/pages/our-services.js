import React from "react";
import {
	Layout,
	SEO,
	BackgroundImage,
	PageContent,
	CtaCard,
	Footer,
} from "../components";
import { graphql } from "gatsby";

const ServicePage = ({ data }) => {
	return (
		<Layout>
			<SEO title="Our Services" />
			<BackgroundImage
				imageUrl={data.graphCmsPageData.backgroundImage.url}
			>
				<h1>Our Services</h1>
				<h3>SERVING COMPANIES SINCE 1969</h3>
			</BackgroundImage>
			<PageContent htmlContent={data.graphCmsPageData.content.html} />
			<CtaCard
				head="Would you like to join the team?"
				subHead="Please fill this form and our team will reach out to you at the earliest."
				btnText="View Job Openings"
				btnLink="/careers"
			/>
			<Footer />
		</Layout>
	);
};

export const query = graphql`
	{
		graphCmsPageData(pageType: { eq: ServicePage }) {
			content {
				html
			}
			backgroundImage {
				url
			}
		}
	}
`;

export default ServicePage;
