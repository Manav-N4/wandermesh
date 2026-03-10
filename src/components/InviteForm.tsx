import { useState, FormEvent } from 'react';

const InviteForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="invite-section" id="request-invite">
        <div className="container">
          <div className="form-success">Thanks! We'll be in touch soon.</div>
        </div>
      </section>
    );
  }

  return (
    <section className="invite-section" id="request-invite">
      <div className="container">
        <p className="section-label">Request Your Invite</p>
        <p className="invite-subtitle">Awesome — just a few quick details to finalise your trip</p>
        <form className="invite-form" onSubmit={handleSubmit}>
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
              <option>Non-binary</option>
              <option>Prefer not to say</option>
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
              <option>Both</option>
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
      </div>
    </section>
  );
};

export default InviteForm;
