import React from 'react';
// Styles
import { HamburgerIcon } from './styles';

export function Hamburger({ menuOpen, setMenuOpen }) {
	return (
		<HamburgerIcon
			role="button"
			menuOpen={menuOpen}
			onClick={() => setMenuOpen(prev => !prev)}
		>
			<div />
		</HamburgerIcon>
	);
}
