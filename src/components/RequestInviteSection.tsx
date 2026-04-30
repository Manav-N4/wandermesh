import { useState, FormEvent } from 'react';
import { supabase } from "../lib/supabase";

const RequestInviteSection = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    countryCode: '+91',
    phone: '',
    instagram: '',
    profession: '',
    experience: '',
    excitement: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const onlyNums = value.replace(/[^0-9]/g, '');
      if (onlyNums.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: onlyNums }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateStep1 = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid name';
    }
    if (formData.phone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }
    if (!formData.experience) {
      newErrors.experience = 'Please select an experience';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.profession.trim()) {
      newErrors.profession = 'Please enter your profession';
    }
    const ageNum = Number(formData.age);
    if (!formData.age || isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      newErrors.age = 'Please enter a valid age (18+)';
    }
    if (!formData.excitement.trim() || formData.excitement.trim().length < 10) {
      newErrors.excitement = 'Please provide more details (min 10 chars)';
    }
    if (!formData.gender) {
      newErrors.gender = 'Please select a gender';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateStep2()) return;

    try {
      const { error } = await supabase.from("leads").insert([
        {
          name: formData.name,
          gender: formData.gender,
          phone: `${formData.countryCode} ${formData.phone}`,
          insta_id: formData.instagram,
          trip: formData.experience,
          why_join: formData.excitement,
          occupation: formData.profession,
        }
      ]);

      if (error) throw error;

      setFormData({
        name: '',
        gender: '',
        age: '',
        countryCode: '+91',
        phone: '',
        instagram: '',
        profession: '',
        experience: '',
        excitement: '',
      });

      setSubmitted(true);

      if (typeof window !== 'undefined') {
        (window as any).dataLayer = (window as any).dataLayer || [];
        (window as any).dataLayer.push({
          'event': 'request_invite_success',
          'trip_interest': formData.experience,
          'form_name': 'request_invite_section_form'
        });
      }

      setTimeout(() => {
        setSubmitted(false);
        setStep(1);
      }, 5000);

    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <section className="request-invite-section" id="request-invite">
      <style>{`
        .luxury-form-container {
          background: #fff;
          padding: 3rem;
          border-radius: var(--card-radius);
          box-shadow: var(--card-shadow);
          border: 1px solid var(--color-border);
          margin-top: 2rem;
          text-align: left;
        }
        .luxury-input {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid var(--color-border);
          background: #f9fafb;
          color: var(--color-text);
          font-size: 1rem;
          font-family: var(--font-body);
          transition: all 0.3s ease;
          outline: none;
        }
        .luxury-input:focus {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.1);
          background: #fff;
        }
        .luxury-input.input-error {
          border-color: #ef4444;
        }
        .luxury-label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: var(--color-text-secondary);
          font-size: 0.95rem;
        }
        .luxury-error {
          color: #ef4444;
          font-size: 0.85rem;
          margin-top: 0.4rem;
          display: block;
        }
        .form-row {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .form-col {
          flex: 1;
        }
        @media (max-width: 640px) {
          .luxury-form-container {
            padding: 2rem 1.5rem;
          }
          .form-row {
            flex-direction: column;
            gap: 1.5rem;
          }
        }
      `}</style>
      <div className="container" style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center' }}>
          <p className="section-label">Ready to Travel Differently?</p>
          <p>
            Your next adventure isn’t for everyone.
            Secure your invite to a WanderMesh Experience.
          </p>
        </div>

        <div className="luxury-form-container">
          {submitted ? (
            <div className="form-success-modal" style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div className="success-icon" style={{ fontSize: '4rem', color: 'var(--color-accent)', marginBottom: '1rem' }}>✓</div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>Thank you!</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem' }}>We'll be in touch soon with your exclusive invite.</p>
            </div>
          ) : (
            <form className="invite-form-modal" onSubmit={handleSubmit} style={{ margin: 0, padding: 0, background: 'transparent' }}>
              {step === 1 && (
                <div className="animate-fade-in-up">
                  <div className="form-row">
                    <div className="form-col">
                      <label htmlFor="name" className="luxury-label">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className={`luxury-input ${errors.name ? 'input-error' : ''}`}
                      />
                      {errors.name && <span className="luxury-error">{errors.name}</span>}
                    </div>

                    <div className="form-col">
                      <label htmlFor="instagram" className="luxury-label">Instagram ID</label>
                      <input
                        type="text"
                        id="instagram"
                        name="instagram"
                        value={formData.instagram}
                        onChange={handleChange}
                        placeholder="@yourhandle"
                        className="luxury-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-col">
                      <label htmlFor="phone" className="luxury-label">Phone Number</label>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className={`luxury-input ${errors.phone ? 'input-error' : ''}`}
                          style={{ width: '120px', flexShrink: 0 }}
                        >
                          <option value="+91">+91 (IN)</option>
                          <option value="+1">+1 (US)</option>
                          <option value="+44">+44 (UK)</option>
                          <option value="+61">+61 (AU)</option>
                          <option value="+971">+971 (AE)</option>
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="10-digit number"
                          className={`luxury-input ${errors.phone ? 'input-error' : ''}`}
                        />
                      </div>
                      {errors.phone && <span className="luxury-error">{errors.phone}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-col">
                      <label htmlFor="experience" className="luxury-label">Which experience are you interested in?</label>
                      <select
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        className={`luxury-input ${errors.experience ? 'input-error' : ''}`}
                      >
                        <option value="">Select</option>
                        <option>Bali Uncharted</option>
                        <option>Vibing in Vietnam</option>
                        <option>Euro Summer Mesh</option>
                        <option>Bali Uncharted 2.0</option>
                      </select>
                      {errors.experience && <span className="luxury-error">{errors.experience}</span>}
                    </div>
                  </div>

                  <button type="button" onClick={handleNextStep} className="btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                    Next Step
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="animate-fade-in-right">
                  <div className="form-row">
                    <div className="form-col">
                      <label htmlFor="profession" className="luxury-label">Profession</label>
                      <input
                        type="text"
                        id="profession"
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                        placeholder="Your profession"
                        className={`luxury-input ${errors.profession ? 'input-error' : ''}`}
                      />
                      {errors.profession && <span className="luxury-error">{errors.profession}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-col">
                      <label htmlFor="age" className="luxury-label">Age</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        required
                        min="18"
                        placeholder="Your age"
                        className={`luxury-input ${errors.age ? 'input-error' : ''}`}
                      />
                      {errors.age && <span className="luxury-error">{errors.age}</span>}
                    </div>

                    <div className="form-col">
                      <label htmlFor="gender" className="luxury-label">Gender</label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        required
                        className={`luxury-input ${errors.gender ? 'input-error' : ''}`}
                      >
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </select>
                      {errors.gender && <span className="luxury-error">{errors.gender}</span>}
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-col">
                      <label htmlFor="excitement" className="luxury-label">Why join WanderMesh?</label>
                      <textarea
                        id="excitement"
                        name="excitement"
                        value={formData.excitement}
                        onChange={handleChange}
                        required
                        placeholder="Tell us what excites you..."
                        rows={4}
                        className={`luxury-input ${errors.excitement ? 'input-error' : ''}`}
                        style={{ resize: 'vertical' }}
                      />
                      {errors.excitement && <span className="luxury-error">{errors.excitement}</span>}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                    <button type="button" onClick={handlePrevStep} className="btn-outline" style={{ flex: 1, padding: '14px 32px' }}>
                      Back
                    </button>
                    <button type="submit" className="btn-primary" style={{ flex: 2 }}>
                      Submit Request
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default RequestInviteSection;