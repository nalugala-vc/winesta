import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src="/assets/hero-wine-premium.png" alt="Premium Wine Pouring" />
        <div className="hero-overlay"></div>
      </div>
      <div className="container hero-content">
        <h1 className="hero-title">
          <span className="hero-title-line">Uncork the World of</span>
          <span className="hero-title-main">Wine Together</span>
        </h1>
        <p className="hero-subtitle">
          Join the global community to discover, rate, and share your wine journey.
        </p>
        <button className="btn btn-primary hero-cta">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default Hero;
