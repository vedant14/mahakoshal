import React from "react";
import { BackgroundWrapper } from "./styles";

export function BackgroundImage({ imageUrl, children }) {
    return (
        <BackgroundWrapper image={imageUrl}>
            <div>
                <div className="Container">{children}</div>
            </div>
        </BackgroundWrapper>
    );
}
