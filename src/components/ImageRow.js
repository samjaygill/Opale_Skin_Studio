import React from 'react';
import './css/ImageRow.css';

const ImageRow = () => {
  const images = [
    '/image5.jpeg',
    '/image6.jpeg',
    '/image8.jpeg',
    '/image7.jpeg',
  ];

  return (
    <div className="glass-video-grid">
      {images.map((image, index) => (
        <div className="glass-card" key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default ImageRow;
