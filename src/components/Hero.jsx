import React from 'react';

const Hero = () => (
  <section className="hero-landing" aria-labelledby="hero-name">
    <div className="hero-atmosphere" aria-hidden="true">
      <span className="hero-orb hero-orb-one" />
      <span className="hero-orb hero-orb-two" />
      <span className="hero-grid" />
    </div>
    <div className="hero-landing-content">
      <div className="hero-name-bubble">
        <h1 className="hero-name" id="hero-name">Gudapati Devarshi</h1>
      </div>
      <p className="hero-headline">Junior AI Engineer <span>·</span> AI, automation &amp; security</p>
    </div>
  </section>
);

export default Hero;
