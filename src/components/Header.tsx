import { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

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
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' && !location.hash ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            Home
          </Link>
          <a 
            href="/#upcoming-experiences" 
            className={`nav-link ${location.hash === '#upcoming-experiences' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            Upcoming Experiences
          </a>
          <Link 
            to="/about-wandermesh" 
            className={`nav-link ${location.pathname === '/about-wandermesh' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link 
            to="/contact-us" 
            className={`nav-link ${location.pathname === '/contact-us' ? 'active' : ''}`} 
            onClick={closeMenu}
          >
            Contact Us
          </Link>
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
