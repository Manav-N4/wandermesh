import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import FooterForm from '../components/FooterForm';

const ContactUs = () => (
  <div className="about-page" style={{ minHeight: '60vh', marginTop: '100px' }}>
    <div className="container">
      <Link to="/" className="trip-back">← Back to Home</Link>

      <div className="about-meet-section" style={{ padding: '40px 0' }}>
        <p className="section-label">Contact Us</p>
        <div className="about-meet-intro" style={{ marginBottom: '40px' }}>
          <p style={{ fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--color-text)' }}>
            "All those who wander are not lost. In case you are, we are here to help"
          </p>
        </div>

        {/* Join Community Form Section */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto 60px',
          padding: '2.5rem',
          background: '#fff',
          borderRadius: 'var(--card-radius)',
          boxShadow: 'var(--card-shadow)',
          border: '1px solid var(--color-border)'
        }}>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', marginBottom: '10px', color: 'var(--color-text)' }}>Join WanderMesh Community</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: '25px', fontSize: '1.05rem' }}>
            Sign up to be the first to know about upcoming exclusive experiences.
          </p>
          <FooterForm />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', textAlign: 'center', marginBottom: '60px' }}>
          <div className="about-feature-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '10px' }}>WhatsApp Us</h3>
            <p style={{ color: 'var(--color-accent)', fontWeight: '500', fontSize: '1.1rem' }}>+91-9538133564</p>
          </div>
          <div className="about-feature-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '10px' }}>Email Us</h3>
            <a href="mailto:wandermesh25@gmail.com" style={{ color: 'var(--color-accent)', fontWeight: '500', fontSize: '1.1rem', textDecoration: 'none' }}>wandermesh25@gmail.com</a>
          </div>
          <div className="about-feature-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '10px' }}>Follow Us</h3>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px', marginBottom: '20px' }}>
              <a href="https://www.instagram.com/wandermesh/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s' }}>
                <Instagram size={28} />
              </a>
              <a href="https://www.facebook.com/share/14LMBATcYu1/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s' }}>
                <Facebook size={28} />
              </a>
              <a href="https://www.youtube.com/@WanderMesh" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-secondary)', transition: 'color 0.3s' }}>
                <Youtube size={28} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

export default ContactUs;
