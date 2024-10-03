// src/components/HeroSection.js
import React, { useState, useEffect } from 'react';
import './HeroSection.css'; // CSS for animations and styling

const HeroSection = () => {
  const [isShrunk, setIsShrunk] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [areCardsVisible, setAreCardsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Shrink logo after scrolling 100px
      if (scrollY > 100) {
        setIsShrunk(true);
      } else {
        setIsShrunk(false);
      }

      if (scrollY > 500) {
        document.querySelector('.logo-container').classList.add('relative');
      } else {
        document.querySelector('.logo-container').classList.remove('relative');
      }

      // Show text and button after scrolling 200px
      if (scrollY > 200) {
        setIsTextVisible(true);
      } else {
        setIsTextVisible(false);
      }

      // Show cards after scrolling 400px
      if (scrollY > 400) {
        setTimeout(() => setAreCardsVisible(true), 500); // 500ms delay for smooth effect
      } else {
        setAreCardsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="hero-section">
      {/* Logo Section */}
      <div className={`logo-container ${isShrunk ? 'shrink' : ''}`}>
        <img src="logo.png" alt="Fluid AI Logo" className="logo" />
      </div>

      {/* Text and Button Section */}
      <div className={`text-container ${isTextVisible ? 'visible' : ''}`}>
        <h1>Unlock Seamless Efficiency</h1>
        <button className="cta-button">Join Waitlist</button>
      </div>

      {/* Cards Section */}
      <div className={`cards-container ${areCardsVisible ? 'show-cards' : ''}`}>
        <div className="card card-left">
          <img src="Event.png" alt="Card 1" />
        </div>
        <div className="card card-right">
          <img src="Card.png" alt="Card 2" />
        </div>
        <div className="card card-top-left">
          <img src="Reservation.png" alt="Card 3" />
        </div>
        <div className="card card-top-right">
          <img src="Tickets.png" alt="Card 4" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
