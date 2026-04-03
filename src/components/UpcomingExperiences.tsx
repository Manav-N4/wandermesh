import { Link } from 'react-router-dom';

const experiences = [
  {
    image: '/images/bali.jpg',
    title: 'Bali Uncharted',
    date: '📅 May 1 - May 10',
    price: 'INR 56,999',
    duration: '9 NIGHTS / 10 DAYS',
    description: 'Join us for a tropical retreat in Bali. Wander through emerald rice terraces, breathe in the ocean breeze, explore vibrant markets, and watch the sky blush pink at sunset. Whether you seek adventure or stillness, this escape lets you move freely and discover your rhythm.',
    link: '/upcoming-loops/bali-uncharted',
  },
  {
    image: '/images/vietnam.jpg',
    title: 'Vibing in Vietnam',
    date: '📅 Jun 5 - Jun 14',
    price: 'INR 59,999',
    duration: '9 NIGHTS / 10 DAYS',
    description: 'Join us for a coastal retreat in Vietnam. Cruise between emerald karsts, breathe in the salty breeze, discover lantern-lit alleys, and watch the riverfront glow gold at twilight. Whether craving thrill or calm, this journey helps you set your pace and embrace your rhythm.',
    link: '/upcoming-loops/vibing-in-vietnam',
  },
  {
    image: '/images/europe.jpg',
    title: 'Euro Summer Mesh',
    date: '📅 July 2 - July 13',
    price: 'INR 1,38,000',
    duration: '11 NIGHTS / 12 DAYS',
    description: 'Join us for a summer mesh across Europe. Drift through Prague’s old streets, follow the Danube lights in Budapest, and chase island sunsets and festival nights on Croatia’s coast, all at your own rhythm.',
    link: '/upcoming-loops/summer-mesh-europe',
  },
];

const UpcomingExperiences = () => (
  <section className="experiences" id="upcoming-experiences">
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
                <span>{exp.duration}</span>
                <span><b>Price: {exp.price}</b></span>
              </div>
              <p>{exp.description}</p>
              <Link to={exp.link} className="link-arrow">View More {`>`}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default UpcomingExperiences;
