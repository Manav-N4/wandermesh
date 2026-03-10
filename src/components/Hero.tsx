const Hero = () => {
  const scrollToInvite = () => {
    document.getElementById('request-invite')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="hero-bg" style={{ backgroundImage: 'url(/images/hero.jpg)' }} />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Where Luxury Meets Solo Exploration</h1>
        <p>
          A community for modern solo travelers seeking elevated experiences, meaningful connections, and access beyond the ordinary.
        </p>
        <button className="btn-primary" onClick={scrollToInvite}>
          Request Your Invite
        </button>
      </div>
    </section>
  );
};

export default Hero;
