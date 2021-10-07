import React from "react";
import { Nav } from "./styles";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import RightArrow from "../../images/Landing/chevron-arrow.svg";
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
			allGraphCmsIndustry {
				nodes {
					id
					slug
					industryType
					industryGroup
				}
			}
		}
	`);

	const industries = data.allGraphCmsIndustry.nodes;
	const filteredIndustries = industries?.filter(
		(industries) => industries.industryGroup === "IronAndSteel"
	);
	const otherIndustries = industries?.filter(
		(industries) => industries.industryGroup !== "IronAndSteel"
	);
	return (
		<Nav>
			{items.map((item) => (
				<li key={item.id} className="nav-link">
					<Link
						to={item.url}
						activeClassName="active"
						className="hover-effect-100"
					>
						{item.name}
					</Link>
					{item.childrenLinks && (
						<div className="floating">
							{item.childrenLinks.map((item) => (
								<p key={item.id} className="nav-link">
									<Link
										className="hover-effect"
										to={item.link}
									>
										{item.name}
									</Link>
								</p>
							))}
						</div>
					)}
					{item.id === "Nav:cksy6e1e89dho0b8681siygh8:PUBLISHED" && (
						<div className="floating products">
							<div id="grid">
								{data.allGraphCmsProductType.nodes.map(
									(item) => (
										<div className="navhead" key={item.id}>
											<h4>{item.name}</h4>
											<div className="sub-head">
												{item.childProducts.map(
													(product) => (
														<p
															key={product.id}
															className="nav-link"
														>
															<Link
																className="hover-effect"
																to={`/products/${product.productLink}`}
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
					{item.id === "Nav:cksy6evhk9d6d0b91tms0mu0l:PUBLISHED" && (
						<div className="floating">
							<div>
								<div className="sublist">
									<h4 className="nav-link">
										Iron and Steel
										<img
											src={RightArrow}
											alt="arrow"
											width="50px"
										/>
									</h4>

									<div className="floating" id="sub-list">
										{filteredIndustries.map((item) => (
											<p
												key={item.id}
												className="nav-link"
											>
												<Link
													className="hover-effect"
													to={`/${item.slug}`}
												>
													{item.industryType}
												</Link>
											</p>
										))}
									</div>
								</div>

								{otherIndustries.map((item) => (
									<p key={item.id} className="nav-link">
										<Link
											className="hover-effect"
											to={`/${item.slug}`}
										>
											{item.industryType}
										</Link>
									</p>
								))}
							</div>
						</div>
					)}
				</li>
			))}
			<li>
				<Link to="/contact-us" className="primary-button button">
					Contact Us
				</Link>
			</li>
		</Nav>
	);
}
