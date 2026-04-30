import React from 'react';

const Hero = () => {
  const scrollToExperiences = () => {
    document.getElementById('upcoming-experiences')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToRequestInvite = () => {
    document.getElementById('request-invite')?.scrollIntoView({ behavior: 'smooth' });
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
        <p>Curated, invite-only group journeys for solo travelers across Asia and Europe</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary" onClick={scrollToExperiences}>
            View Experiences
          </button>
          <button className="btn-primary" onClick={scrollToRequestInvite}>
            Request Your Invite
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
