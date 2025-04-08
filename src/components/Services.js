import React, { useEffect, useRef } from 'react';
import './css/Services.css';
import ServicesToggle from './ServicesToggle';
// import image2 from './Assets/image2.jpeg';
import myVideo from './Assets/my-video.mp4';
import Images from './Images';

const Services = () => {
  const videoRef = useRef(null); // Creating a reference to the video element

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.loop = true;
    }
  }, []);

  return (
    <>
      <div className="services">
        <div className="services-container">
          <div className="services-image">
            <video
              ref={videoRef} 
              className="services-video"
              muted
              autoPlay
              loop
            >
              <source src={myVideo} type="video/mp4" />
            </video>
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
    </>
  );
};

export default Services;
