import React from "react";
import { LayoutWrapper } from "./styles";
import { GlobalStyles } from "../../styles/GlobalStyles";
import { Header } from "../Header";
export function Layout({ children }) {
	return (
		<LayoutWrapper>
			<GlobalStyles />
			<Header />
			<main>{children}</main>
		</LayoutWrapper>
	);
}
