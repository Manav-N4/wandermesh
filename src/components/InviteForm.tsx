import { useState, FormEvent } from 'react';
import { useInviteModal } from '../context/InviteModalContext';
import { supabase } from "../lib/supabase";

const InviteForm = () => {
  const { isOpen, closeModal } = useInviteModal();
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

  const validate = () => {
    let newErrors: { [key: string]: string } = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter a valid name';
    }
    if (!formData.gender) {
      newErrors.gender = 'Please select a gender';
    }
    const ageNum = Number(formData.age);
    if (!formData.age || isNaN(ageNum) || ageNum < 18 || ageNum > 100) {
      newErrors.age = 'Please enter a valid age (18+)';
    }
    if (formData.phone.length !== 10) {
      newErrors.phone = 'Please enter a valid 10-digit number';
    }
    if (!formData.profession.trim()) {
      newErrors.profession = 'Please enter your profession';
    }
    if (!formData.experience) {
      newErrors.experience = 'Please select an experience';
    }
    if (!formData.excitement.trim() || formData.excitement.trim().length < 10) {
       newErrors.excitement = 'Please provide more details (min 10 chars)';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

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

      setSubmitted(true);

      setTimeout(() => {
        closeModal();
        setSubmitted(false);
      }, 2000);

    } catch (err) {
      console.error("Error:", err);
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
                      className={errors.name ? 'input-error' : ''}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                      className={errors.gender ? 'input-error' : ''}
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                    {errors.gender && <span className="error-text">{errors.gender}</span>}
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
                      className={errors.age ? 'input-error' : ''}
                    />
                    {errors.age && <span className="error-text">{errors.age}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <div className="phone-input-group">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className={`country-code-select ${errors.phone ? 'input-error' : ''}`}
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
                        className={errors.phone ? 'input-error' : ''}
                      />
                    </div>
                    {errors.phone && <span className="error-text">{errors.phone}</span>}
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
                      className={errors.profession ? 'input-error' : ''}
                    />
                    {errors.profession && <span className="error-text">{errors.profession}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="experience">Which experience are you interested in?</label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      required
                      className={errors.experience ? 'input-error' : ''}
                    >
                      <option value="">Select</option>
                      <option>Vibing in Vietnam</option>
                      <option>Bali Uncharted</option>
                      <option>BLR Breakaway</option>
                    </select>
                    {errors.experience && <span className="error-text">{errors.experience}</span>}
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
                      className={errors.excitement ? 'input-error' : ''}
                    />
                    {errors.excitement && <span className="error-text">{errors.excitement}</span>}
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
