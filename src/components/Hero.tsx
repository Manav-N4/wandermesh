import React from 'react';

const Hero = () => {
  const scrollToExperiences = () => {
    document.getElementById('upcoming-experiences')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-video-slide active">
        <video muted autoPlay loop playsInline className="hero-video">
          <source src="/videos/Drone-shot.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Where Luxury Meets Solo Exploration</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button className="btn-primary" onClick={scrollToExperiences}>
          View Experiences
        </button>
      </div>
    </section>
  );
};

export default Hero;
