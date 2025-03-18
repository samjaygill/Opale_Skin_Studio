import React from 'react';
import { Footer } from './Footer';
import './css/Exit.css';

const Exit = () => {
  return (
    <div className="exit">
      <div className='exit-container'>
        <p className='exit-text'>See You At The Studio…</p>
      
        <div className='exit-button'>
        <a
              href="https://www.fresha.com/a/opale-skin-studio-foxearth-tuckers-mill-road-jrodaumo/booking?menu=true&pId=2496534&dppub=true&employeeId=4535176"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="exit-book-btn">Book Now</button>
            </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Exit;
