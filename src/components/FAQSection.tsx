import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`} style={{
      borderBottom: '1px solid var(--color-border)',
      padding: '20px 0',
      cursor: 'pointer'
    }} onClick={() => setIsOpen(!isOpen)}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px'
      }}>
        <h3 style={{
          fontSize: '1.1rem',
          fontWeight: '500',
          margin: 0,
          color: isOpen ? 'var(--color-accent)' : 'inherit',
          transition: 'color 0.3s ease',
          textAlign: 'left'
        }}>
          {question}
        </h3>
        <ChevronDown
          size={20}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
            flexShrink: 0,
            color: 'var(--color-accent)'
          }}
        />
      </div>
      <div style={{
        maxHeight: isOpen ? '500px' : '0',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        opacity: isOpen ? 1 : 0
      }}>
        <p style={{
          marginTop: '15px',
          lineHeight: '1.7',
          color: 'var(--color-text-secondary)',
          fontSize: '0.95rem',
          textAlign: 'left'
        }}>
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is WanderMesh?",
      answer: "WanderMesh is a travel platform that curates unique, community-driven travel experiences. We design immersive trips that combine adventure, culture, and meaningful connections with like-minded travelers."
    },
    {
      question: "Who can join WanderMesh trips?",
      answer: "Anyone with a love for travel and new experiences can join. Whether you’re traveling solo, with friends, or as a couple, our trips are designed to be inclusive and welcoming."
    },
    {
      question: "Are your trips suitable for solo travelers?",
      answer: "Absolutely. A majority of our travelers join solo, and our group experiences are structured to help you connect easily and feel comfortable throughout the journey."
    },
    {
      question: "Why is WanderMesh invite-only?",
      answer: "WanderMesh is intentionally selective. We carefully curate every group to bring together people who share a similar mindset and curiosity for experiences. This creates an environment where the energy feels right, conversations come easily, and connections form in a natural, unforced way."
    },
    {
      question: "How is the WanderMesh experience different from regular trips?",
      answer: "WanderMesh is designed to go beyond typical travel. Each trip brings together a curated group of like-minded individuals, making connections feel natural and effortless. Where you stay is part of the experience, with thoughtfully chosen spaces that are immersive and aligned with the destination. Rather than following rigid itineraries or tourist checklists, we focus on creating meaningful moments you’ll remember long after the trip ends. Conversations flow organically, and through curated experiences like mixology and culinary sessions, you naturally learn and grow along the way."
    },
    {
      question: "What is your cancellation and refund policy?",
      answer: "Cancellation policies vary depending on the experience. Detailed terms will be shared at the time of booking, and we recommend reviewing them carefully before confirming."
    },
    {
      question: "Is it safe to travel with WanderMesh?",
      answer: "Yes. Your safety is our priority. We partner with trusted local vendors, ensure verified accommodations, and have trip coordinators available to assist you throughout the journey."
    },
    {
      question: "How can I contact WanderMesh?",
      answer: "You can reach us via email, the website form, or social media platforms like Instagram, LinkedIn, and WhatsApp. Our team is always happy to assist you."
    }
  ];

  return (
    <section className="faq-section" style={{ padding: '80px 0', background: '#fff' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <p className="section-label" style={{ textAlign: 'center', marginBottom: '10px' }}>FAQs</p>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
