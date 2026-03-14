const steps = [
  {
    number: 1,
    title: 'Fill the Invite Form',
    description: 'Submit your details so we know who you are and what kind of experiences excite you.',
    icon: '📝',
  },
  {
    number: 2,
    title: 'Tell Us About Yourself',
    description: 'Share your profession, passions, and the kind of energy you bring into a group experience.',
    icon: '💬',
  },
  {
    number: 3,
    title: 'We Curate the Crew',
    description: 'We carefully curate every group so the people on each trip complement each other.',
    icon: '✨',
  },
  {
    number: 4,
    title: 'Get Your Invite',
    description: 'Once selected, you receive your invitation and can confirm your spot on the experience.',
    icon: '🎟️',
  },
];

const HowToSignUp = () => (
  <section className="signup-steps-section">
    <div className="container">
      <p className="section-label">How to Sign Up for a WanderMesh Trip</p>
      <div className="steps-grid">
        {steps.map((step) => (
          <div className="step-card" key={step.number}>
            <div className="step-icon">{step.icon}</div>
            <div className="step-number">Step {step.number}</div>
            <h4 className="step-title">{step.title}</h4>
            <p className="step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToSignUp;
