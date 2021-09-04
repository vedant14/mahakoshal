import React from "react";
import { BackgroundWrapper } from "./styles";

export function BackgroundImage({ imageUrl, children }) {
    return (
        <BackgroundWrapper image={imageUrl} col="blue">
            <div>
                <div className="Container">{children}</div>
            </div>
        </BackgroundWrapper>
    );
}
