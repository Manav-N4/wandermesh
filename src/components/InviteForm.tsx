import { useState, FormEvent } from 'react';
import { useInviteModal } from '../context/InviteModalContext';

const InviteForm = () => {
  const { isOpen, closeModal } = useInviteModal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      closeModal();
      setSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <section className="invite-section" id="request-invite">
        <div className="container">
          <p className="section-label">Request Your Invite</p>
          <div className="invite-tagline-wrapper">
            <p className="invite-tagline">Kickstart your next escape with us. Claim your exclusive invite today.</p>
          </div>
        </div>
      </section>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            
            {submitted ? (
              <div className="form-success-modal">
                <div className="success-icon">✓</div>
                <h3>Thank you!</h3>
                <p>We'll be in touch soon with your exclusive invite.</p>
              </div>
            ) : (
              <>
                <h2 className="modal-title">Request Your Invite</h2>
                <p className="modal-subtitle">Just a few quick details to finalize your trip</p>
                <form className="invite-form-modal" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>Gender</label>
                    <select required>
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Age</label>
                    <input type="number" required min="18" />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" required />
                  </div>
                  <div className="form-group">
                    <label>Instagram Handle</label>
                    <input type="text" />
                  </div>
                  <div className="form-group">
                    <label>Trip Interest</label>
                    <select required>
                      <option value="">Select</option>
                      <option>Vibing in Vietnam</option>
                      <option>Bali Uncharted</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Profession</label>
                    <input type="text" required />
                  </div>
                  <div className="form-group">
                    <label>What excites you about the WanderMesh trip?</label>
                    <textarea required />
                  </div>
                  <button type="submit" className="btn-primary">Request Your Invite</button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InviteForm;
