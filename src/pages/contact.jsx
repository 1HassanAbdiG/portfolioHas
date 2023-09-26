import React from "react";
import { Formik } from "formik";
import axios from "axios";
import "./contact.css";
import linkldn from "../imges/linkedin.png";

const initialValues = {
    name: "",
    email: "",
    message: ""
};

const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


    if (!values.name) {
        errors.name = "Please enter your full name";
    } else if (values.name.length < 4) {
        errors.name = "Your name is too short";
    }
    if (!values.email) {
        errors.email = "Please enter your email address";
    } else if (!regex.test(values.email)) {
        errors.email = "The email address is incorrect";
    }
    if (!values.message) {
        errors.message = "Please enter a message";
    } else if (values.message.length < 4) {
        errors.message = "The message is too short";
    }
    return errors;

};

export default function Contact() {
    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            await axios.post("https://young-encouraging-glade.glitch.me/send-email", values);
            alert("Email sent successfully!");
            resetForm(); // Réinitialiser le formulaire avec un objet vide
        } catch (error) {

            alert("An error occurred while sending the email.");
            console.error(error);
            resetForm(); // Réinitialiser le formulaire avec un objet vide
        } finally {
            setSubmitting(false);


        }
        window.reload()


    };


    return (
        <div className="conteneur">
            <h1>Need more information? I'm here for you!</h1>
            <p>Whether it's to answer your questions, discuss your specific needs,
                or simply to say hello, please don't hesitate to contact us using the form below.
                We look forward to hearing from you and assisting you to the best of our abilities.
                Your message is important to us, and we are committed to responding to you promptly.</p>

            <Formik
                initialValues={initialValues}
                validate={validate}
                onSubmit={handleSubmit}
            >
                {(formik) => (
                    <div className="conteneur1">
                        <h1>Send a Message</h1>
                        <form action="mailto:someone@example.com" method="post" enctype="text/plain"></form>
                        <form onSubmit={formik.handleSubmit}
                            action="mailto:someone@example.com"
                            method="post"
                            enctype="text/plain">
                            <div className="form-row">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nom"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.name && formik.touched.name ? "input-error" : null
                                    }
                                />
                                {formik.errors.name && formik.touched.name && (
                                    <span className="error">{formik.errors.name}</span>
                                )}
                            </div>

                            <div className="form-row">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="courriel@domaine.com"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.email && formik.touched.email ? "input-error" : null
                                    }
                                />
                                {formik.errors.email && formik.touched.email && (
                                    <span className="error">{formik.errors.email}</span>
                                )}
                            </div>

                            <div className="form-row">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    rows="8"
                                    cols="80"
                                    placeholder="Mettre un message"
                                    name="message"
                                    id="message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className={
                                        formik.errors.message && formik.touched.message ? "input-error" : null
                                    }
                                />
                                {formik.errors.message && formik.touched.message && (
                                    <span className="error">{formik.errors.message}</span>
                                )}
                            </div>

                            <button
                                type="submit"
                                className={
                                    !formik.dirty || !formik.isValid
                                        ? "disabled-btn"
                                        : "disabled-btn1"
                                }
                                disabled={!formik.dirty || !formik.isValid}
                            >
                                Send the Message
                            </button>
                        </form>
                    </div>
                )}
            </Formik>

            <div className="info">
                <h1>Contactez-nous</h1>
                <p>
                    <span role="img" aria-label="phone">
                        📞
                    </span>{" "}
                    343 998-3660
                </p>
                <p>
                    <span role="img" aria-label="email">
                        ✉️
                    </span>{" "}
                    hassanabdigaleb@gmail.com
                </p>
                <p>
                    <span role="img" aria-label="location">
                        🏠
                    </span>{" "}
                    Ottawa,
                </p>
                <p>
                    <a href="YOUR_LINKEDIN_PROFILE_URL_HERE">                       
                        <img src={linkldn} alt="LinkedIn Profile"  /> <spam> Add my LinkedIn link</spam>
                           
                    </a>
                </p>
            </div>
        </div>
    );
}
