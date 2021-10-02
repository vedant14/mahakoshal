import React, { useState } from "react";
import { Wrapper } from "./styles";
import CheckImage from "../../images/Landing/check.png";
export function ContactForm() {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();
        checkData();
    };

    const checkData = () => {
        const formData = {
            Name: name,
            Email: email,
            Phone: phone,
            Company: company,
            Message: message,
        };
        const isValid = validateForm(formData);
        if (isValid === true) {
            setSubmit(true);
            subitFormData();
        } else {
            setError("Please fill in your " + isValid);
        }
    };

    const validateForm = (data) => {
        console.log(data);
        if (data.Name === "") {
            return "Full Name";
        } else if (data.Email === "") {
            return "Email";
        } else if (data.Phone === "") {
            return "Contact Info";
        } else {
            return true;
        }
    };

    const subitFormData = () => {
        const Airtable = require("airtable");
        const base = new Airtable({
            apiKey: process.env.AIRTABLE_API_KEY,
        }).base(process.env.AIRTABLE_BASE_ID);
        //change both the api key and baseid refer <https://airtable.com/api>
        const table = base("Leads"); //use you table name inside that base
        table.create(
            [
                {
                    fields: {
                        Name: name,
                        Email: email,
                        Phone: phone,
                        Message: message,
                        Company: company,
                    },
                },
            ],
            function (err, records) {
                if (err) {
                    console.error(err);
                }
            }
        );
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
                    {error ? (
                        <h4 className="error">{error}</h4>
                    ) : (
                        <h4 className="placeholder">
                            Please fill in this form and we will get back to you
                            shortly.{" "}
                        </h4>
                    )}

                    <form onChange={(e) => setError(null)}>
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
                            <div className="form-group">
                                <label>Company Name</label>
                                <input
                                    label="Company name"
                                    onChange={(e) => setCompany(e.target.value)}
                                    type="text"
                                    id="name"
                                    value={company}
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
