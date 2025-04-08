import React from 'react';
import './css/VideoRow.css'; 



const VideoRow = () => {
  const videos = [
    '/video1.mp4', 
    '/video2.mp4', 
    '/video3.mp4', 
    '/video4.mp4'
  ];

  return (
    <div className="glass-video-grid">
      {videos.map((video, index) => (
        <div className="glass-card" key={index}>
          <video src={video} autoPlay loop muted playsInline />
        </div>
      ))}
    </div>
  );
};

export default VideoRow;