import React, { useState } from "react";
import { Link } from "gatsby";
import { HeaderWrapper, LogoWrapper } from "./styles";
import { Menu } from "../Menu";
import { Hamburger } from "../Hamburger";
import { MobileMenu } from "../MobileMenu";
import { useStaticQuery, graphql } from "gatsby";
import Logo from "../../images/Landing/Logo.png";

export function Header({ page }) {
	const data = useStaticQuery(graphql`
		{
			allGraphCmsNav {
				nodes {
					id
					name
					url
					childrenLinks
				}
			}
		}
	`);
	const [menuOpen, setMenuOpen] = useState(false);
	const siteConfig = data.allGraphCmsNav.nodes;
	return (
		<HeaderWrapper menuOpen={menuOpen}>
			<div className="Container">
				<Link to="/" id="logo">
					<LogoWrapper src={Logo} alt="Logo" />
				</Link>
				<MobileMenu
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
					items={siteConfig}
				/>
				<Menu items={siteConfig} />
				<Hamburger
					menuOpen={menuOpen}
					setMenuOpen={setMenuOpen}
					id="Hamburger"
				/>
			</div>
		</HeaderWrapper>
	);
}
