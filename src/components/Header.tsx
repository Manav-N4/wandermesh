import { useLocation, useNavigate, Link } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleInviteClick = () => {
    if (location.pathname === '/') {
      document.getElementById('request-invite')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('request-invite')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          <img src="/images/NO_BG.png" alt="WanderMesh" />
        </Link>
        <button className="btn-primary header-btn" onClick={handleInviteClick}>
          Request Your Invite
        </button>
      </div>
    </header>
  );
};

export default Header;
