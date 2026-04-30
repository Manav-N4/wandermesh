import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="site-footer" style={{ textAlign: 'center' }}>
      <div className="container">
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
            <a href="/assets/WanderMesh_Privacy_Policy.pdf" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="/assets/WanderMesh_Terms_and_Conditions.pdf" target="_blank" rel="noopener noreferrer">Terms of Use</a>
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
