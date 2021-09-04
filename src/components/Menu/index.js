import React from "react";
import { Nav } from "./styles";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";

export function Menu({ items }) {
	const data = useStaticQuery(graphql`
		{
			allGraphCmsProductType {
				nodes {
					id
					name
					childProducts {
						id
						productName
						productLink
					}
				}
			}
		}
	`);
	return (
		<Nav>
			{items.map((item) => (
				<li key={item.id} className="nav-link">
					<Link to={item.url}>{item.name}</Link>
					{item.childrenLinks && (
						<div className="floating">
							{item.childrenLinks.map((item) => (
								<p key={item.id} className="nav-link">
									<Link to={item.link}>{item.name}</Link>
								</p>
							))}
						</div>
					)}
					{item.name === "Products" && (
						<div className="floating products">
							<div id="grid">
								{data.allGraphCmsProductType.nodes.map(
									(item) => (
										<div id="head" key={item.id}>
											<h4>{item.name}</h4>
											<div id="sub-head">
												{item.childProducts.map(
													(product) => (
														<p
															key={product.id}
															className="nav-link"
														>
															<Link
																to={
																	product.productLink
																}
															>
																{
																	product.productName
																}
															</Link>
														</p>
													)
												)}
											</div>
										</div>
									)
								)}
							</div>
						</div>
					)}
				</li>
			))}
			<li>
				<button>
					<Link to="/contact-us">Contact Us</Link>
				</button>
			</li>
		</Nav>
	);
}
