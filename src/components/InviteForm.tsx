import { useState, FormEvent } from 'react';

const InviteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    instagram: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', instagram: '' });
    }, 2000);
  };

  return (
    <section className="tribe-section" id="join-tribe">
      <div className="container">
        <p className="section-label">Join the Tribe</p>
        <div className="tribe-wrapper">
          <div className="tribe-content">
            <p className="tribe-description">Connect with fellow travelers, share experiences, and be part of something special.</p>
          </div>
          
          {submitted ? (
            <div className="tribe-success">
              <div className="success-icon">✓</div>
              <h3>Welcome to the Tribe!</h3>
              <p>Thanks for joining! We'll reach out soon.</p>
            </div>
          ) : (
            <form className="tribe-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Your phone number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="instagram">Instagram ID</label>
                <input
                  type="text"
                  id="instagram"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="@yourhandle"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-tribe">
                Join Tribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default InviteForm;
