import { Link } from 'react-router-dom';

const features = [
  {
    title: 'Exclusive Access',
    text: 'The best experiences are rarely public. Our community unlocks private villas, invite only gatherings, creator collaborations, and hidden locations that never appear on booking platforms. These are moments reserved for a select circle and shared with intention. When access is limited and curated, every experience feels special, meaningful, and impossible to replicate.',
  },
  {
    title: 'Experiences Over Itineraries',
    text: 'We do not build generic itineraries or checklist tours. We craft immersive moments shaped by place, people, and mood. From desert rituals under open skies to private villas, cultural deep dives, and off menu adventures, every detail is designed to feel rare and personal. You return with stories, not souvenirs, and memories that stay long after the journey ends.',
  },
  {
    title: 'Build Your Trip, Your Way',
    text: 'We give you the base and you choose the toppings. Start with a solid plan that covers stays, transport, and core experiences, then layer on what excites you most. Add a trek, a food crawl, a yacht evening, or keep it slow and simple. You only pay for what you want, never what you do not need. Flexible by design, every journey adapts to your pace, your budget, and your vibe.',
  },
  {
    title: 'Safety First, Always',
    text: 'True luxury begins with peace of mind. Every stay is verified, every partner is trusted, and every experience is supported by careful planning on the ground. Secure rooms, dependable transport, and dedicated trip captains ensure you always feel looked after. You explore freely and confidently, knowing comfort and safety travel with you at every step.',
  },
  {
    title: 'Community Over Crowd',
    text: 'Where you go matters, but who you travel with defines everything. WanderMesh brings together creators, founders, artists, and curious explorers who naturally connect and share the same energy. Small groups keep it intimate, conversations flow easily, and friendships form without effort. It never feels crowded or chaotic, only warm, personal, and deeply memorable.',
  },
];

const AboutWanderMesh = () => (
  <div className="about-page">
    
    <div className="container">
      <Link to="/" className="trip-back">← Back to Home</Link>
      <div className="about-hero-banner">
      <div className="about-hero-bg" style={{ backgroundImage: 'url(/images/hero.jpg)' }} />
      <div className="about-hero-overlay" />
      <div className="about-hero-content">
        <h1>What Makes WanderMesh Different?</h1>
      </div>
    </div>
      <div className="about-features-grid">
        {features.map((f) => (
          <div className="about-feature-card" key={f.title}>
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default AboutWanderMesh;
