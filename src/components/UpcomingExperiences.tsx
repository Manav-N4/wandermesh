import { Link } from 'react-router-dom';

const experiences = [
  {
    image: '/images/vietnam.jpg',
    title: 'Vibing in Vietnam',
    date: '📅 Apr 24 - May 3',
    price: 'INR 59,999',
    location: 'Vietnam',
    description: 'Join us for a coastal retreat in Vietnam. Cruise between emerald karsts, breathe in the salty breeze, discover lantern-lit alleys, and watch the riverfront glow gold at twilight. Whether craving thrill or calm, this journey helps you set your pace and embrace your rhythm.',
    link: '/upcoming-loops/vibing-in-vietnam',
  },
  {
    image: '/images/bali.jpg',
    title: 'Bali Uncharted',
    date: '📅 May 1 - May 10',
    price: 'INR 56,999',
    location: 'Bali',
    description: 'Join us for a tropical retreat in Bali. Wander through emerald rice terraces, breathe in the ocean breeze, explore vibrant markets, and watch the sky blush pink at sunset. Whether you seek adventure or stillness, this escape lets you move freely and discover your rhythm.',
    link: '/upcoming-loops/bali-uncharted',
  },
];

const UpcomingExperiences = () => (
  <section className="experiences">
    <div className="container">
      <p className="section-label">Upcoming Experiences</p>
      <div className="experiences-grid">
        {experiences.map((exp) => (
          <div className="experience-card" key={exp.title}>
            <img className="experience-card-img" src={exp.image} alt={exp.title} />
            <div className="experience-card-body">
              <h3>{exp.title}</h3>
              <div className="experience-meta">
                <span>{exp.date}</span>
                <span>{exp.price}</span>
                <span>{exp.location}</span>
              </div>
              <p>{exp.description}</p>
              <Link to={exp.link} className="btn-outline">View More</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UpcomingExperiences;
