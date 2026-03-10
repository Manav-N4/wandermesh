import { Link } from 'react-router-dom';

const itinerary = [
  { day: 'Day 1', desc: 'Arrival in Vietnam and welcome meet up with the group. Evening introduction and relaxed dinner.', highlights: ['Arrival experience', 'Welcome gathering'] },
  { day: 'Day 2', desc: 'Explore local markets and cultural neighborhoods with guided walking experiences.', highlights: ['Street markets', 'Cultural exploration'] },
  { day: 'Day 3', desc: 'Cruise through limestone karsts and coastal landscapes.', highlights: ['Scenic cruise', 'Photography opportunities'] },
  { day: 'Day 4', desc: 'Free day for optional adventure activities or local exploration.', highlights: ['Flexible exploration'] },
  { day: 'Day 5', desc: 'Journey to the next city with scenic stops along the way.', highlights: ['Intercity travel', 'Local villages'] },
  { day: 'Day 6', desc: 'Explore lantern lit streets and historic architecture.', highlights: ['Historic town walk'] },
  { day: 'Day 7', desc: 'Adventure activities or nature exploration.', highlights: ['Nature excursions'] },
  { day: 'Day 8', desc: 'Relaxation day with optional beach time or spa experiences.', highlights: ['Leisure'] },
  { day: 'Day 9', desc: 'Farewell dinner with the group.', highlights: ['Celebration evening'] },
  { day: 'Day 10', desc: 'Departure.', highlights: ['Return journey'] },
];

const VietnamTrip = () => (
  <div className="trip-page">
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
        <h2>Inclusions</h2>
        <div className="inclusions-grid">
          <div className="inclusion-item"><h4>Accommodation</h4><p>Carefully selected boutique hotels and premium stays throughout the trip.</p></div>
          <div className="inclusion-item"><h4>Meals</h4><p>Selected breakfasts and curated local dining experiences.</p></div>
          <div className="inclusion-item"><h4>Transfers</h4><p>All internal transportation including private transfers and intercity travel.</p></div>
          <div className="inclusion-item"><h4>Activities</h4><p>Guided excursions, curated local experiences, and cultural exploration activities.</p></div>
        </div>
      </div>

      <div className="trip-detail-section">
        <h2>Exclusions</h2>
        <ul className="exclusion-list">
          <li>International flights are not included</li>
          <li>Visa fees and processing</li>
          <li>Meals not mentioned in inclusions</li>
          <li>Arrival or departure transfers not specified</li>
          <li>Additional experiences outside the itinerary</li>
          <li>Applicable taxes if required</li>
          <li>Personal expenses such as shopping, additional meals, and weather related itinerary changes</li>
        </ul>
      </div>

      <div className="trip-detail-section">
        <h2>Itinerary</h2>
        <div className="itinerary-list">
          {itinerary.map((day) => (
            <div className="itinerary-day" key={day.day}>
              <h4>{day.day}</h4>
              <p>{day.desc}</p>
              <div className="itinerary-highlights">
                {day.highlights.map((h) => <span key={h}>{h}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default VietnamTrip;
