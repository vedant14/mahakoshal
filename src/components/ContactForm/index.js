import React, { useState } from "react";
import { Wrapper } from "./styles";
import CheckImage from "../../images/Landing/check.png";
export function ContactForm() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(null);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setSubmit(true);
        console.log("vedant");
    };
    return (
        <Wrapper className="Container">
            {submit === true ? (
                <div id="submit">
                    <img src={CheckImage} alt="CheckImage" />
                    <h3>
                        Thanks for filling the form. Our team will contact you
                        shortly.
                    </h3>
                </div>
            ) : (
                <div id="form">
                    <h1>Contact Us</h1>
                    <h3>
                        Please fill in this form and we will get back to you
                        shortly.{" "}
                    </h3>
                    <form>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    label="Name"
                                    autoFocus
                                    onChange={(e) => setName(e.target.value)}
                                    type="text"
                                    id="name"
                                    value={name}
                                    placeholder="Please enter your full name"
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Contact No.</label>
                                <input
                                    label="phone"
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    value={phone}
                                    placeholder="Contact details"
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    label="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    value={email}
                                    placeholder="Email Id"
                                />
                            </div>
                        </div>
                        <div className="form-row full-width">
                            <div className="form-group">
                                <label>Your Message</label>
                                <textarea
                                    id="txtArea"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    rows="10"
                                    placeholder="How can we help you?"
                                />
                            </div>
                        </div>
                        <button
                            onClick={(event) => handleFormSubmit(event)}
                            className="button primary-button"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </Wrapper>
    );
}
