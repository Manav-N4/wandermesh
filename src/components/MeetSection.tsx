import { Link } from 'react-router-dom';

const MeetSection = () => (
  <section className="meet-section">
    <div className="meet-bg" style={{ backgroundImage: 'url(/images/about-placeholder.jpg)' }} />
    <div className="meet-overlay" />
    <div className="container meet-content-wrapper">
      <p className="section-label" style={{ color: '#fff' }}>Meet WanderMesh</p>
      <div className="meet-intro">
        <p>
          WanderMesh is a curated travel collective bringing together explorers, creators, founders, and curious minds who want more than just destinations. Our journeys are designed to spark conversations, friendships, and experiences that stay with you long after the trip ends.
        </p>
        <Link to="/about-wandermesh" className="btn-primary meet-learn-more">Learn More</Link>
      </div>
    </div>
  </section>
);

export default MeetSection;
