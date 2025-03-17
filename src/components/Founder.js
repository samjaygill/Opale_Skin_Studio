import React from 'react';
import './css/Founder.css';
import image3 from './Assets/image3.jpeg';

const Founder = () => {
  return (
    <div className="founder">
      <div className="founder-container">
        <div className="founder-text">
          <h3>Meet Maisy – Founder of Opale Skin Studio</h3>
          <h4>
            Hi! I’m <b>Maisy</b>, the owner of <b>Opale Skin Studio</b>, and I can’t wait to
            welcome you into our little oasis of skincare and self-care. But
            first, let me share a bit about how it all began…
          </h4>
          <p>
            It all began when I was 16, I woke up one morning to a face full of
            acne. I had <b>no idea</b> what was happening or how to fix it. Like so
            many, I tried everything—from toothpaste to Sudocrem—searching for a
            solution. Through trial and error, patience, and a deep dive into
            skincare education, I finally discovered what worked for my skin.
            But along the way, I found something even greater—a true passion for
            skincare.
            <br />
            <br />
            Helping others <b>feel confident and radiant</b> in their own skin became
            my purpose. There’s nothing more fulfilling than guiding my clients
            through their own skin journeys, offering not just solutions but a
            space to <b>relax, unwind, and feel completely cared for</b>—like floating
            on a cloud.
            <br />
            <br />
            I truly can’t wait to meet you, help you achieve your skin goals,
            and give you the ultimate self-care experience.
            <br />
            <br />
            See you soon!
            <br />
            <br />
            - Maisy x
          </p>
        </div>
        <img src={image3} alt="Maisy Littmoden" className="maisy" />
      </div>
    </div>
  );
};

export default Founder;
