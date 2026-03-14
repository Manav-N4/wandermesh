import { useState } from 'react';
import { Link } from 'react-router-dom';

const inclusions = [
  { title: 'Accommodation', desc: 'Boutique stays and curated villas.' },
  { title: 'Meals', desc: 'Selected breakfasts and local dining experiences.' },
  { title: 'Transfers', desc: 'Private transport between destinations.' },
  { title: 'Activities', desc: 'Guided cultural and nature experiences.' },
];

const exclusions = [
  'Airfares',
  'Visas',
  'Meals not mentioned',
  'Airport transfers not included',
  'Optional activities including Zamna Music Festival pass',
  'Taxes if applicable',
  'Personal expenses and weather related itinerary adjustments',
];

const itinerary = [
  { day: 'Day 1', desc: 'Arrival and welcome dinner.' },
  { day: 'Day 2', desc: 'Explore Ubud rice terraces and temples.' },
  { day: 'Day 3', desc: 'Waterfall exploration.' },
  { day: 'Day 4', desc: 'Local markets and cultural workshops.' },
  { day: 'Day 5', desc: 'Travel to beach town.' },
  { day: 'Day 6', desc: 'Beach day and sunset experience.' },
  { day: 'Day 7', desc: 'Adventure activities or relaxation.' },
  { day: 'Day 8', desc: 'Island exploration.' },
  { day: 'Day 9', desc: 'Farewell dinner.' },
  { day: 'Day 10', desc: 'Departure.' },
];

const BaliTrip = () => {
  const [activeTab, setActiveTab] = useState('inclusions');
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (day) => setOpenDay(openDay === day ? null : day);

  return (
    <div className="trip-page">
      <div className="trip-hero-banner">
        <img src="/images/bali.jpg" alt="Bali" className="trip-hero-img" />
        <div className="trip-hero-overlay" />
      </div>

      <div className="container">
        <Link to="/" className="trip-back">← Back to Home</Link>

        <div className="trip-header-info">
          <h1>Bali Uncharted</h1>
          <div className="trip-meta">
            <span>📅 May 1 - May 10</span>
            <span>INR 56,999</span>
            <span>Bali</span>
          </div>
        </div>

        <div className="trip-detail-section">
          <h2>Trip Details</h2>
          <p>Bali is where nature, culture, and spirituality blend seamlessly. From lush rice terraces and jungle waterfalls to vibrant beach towns and sunset temples, this journey reveals both the calm and the adventure of the island.</p>
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
            {itinerary.map((day) => (
              <div className={`accordion-item ${openDay === day.day ? 'open' : ''}`} key={day.day}>
                <button className="accordion-trigger" onClick={() => toggleDay(day.day)}>
                  <span>{day.day}</span>
                  <span className="accordion-icon">{openDay === day.day ? '−' : '+'}</span>
                </button>
                <div className="accordion-content">
                  <p>{day.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaliTrip;
