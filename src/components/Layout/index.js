import React from "react"
import { LayoutWrapper } from "./styles"
import { GlobalStyles } from "../../styles/GlobalStyles"
export function Layout({ children }) {
	return (
		<LayoutWrapper>
			<GlobalStyles />
			<main>{children}</main>
		</LayoutWrapper>
	)
}
