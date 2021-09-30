import React from "react";
import { BackgroundWrapper } from "./styles";

export function BackgroundImage({ imageUrl, children }) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => setVisible(true), []);

    return (
        <BackgroundWrapper image={imageUrl}>
            <div id="position">
                <div
                    id="container"
                    className={`Container fade-in-slow-section ${
                        isVisible ? "is-visible" : ""
                    }`}
                    ref={domRef}
                >
                    {children}
                </div>
            </div>
        </BackgroundWrapper>
    );
}
