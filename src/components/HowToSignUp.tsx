import { useInviteModal } from '../context/InviteModalContext';

const steps = [
  {
    number: 1,
    label: 'STEP 1',
    title: 'Request an Invite',
    description: 'Choose your preferred experience and submit your invite request.',
  },
  {
    number: 2,
    label: 'STEP 2',
    title: 'Get Selected',
    description: 'We carefully curate the right tribe by reviewing every application and reaching out to shortlisted travelers.',
  },
  {
    number: 3,
    label: 'STEP 3',
    title: 'Join the Tribe',
    description: 'Our Experience Curator will walk you through the trip details, confirm your spot, and get you ready for an unforgettable journey.',
  },
];

// Icon components (clean minimal line icons)
const IconForm = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="8" width="28" height="32" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <line x1="14" y1="16" x2="34" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="24" x2="34" y2="24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <line x1="14" y1="32" x2="26" y2="32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IconConversation = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16C8 12.134 11.134 9 15 9H33C36.866 9 40 12.134 40 16V28C40 31.866 36.866 35 33 35H16L12 39V35H15C11.134 35 8 31.866 8 28V16Z" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="22" r="1.5" fill="currentColor" />
    <circle cx="24" cy="22" r="1.5" fill="currentColor" />
    <circle cx="31" cy="22" r="1.5" fill="currentColor" />
  </svg>
);

const IconCommunity = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="15" r="5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 28C12 23.582 17.373 20 24 20C30.627 20 36 23.582 36 28V35H12V28Z" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5 24C5 21.239 6.79 19 9 19C11.21 19 13 21.239 13 24V30H5V24Z" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="36" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M35 24C35 21.239 36.79 19 39 19C41.21 19 43 21.239 43 24V30H35V24Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const icons = [IconForm, IconConversation, IconCommunity];

const HowToSignUp = () => {
  const { openModal } = useInviteModal();

  return (
    <section className="signup-steps-section">
      <div className="container">
        <div className="signup-header">
          <p className="section-label">How to Join a WanderMesh Experience?</p>
        </div>
        <div className="steps-pathway">
          {steps.map((step, idx) => {
            const IconComponent = icons[idx];
            return (
              <div key={step.number}>
                <div className="step-card">
                  <div className="step-label">{step.label}</div>
                  <div className="step-icon-wrapper">
                    <IconComponent />
                  </div>
                  <h4 className="step-title">{step.title}</h4>
                  <p className="step-desc">{step.description}</p>
                </div>
                {idx < steps.length - 1 && <div className="step-connector"></div>}
              </div>
            );
          })}
        </div>
        <div className="signup-cta">
          <button className="btn btn-primary" onClick={openModal}>
            Request Your Invite
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToSignUp;
