import React from "react";
import { Wrapper } from "./styles";
import { Link } from "gatsby";
import { Background } from "../Background";

export function CtaCard({ head, subHead, btnText, btnLink }) {
    return (
        <div style={{ marginBottom: `100px`, marginTop: `100px` }}>
            <Background>
                <Wrapper className="Container">
                    <h2>{head}</h2>
                    <p>{subHead}</p>
                    <div>
                        <button className="secondary-button button">
                            <Link to={btnLink}>{btnText}</Link>
                        </button>
                    </div>
                    <small>Serving companies since 1969</small>
                </Wrapper>
            </Background>
        </div>
    );
}
