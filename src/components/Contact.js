import React from 'react';
import './css/Contact.css';
import logo2 from './Assets/logo2.jpg';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <img src={logo2} alt="Logo" className="large-logo" />
        <div className="contact-text">Contact here</div>
      </div>
    </div>
  );
};

export default Contact;
