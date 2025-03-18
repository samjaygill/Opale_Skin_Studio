import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./css/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Ensure that the phone number is always treated as a string
    if (name === "phone") {
      setFormData({ ...formData, [name]: value.toString() });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (e.target.checkValidity()) {
      emailjs
        .send(
          "service_zhwgps4",
          "template_nwln9zf",
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone, // Make sure phone is sent as a string
            email: formData.email,
            message: formData.message,
          },
          "wlts4k1c6j0mFCBKh"
        )
        .then(
          () => {
            alert("Message Sent Successfully");
            setFormData({
              firstName: "",
              lastName: "",
              phone: "",
              email: "",
              message: "",
            });
          },
          () => {
            alert("An error occurred, please try again");
          }
        );
    } else {
      alert("Please fill out all required fields.");
    }
  };

  return (
    <div className="contact-form-container from-left">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
