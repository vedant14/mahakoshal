import React from "react";
import { Card } from "./styles";

export function ProductCard({ link, imageUrl, name, description }) {
    return (
        <Card to={`/${link}`}>
            <img id="product-image" src={imageUrl} alt={name} />
            <h4>{name}</h4>
            <p>{description} </p>
        </Card>
    );
}
