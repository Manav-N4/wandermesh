import { useState, useEffect, useRef } from 'react';

const slides = [
  { id: 1, label: 'Slide 1' },
  { id: 2, label: 'Slide 2' },
  { id: 3, label: 'Slide 3' },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const scrollToExperiences = () => {
    document.getElementById('upcoming-experiences')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`hero-video-slide ${i === current ? 'active' : ''}`}
        >
          <video muted autoPlay loop playsInline className="hero-video">
            <source src="" type="video/mp4" />
          </video>
          <div className="hero-video-placeholder">Video {slide.id}</div>
        </div>
      ))}
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Where Luxury Meets Solo Exploration</h1>
        <p>
          A community for modern solo travelers seeking elevated experiences, meaningful connections, and access beyond the ordinary.
        </p>
        <button className="btn-primary" onClick={scrollToExperiences}>
          View Experiences
        </button>
      </div>
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => { setCurrent(i); resetTimer(); }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
