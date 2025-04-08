import React from 'react';
import './css/VideoRow.css'; 
import vid1 from './Assets/video1.mp4';
import vid2 from './Assets/video2.mp4';
import vid3 from './Assets/video3.mp4';
import vid4 from './Assets/video4.mp4';



const VideoRow = () => {
    const videos = [vid1, vid2, vid3, vid4];

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