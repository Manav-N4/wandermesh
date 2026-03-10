import { Link } from 'react-router-dom';

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

const BaliTrip = () => (
  <div className="trip-page">
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
        <h2>Inclusions</h2>
        <div className="inclusions-grid">
          <div className="inclusion-item"><h4>Accommodation</h4><p>Boutique stays and curated villas.</p></div>
          <div className="inclusion-item"><h4>Meals</h4><p>Selected breakfasts and local dining experiences.</p></div>
          <div className="inclusion-item"><h4>Transfers</h4><p>Private transport between destinations.</p></div>
          <div className="inclusion-item"><h4>Activities</h4><p>Guided cultural and nature experiences.</p></div>
        </div>
      </div>

      <div className="trip-detail-section">
        <h2>Exclusions</h2>
        <ul className="exclusion-list">
          <li>Airfares</li>
          <li>Visas</li>
          <li>Meals not mentioned</li>
          <li>Airport transfers not included</li>
          <li>Optional activities including Zamna Music Festival pass</li>
          <li>Taxes if applicable</li>
          <li>Personal expenses and weather related itinerary adjustments</li>
        </ul>
      </div>

      <div className="trip-detail-section">
        <h2>Itinerary</h2>
        <div className="itinerary-list">
          {itinerary.map((day) => (
            <div className="itinerary-day" key={day.day}>
              <h4>{day.day}</h4>
              <p>{day.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default BaliTrip;
