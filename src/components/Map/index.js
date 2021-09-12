import React from "react";
import { Wrapper } from "./styles";

export function Map() {
    return (
        <Wrapper className="Container">
            <h2>You can also reach us at:</h2>
            <div>
                <div id="map">
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.857044162254!2d80.38035531498792!3d23.823681991889824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398161ebf39e0f8d%3A0x7384b73b5d672a98!2sMahakoshal%20Refractories%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1631465641701!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div id="contact">
                    <div>
                        <h3>For domestic enquiry:</h3>
                        <h4>marketing@mahakoshal.in</h4>
                        <h4>+91- 7622-406394</h4>
                    </div>
                    <div>
                        <h3>For domestic enquiry:</h3>
                        <h4>marketing@mahakoshal.in</h4>
                        <h4>+91- 7622-406394</h4>
                    </div>
                    <div>
                        <h3>For domestic enquiry:</h3>
                        <h4>marketing@mahakoshal.in</h4>
                        <h4>+91- 7622-406394</h4>
                    </div>
                    <div>
                        <h3>For domestic enquiry:</h3>
                        <h4>marketing@mahakoshal.in</h4>
                        <h4>+91- 7622-406394</h4>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
