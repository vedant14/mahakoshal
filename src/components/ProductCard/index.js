import React from "react";
import { Card } from "./styles";

export function ProductCard({ link, imageUrl, name, description }) {
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
        <Card
            className={`fade-in-slow-section  ${isVisible ? "is-visible" : ""}`}
            ref={domRef}
            to={`/${link}`}
        >
            <img id="product-image" src={imageUrl} alt={name} />
            <h4>{name}</h4>
            <p>{description} </p>
        </Card>
    );
}
