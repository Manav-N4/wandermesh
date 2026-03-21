import { useState, FormEvent } from 'react';
import { supabase } from '../lib/supabase';

const FooterForm = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    countryCode: '+91',
    phone_number: '',
    instagram_id: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'phone_number') {
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

    if (!formData.full_name.trim() || formData.full_name.trim().length < 2) {
      newErrors.full_name = 'Please enter a valid name';
    }
    if (formData.phone_number.length !== 10) {
      newErrors.phone_number = 'Please enter a valid 10-digit number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;
    setLoading(true);

    const { data, error } = await supabase
      .from("join_community")
      .insert([
        {
          full_name: formData.full_name,
          phone_number: `${formData.countryCode} ${formData.phone_number}`,
          instagram_handle: formData.instagram_id
        }
      ]);

    setLoading(false);

    if (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    } else {
      setSubmitted(true);
      setFormData({ full_name: '', countryCode: '+91', phone_number: '', instagram_id: '' });
      setTimeout(() => setSubmitted(false), 7000);
    }
  };

  if (submitted) {
    return (
      <div style={{ padding: '20px', background: 'var(--color-cream)', borderRadius: '12px', color: 'var(--color-accent)', textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
        <div style={{ fontSize: '24px', marginBottom: '10px' }}>✓</div>
        <p style={{ fontWeight: '500', lineHeight: '1.6', fontSize: '0.95rem' }}>Your application has been received! Every member of the WanderMesh community is carefully selected to ensure the best experience for everyone. Expect to hear from us soon about your eligibility for our upcoming experiences.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '400px', width: '100%', margin: '0 auto', textAlign: 'left' }}>
      <div className="form-group">
        <label htmlFor="footer-name">Full Name</label>
        <input
          type="text"
          id="footer-name"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
          placeholder="Your name"
          className={errors.full_name ? 'input-error' : ''}
        />
        {errors.full_name && <span className="error-text">{errors.full_name}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="footer-phone">Phone Number</label>
        <div className="phone-input-group">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className={`country-code-select ${errors.phone_number ? 'input-error' : ''}`}
          >
            <option value="+91">+91 (IN)</option>
            <option value="+1">+1 (US)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+61">+61 (AU)</option>
            <option value="+971">+971 (AE)</option>
          </select>
          <input
            type="tel"
            id="footer-phone"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            required
            placeholder="10-digit number"
            className={errors.phone_number ? 'input-error' : ''}
          />
        </div>
        {errors.phone_number && <span className="error-text">{errors.phone_number}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="footer-instagram">Instagram ID</label>
        <input
          type="text"
          id="footer-instagram"
          name="instagram_id"
          value={formData.instagram_id}
          onChange={handleChange}
          placeholder="@yourhandle"
        />
      </div>

      <button
        type="submit"
        className="btn-primary"
        disabled={loading}
        style={{ padding: '12px 30px', whiteSpace: 'nowrap', opacity: loading ? 0.7 : 1, alignSelf: 'center', marginTop: '10px' }}
      >
        {loading ? 'Joining...' : 'Join Now'}
      </button>
    </form>
  );
};

export default FooterForm;
