import React from "react";
import { Wrapper } from "./styles";
import { Link } from "gatsby";
import { Background } from "../Background";

export function CtaCard({ head, subHead, btnText, btnLink }) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div style={{ marginBottom: `100px`, marginTop: `100px` }}>
            <Background>
                <Wrapper
                    className={`Container fade-in-section  ${
                        isVisible ? "is-visible" : ""
                    }`}
                    ref={domRef}
                >
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
