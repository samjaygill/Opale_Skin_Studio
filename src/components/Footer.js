import React from 'react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="sm-links">
          <div className="footer-section social-media">

            <div className="social-icons-footer">
              <a
                href="https://www.instagram.com/opaleskinstudio/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.tiktok.com/@opaleskinstudio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
              <a
                href="https://www.facebook.com/maisyalicebeauty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
            </div>
          </div>
          <a
            href="https://www.fresha.com/a/opale-skin-studio-foxearth-tuckers-mill-road-jrodaumo/booking?menu=true&pId=2496534&dppub=true&employeeId=4535176"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="book-btn">Book Now</button>
          </a>
        </div>
        <div className="footer-section copyright">
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
