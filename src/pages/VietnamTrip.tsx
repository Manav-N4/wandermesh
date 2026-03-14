import { useState } from 'react';
import { Link } from 'react-router-dom';

const inclusions = [
  { title: 'Accommodation', desc: 'Carefully selected boutique hotels and premium stays throughout the trip.' },
  { title: 'Meals', desc: 'Selected breakfasts and curated local dining experiences.' },
  { title: 'Transfers', desc: 'All internal transportation including private transfers and intercity travel.' },
  { title: 'Activities', desc: 'Guided excursions, curated local experiences, and cultural exploration activities.' },
];

const exclusions = [
  'International flights are not included',
  'Visa fees and processing',
  'Meals not mentioned in inclusions',
  'Arrival or departure transfers not specified',
  'Additional experiences outside the itinerary',
  'Applicable taxes if required',
  'Personal expenses such as shopping, additional meals, and weather related itinerary changes',
];

const itinerary = [
  { day: 'Day 1', desc: 'Arrival in Vietnam and welcome meet up with the group. Evening introduction and relaxed dinner.' },
  { day: 'Day 2', desc: 'Explore local markets and cultural neighborhoods with guided walking experiences.' },
  { day: 'Day 3', desc: 'Cruise through limestone karsts and coastal landscapes.' },
  { day: 'Day 4', desc: 'Free day for optional adventure activities or local exploration.' },
  { day: 'Day 5', desc: 'Journey to the next city with scenic stops along the way.' },
  { day: 'Day 6', desc: 'Explore lantern lit streets and historic architecture.' },
  { day: 'Day 7', desc: 'Adventure activities or nature exploration.' },
  { day: 'Day 8', desc: 'Relaxation day with optional beach time or spa experiences.' },
  { day: 'Day 9', desc: 'Farewell dinner with the group.' },
  { day: 'Day 10', desc: 'Departure.' },
];

const VietnamTrip = () => {
  const [activeTab, setActiveTab] = useState('inclusions');
  const [openDay, setOpenDay] = useState(null);

  const toggleDay = (day) => setOpenDay(openDay === day ? null : day);

  return (
    <div className="trip-page">
      <div className="trip-hero-banner">
        <img src="/images/vietnam.jpg" alt="Vietnam" className="trip-hero-img" />
        <div className="trip-hero-overlay" />
      </div>

      <div className="container">
        <Link to="/" className="trip-back">← Back to Home</Link>

        <div className="trip-header-info">
          <h1>Vibing in Vietnam</h1>
          <div className="trip-meta">
            <span>📅 Apr 24 - May 3</span>
            <span>INR 59,999</span>
            <span>Vietnam</span>
          </div>
        </div>

        <div className="trip-detail-section">
          <h2>Trip Details</h2>
          <p>Vietnam blends dramatic landscapes, vibrant cities, and timeless culture. From cruising through limestone karsts to exploring lantern lit towns and lively markets, every moment feels cinematic. This experience balances adventure with relaxation, giving you space to explore, connect, and enjoy Vietnam at your own pace.</p>
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

export default VietnamTrip;
