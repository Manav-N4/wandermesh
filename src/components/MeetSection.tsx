import { Link } from 'react-router-dom';

const MeetSection = () => (
  <section className="meet-section">
    <div className="meet-bg" style={{ backgroundImage: 'url(/images/hero.jpg)' }} />
    <div className="meet-overlay" />
    <div className="container meet-content-wrapper">
      <p className="section-label">About WanderMesh</p>
      <div className="meet-intro">
        <p>
          WanderMesh is a global community of solo travelers who choose experiences over itineraries—where every journey is shaped by people, spontaneity, and moments you can’t plan.
        </p>
        <Link to="/about-wandermesh" className="link-arrow">Learn More {`>`}</Link>
      </div>
    </div>
  </section>
);

export default MeetSection;
