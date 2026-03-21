import { Instagram, Facebook, Youtube } from 'lucide-react';
import FooterForm from './FooterForm';

const Footer = () => {
  return (
    <footer className="site-footer" style={{ textAlign: 'center' }}>
      <div className="container">
        <div style={{ marginBottom: '40px' }}>
          <h4 style={{ color: '#fff', fontFamily: 'var(--font-display)', marginBottom: '15px' }}>Join WanderMesh Community</h4>
          <FooterForm />
        </div>
        <div className="footer-grid">
          <div className="footer-col">
            <h4>Contact Us</h4>
            <a href="mailto:support@wandermesh.in">support@wandermesh.in</a>
          </div>
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center', justifyContent: 'center' }}>
              <a href="https://www.instagram.com/wandermesh/" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
              <a href="https://www.facebook.com/share/14LMBATcYu1/" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
              <a href="https://www.youtube.com/@WanderMesh" target="_blank" rel="noopener noreferrer"><Youtube size={24} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <a href="https://www.wandermesh.in/_files/ugd/22bea7_40c7854a3ea54de2b3eafdc9dd2b79f2.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://www.wandermesh.in/_files/ugd/22bea7_d2b532a6026c414fb10f35835481e656.pdf" target="_blank" rel="noopener noreferrer">Terms of Use</a>
          </div>
        </div>
        <div className="footer-bottom" style={{ marginTop: '40px' }}>
          © 2025 by WanderMesh.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
