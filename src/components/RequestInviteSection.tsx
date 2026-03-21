import { useInviteModal } from '../context/InviteModalContext';

const RequestInviteSection = () => {
  const { openModal } = useInviteModal();

  return (
    <section className="request-invite-section">
      <div className="container">
        <p className="section-label">Ready to Travel Differently?</p>
        <p>
          Your next adventure isn’t for everyone.
          Secure your invite to a WanderMesh Experience.
        </p>
        <button className="btn-primary" onClick={openModal}>
          Request Your Invite
        </button>
      </div>
    </section>
  );
};

export default RequestInviteSection;