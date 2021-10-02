import React from "react";
import { Wrapper } from "./styles";
import { useStaticQuery, graphql } from "gatsby";

export function Map() {
    const data = useStaticQuery(graphql`
        {
            allGraphCmsContactUs {
                nodes {
                    id
                    mobile
                    email
                    type
                }
            }
        }
    `);
    return (
        <Wrapper className="Container">
            <h2>You can also reach us at:</h2>
            <div>
                <div id="map">
                    <div>
                        <iframe
                            title="Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3649.857044162254!2d80.38035531498792!3d23.823681991889824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398161ebf39e0f8d%3A0x7384b73b5d672a98!2sMahakoshal%20Refractories%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1631465641701!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7307.357759409636!2d80.3217353!3d23.6874391!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398165a8217705e9%3A0x990b509634041be5!2sMAHAKOSHAL%20REFRACTORIES%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1633023711324!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
                <div id="contact">
                    {data.allGraphCmsContactUs.nodes.map((contact) => (
                        <div key={contact.id}>
                            <h3>{contact.type}</h3>
                            <h4>
                                <a
                                    href={`mailto:${contact.email}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {contact.email}
                                </a>
                            </h4>
                            <h4>{contact.mobile}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
}
