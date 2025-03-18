import React from 'react';
import './css/Contact.css';
import logo2 from './Assets/logo2.jpg';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <ContactForm />
        <img src={logo2} alt="Logo" className="large-logo" />
      </div>
    </div>
  );
};

export default Contact;
