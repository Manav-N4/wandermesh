import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useInviteModal } from '../context/InviteModalContext';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { openModal } = useInviteModal();

  const handleInviteClick = () => {
    openModal();
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
