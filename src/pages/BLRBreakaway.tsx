import { useState } from 'react';
import { Link } from 'react-router-dom';

const inclusions = [
  { title: 'Accommodation', desc: 'Luxury Farmhouse stay at Verdant Farmhouse, Chikkaballapur on twin sharing and triple sharing basis.' },
  { title: 'Meals', desc: 'All meals (Lunch, High Tea, Dinner & Breakfast).' },
  { title: 'Drinks', desc: '4 complimentary premium cocktails.' },
  { title: 'Sundowner Party', desc: 'Curated sundowner party experience.' },
  { title: 'Water Activities', desc: 'Kayaking/Speed Boat.' },
  { title: 'Farm Tour', desc: 'Guided farm tour experience.' },
  { title: 'Trekking', desc: 'Trekking excursion.' },
  { title: 'Night Activities', desc: 'Game Night/Movie Night.' },
];

const exclusions = [
  'Transportation to and from the farmhouse',
];

const itinerary = [
  {
    day: 'Day 1',
    title: 'Mar 29 — Arrive, Explore & Party',
    desc: 'Afternoon:\n\n1 PM - Check-In\n1–2 PM - Farm Tour & Ice Breaking Session\n2–3 PM - Lunch\n3–5 PM - Break\n\nEvening:\n\n5–10 PM - Sundowner Party\n10–11 PM - Dinner\n\nNight:\n\n11 PM Onwards - Tribe Vibe\nJam Session / Movie Under the Stars / Party Continuation',
    highlights: ['Farm Tour', 'Ice Breaking Session', 'Sundowner Party', 'Tribe Vibe Night']
  },
  {
    day: 'Day 2',
    title: 'Mar 30 — Morning Adventures & Checkout',
    desc: 'Morning:\n\n6–8 AM - Optional Trekking\n8–10 AM - Breakfast\n10–11 AM - Kayaking/Speed Boat\n11:30 AM - Checkout',
    highlights: ['Optional Trekking', 'Kayaking/Speed Boat', 'Breakfast']
  },
];

const BLRBreakaway = () => {
  const [activeTab, setActiveTab] = useState('inclusions');
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (day) => setOpenDay(openDay === day ? null : day);

  return (
    <div className="trip-page">
      <div className="container">
        <Link to="/" className="trip-back">← Back to Home</Link>

        <div className="trip-header-info">
          <h1>BLR Breakaway</h1>
          <div className="trip-meta">
            <span>📅 Mar 29 - Mar 30</span>
            <span>INR 4,999</span>
            <span>Bangalore</span>
          </div>
        </div>

        <div className="trip-hero-banner">
          <img src="/images/bali.jpg" alt="BLR Breakaway" className="trip-hero-img" />
          <div className="trip-hero-overlay" />
        </div>

        <div className="trip-detail-section">
          <h2>Trip Details</h2>
          <p>Step out of the city chaos and into a refreshing day curated for connection, nature, and good vibes. BLR Breakaway is a one-day WanderMesh experience where like-minded strangers come together to unwind, explore, and create memories, just a short drive from Bangalore.</p>
        </div>

        <div className="trip-detail-section">
          <div className="trip-tabs">
            <button className={`trip-tab ${activeTab === 'inclusions' ? 'active' : ''}`} onClick={() => setActiveTab('inclusions')}>Inclusions</button>
            <button className={`trip-tab ${activeTab === 'exclusions' ? 'active' : ''}`} onClick={() => setActiveTab('exclusions')}>Exclusions</button>
          </div>
          <div className="trip-tab-content">
            {activeTab === 'inclusions' ? (
              <div className="inclusions-grid">
                {inclusions.map((item) => (
                  <div className="inclusion-item" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="exclusion-list">
                {exclusions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="trip-detail-section">
          <h2>Itinerary</h2>
          <div className="itinerary-accordion">
            {itinerary.map((item) => (
              <div className={`accordion-item ${openDay === item.day ? 'open' : ''}`} key={item.day}>
                <button className="accordion-trigger" onClick={() => toggleDay(item.day)}>
                  <span>{item.day} - {item.title}</span>
                  <span className="accordion-icon">{openDay === item.day ? '−' : '+'}</span>
                </button>
                <div className="accordion-content">
                  <p style={{ whiteSpace: 'pre-wrap' }}>{item.desc}</p>
                  {item.highlights && (
                    <div className="accordion-highlights">
                      <strong>Highlights:</strong>
                      <ul>
                        {item.highlights.map((highlight) => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BLRBreakaway;
