import React, { useEffect } from 'react';
import './css/Header.css';
import logo from './Assets/logo.jpeg';
import Navbar from './Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
  useEffect(() => {
    // Adjust the scroll position when clicking on anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('.header').offsetHeight,
          behavior: 'smooth'
        });
      });
    });
  }, []);
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-card row-1 column-1">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <div className="button-card row-1 column-1">
          <div className="social-icons">
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
            <a
              href="https://www.fresha.com/a/opale-skin-studio-foxearth-tuckers-mill-road-jrodaumo/booking?menu=true&pId=2496534&dppub=true&employeeId=4535176"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="book-btn">Book Now</button>
            </a>
          
        </div>
        <div className="navbar-card column-2">
          <Navbar />
        </div>
      </div>
    </div>
  );
};
export default Header;
