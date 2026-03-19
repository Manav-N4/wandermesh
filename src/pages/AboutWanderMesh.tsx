import { Link } from 'react-router-dom';

const standFor = [
  {
    title: 'Experiences > Itineraries',
    text: 'We give you structure where needed—and freedom where it matters.',
  },
  {
    title: 'Strangers → Tribe',
    text: 'Come solo. Leave with people who feel like your own.',
  },
  {
    title: 'Curated, Not Crowded',
    text: 'No chaos. No tourist rush. Just the right people, in the right setting.',
  },
  {
    title: 'Freedom to Choose',
    text: 'Your pace. Your vibe. Your journey.\n\nWe design the framework—you make it yours.',
  },
];

const different = [
  {
    title: 'Exclusive Access',
    text: 'WanderMesh is intentionally selective.\n\nEvery experience is built around a curated group of like-minded people—so the energy, conversations, and connections just click.',
  },
  {
    title: 'Premium Stays',
    text: 'Where you stay is part of the experience.\n\nWe handpick spaces that feel as good as the trip itself—thoughtful, aesthetic, and immersive.',
  },
  {
    title: 'Unforgettable Experiences',
    text: 'Not checklists. Not tourist stops.\n\nJust moments you\'ll talk about long after the trip ends.',
  },
  {
    title: 'Effortless Networking',
    text: 'No name tags. No awkward intros.\n\nJust real conversations with creators, founders, and curious minds—in the right setting.',
  },
  {
    title: 'Growth, Without the Pressure',
    text: 'It\'s not a workshop—but you\'ll still learn.\n\nFrom intimate sessions with creators to curated experiences like mixology and culinary workshops, growth happens naturally along the way.',
  },
];

const AboutWanderMesh = () => (
  <div className="about-page">
    <div className="container">
      <Link to="/" className="trip-back">← Back to Home</Link>

      {/* About WanderMesh intro */}
      <div className="about-meet-section">
        <p className="section-label">About WanderMesh</p>
        <div className="about-meet-intro">
          <p>
            WanderMesh is a global community of solo travelers who choose experiences over itineraries—where every journey is shaped by people, spontaneity, and moments you can't plan.
          </p>
          <p style={{ marginTop: '24px' }}>
            We started with a simple belief:
          </p>
          <p style={{ marginTop: '8px', fontStyle: 'italic', color: 'var(--color-text)', fontWeight: 600 }}>
            Travel isn't about ticking destinations off a list.
          </p>
          <p style={{ marginTop: '8px' }}>
            It's about who you meet, what you feel, and how you change along the way.
          </p>
        </div>
      </div>

      {/* Vision */}
      <div className="about-vision-section">
        <p className="section-label">Vision</p>
        <div className="about-meet-intro">
          <p>
            To redefine modern travel by building a global community where people don't just visit destinations—but experience transformation, connection, and freedom through curated, flexible, and meaningful journeys.
          </p>
        </div>
      </div>

      {/* What We Stand For */}
      <div className="about-hero-banner">
        <div className="about-hero-content">
          <h1>What We Stand For</h1>
        </div>
      </div>

      <div className="about-features-grid">
        {standFor.map((f) => (
          <div className="about-feature-card" key={f.title}>
            <h3>{f.title}</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{f.text}</p>
          </div>
        ))}
      </div>

      {/* What Makes WanderMesh Different */}
      <div className="about-hero-banner">
        <div className="about-hero-content">
          <h1>What Makes WanderMesh Different</h1>
        </div>
      </div>

      <div className="about-diff-lead">
        <p>Most trips give you an itinerary.</p>
        <p className="about-diff-highlight">We give you a framework for unforgettable moments.</p>
      </div>

      <div className="about-features-grid">
        {different.map((f) => (
          <div className="about-feature-card" key={f.title}>
            <h3>{f.title}</h3>
            <p style={{ whiteSpace: 'pre-wrap' }}>{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutWanderMesh;
