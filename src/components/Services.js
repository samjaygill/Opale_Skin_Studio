import React from 'react';
import './css/Services.css';
import ServicesToggle from './ServicesToggle';
import image2 from './Assets/image2.jpeg';
import Images from './Images';

const Services = () => {
  return (
    <e>
      <div className="services">
        <div className="services-container">
          <div className="services-image">
            <img src={image2} alt="salon" className="salon" />
          </div>
          <div className="services-text">
            <h1 className="services-head">Our Services</h1>
            <p className="services-body">
              At <b>Opale Skin Studio</b>, we believe in the power of
              personalized skincare to nourish not just your skin, but your
              spirit. Our treatments are designed to restore balance, enhance
              natural beauty, and create a sanctuary for relaxation.
            </p>
            <ServicesToggle />
          </div>
        </div>
      </div>
      <Images />
    </e>
  );
};

export default Services;
