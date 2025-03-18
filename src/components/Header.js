import React from 'react';
import './css/Header.css';
import logo from './Assets/logo.jpeg';
import Navbar from './Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="logo-card">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="navbar-card">
          <Navbar />
        </div>
        <div className="button-card">
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
      </div>
    </div>
  );
};
export default Header;
