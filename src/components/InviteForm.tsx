import { useState, FormEvent } from 'react';
import { useInviteModal } from '../context/InviteModalContext';

const InviteForm = () => {
  const { isOpen, closeModal } = useInviteModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    phone: '',
    instagram: '',
    profession: '',
    experience: '',
    excitement: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  console.log("Submitting:", formData); // debug

  try {
    const res = await fetch("https://wander-mesh-replica-production.up.railway.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        gender: formData.gender,
        phone: formData.phone,
        instaId: formData.instagram,
        trip: formData.experience,
        whyJoin: formData.excitement,
        occupation: formData.profession,
      }),
    });

    const result = await res.json();
    console.log("Response:", result);

    // show success UI ONLY after success
    setSubmitted(true);

    setTimeout(() => {
      closeModal();
      setSubmitted(false);
      setFormData({
        name: '',
        gender: '',
        age: '',
        phone: '',
        instagram: '',
        profession: '',
        experience: '',
        excitement: '',
      });
    }, 2000);

  } catch (err) {
    console.error("Error submitting form:", err);
  }
};

  return (
    <>
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
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input
                      type="number"
                      id="age"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      required
                      min="18"
                      placeholder="Your age"
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
                  <div className="form-group">
                    <label htmlFor="profession">Profession</label>
                    <input
                      type="text"
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      required
                      placeholder="Your profession"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="experience">Which experience are you interested in?</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option>Vibing in Vietnam</option>
                      <option>Bali Uncharted</option>
                      <option>BLR Breakaway</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="excitement">What excites you about the WanderMesh trip?</label>
                    <textarea
                      id="excitement"
                      name="excitement"
                      value={formData.excitement}
                      onChange={handleChange}
                      required
                      placeholder="Tell us what excites you..."
                      rows={4}
                    />
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
