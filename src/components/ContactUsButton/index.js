import React from "react";
import { Wrapper } from "./styles";
import { Background } from "../Background";

export function ContactUsButton() {
    return (
        <div style={{ marginBottom: `100px`, marginTop: `100px` }}>
            <Background>
                <Wrapper className="Container">
                    <h2>Interested in securing our services?</h2>
                    <p>
                        Please fill out this form and our team will reach out to
                        you at the earliest.
                    </p>
                    <div>
                        <button>Contact Us</button>
                    </div>
                    <small>Serving companies since 1969</small>
                </Wrapper>
            </Background>
        </div>
    );
}
