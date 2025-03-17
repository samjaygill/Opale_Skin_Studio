import React from 'react';
import './css/Home.css';
import image1 from "./Assets/image1.jpeg"

const Home = () => {
  return (
    <div className="home">
      <div className='home-container'>
      <div className="text-content">
      <h1 className='head'>Science-Backed Skin Treatments & Facials For Your Skin and Soul</h1>
      <p className='body'>
        Step into Opale Skin Studio, a serene sanctuary where skincare meets
        self-care, and every treatment is a moment of renewal. We believe that
        beauty is more than skin deep- it’s about feeling nurtured, confident,
        and radiant from the inside out. Our tranquil studio based in Foxearth,
        Suffolk is designed to be your personal retreat, a place where you can
        escape the stress of daily life and indulge in the restorative power of
        expert skincare. We offer Luxurious results-driven facials as-well as
        science-backed aesthetic treatments.
      </p>
      </div>
      <img src={image1} alt="candles" className="candles" />
    </div>
    </div>
  );
};

export default Home;
