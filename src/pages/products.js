import React from "react";
import {
	Layout,
	SEO,
	BackgroundImage,
	PageContent,
	ProductsGrid,
	CtaCard,
	Footer,
} from "../components";
import { graphql } from "gatsby";

const ProductPage = ({ data }) => {
	return (
		<Layout>
			<SEO title="All Products" />
			<BackgroundImage
				imageUrl={data.graphCmsPageData.backgroundImage.url}
			>
				<h1>Our Products</h1>
				<h3>
					Trusted products by industry standards and tested thouroghly
				</h3>
			</BackgroundImage>
			<PageContent
				center={false}
				htmlContent={data.graphCmsPageData.content.html}
			/>
			<ProductsGrid title={false} />
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

export const query = graphql`
	{
		graphCmsPageData(pageType: { eq: ProductPage }) {
			content {
				html
			}
			backgroundImage {
				url
			}
		}
	}
`;

export default ProductPage;
