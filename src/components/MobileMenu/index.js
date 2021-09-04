import React from "react";
// Styles
import { Link } from "gatsby";
import { OverrideGlobalStyle, NavScroll, Wrapper } from "./styles";

export function MobileMenu({ menuOpen, items, setMenuOpen }) {
  return (
    <>
      <OverrideGlobalStyle menuOpen={menuOpen} />
      <Wrapper menuOpen={menuOpen}>
        <NavScroll>
          {items.map((item) => (
            <Link to={item.url} key={item.id} className="nav-link">
              <li onClick={() => setMenuOpen(false)}>{item.name}</li>
            </Link>
          ))}
          <li>
            <button>
              <Link to="/contact-us">Contact Us</Link>
            </button>
          </li>
        </NavScroll>
      </Wrapper>
    </>
  );
}
