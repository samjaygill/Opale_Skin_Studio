import React, { useEffect, useState } from 'react';
import './css/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = () => {
    const sections = ['#home', '#services', '#maisy', '#contact'];
    const scrollPos = window.scrollY + 120;

    for (let section of sections) {
      const element = document.querySelector(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
          setActiveSection(section);
        }
      }
    }

    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, section) => {
    e.preventDefault();
    const headerHeight = document.querySelector('.header').offsetHeight;
    const extraOffset = 25;
    const targetElement = document.querySelector(section);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight + extraOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="nav-container">
      <div className={`nav-card ${scrolled ? 'scrolled' : ''}`}>
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className={activeSection === '#home' ? 'active' : ''}
        >
          Home
        </a>
        <a
          href="#services"
          onClick={(e) => handleNavClick(e, '#services')}
          className={activeSection === '#services' ? 'active' : ''}
        >
          Services
        </a>
        <a
          href="#maisy"
          onClick={(e) => handleNavClick(e, '#maisy')}
          className={activeSection === '#maisy' ? 'active' : ''}
        >
          Our Story
        </a>
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, '#contact')}
          className={activeSection === '#contact' ? 'active' : ''}
        >
          Contact
        </a>

      </div>
    </div>
  );
};

export default Navbar;
