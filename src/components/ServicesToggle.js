import React, { useState } from 'react';
import './css/ServicesToggle.css';

const ServicesToggle = () => {
  const [isAestheticOpen, setAestheticOpen] = useState(false);
  const [isBespokeOpen, setBespokeOpen] = useState(false);

  const toggleAesthetic = () => setAestheticOpen(!isAestheticOpen);
  const toggleBespoke = () => setBespokeOpen(!isBespokeOpen);

  return (
    <div>
      <div className="accordion-section">
        <button onClick={toggleBespoke} className="accordion-btn">
          Bespoke Facials
          <span className="accordion-icon">
            {isBespokeOpen ? "−" : "+"}
          </span>
        </button>
        {isBespokeOpen && (
          <div className="accordion-content">
            <p className='accordion-content-p'>
              Our <b>Bespoke Facials</b> are fully customized to meet your skin’s unique needs, combining advanced techniques such as <b>microneedling, chemical peels, microdermabrasion, dermaplaning & LED light therapy</b> with luxurious care for a truly one-of-a-kind experience.
            </p>
          </div>
        )}
      </div>

      <div className="accordion-section">
        <button onClick={toggleAesthetic} className="accordion-btn">
          Aesthetic Enhancements
          <span className="accordion-icon">
            {isAestheticOpen ? "−" : "+"}
          </span>
        </button>
        {isAestheticOpen && (
          <div className="accordion-content aesthetic-open">
            <p className='accordion-content-p'>
              We offer aesthetic treatments such as <b>skin boosters, dermal filler, and anti-wrinkle injections</b> designed to enhance your natural beauty.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicesToggle;
