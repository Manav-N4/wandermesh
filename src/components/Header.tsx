import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useInviteModal } from '../context/InviteModalContext';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <img src="/images/NO_BG.png" alt="WanderMesh" />
        </Link>
        <nav className={`header-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <a href="/#upcoming-experiences" className="nav-link" onClick={closeMenu}>Upcoming Experiences</a>
          <Link to="/about-wandermesh" className="nav-link" onClick={closeMenu}>About Us</Link>
          <Link to="/contact-us" className="nav-link" onClick={closeMenu}>Contact Us</Link>
        </nav>
        <button 
          className={`hamburger ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
