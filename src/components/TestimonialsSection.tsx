import { useState } from 'react';

const testimonials = [
  {
    type: 'image',
    quote: "I've done group tours before, and they always felt rushed. With WanderMesh, I got a flexible plan that gave me freedom to stay longer in places I loved. I ended up spending two extra days in Ubud just because it felt right — no extra calls, no penalties, just pure freedom.",
    author: 'Ananya R., 25 – Bangalore',
  },
  {
    type: 'video',
    quote: "Most travel companies give you a printed schedule and expect you to stick to it. WanderMesh was different. I could swap activities on the go and explore hidden spots locals suggested. It felt like the trip was built around me, not the other way around.",
    author: 'Nisha D., 22 – Delhi',
  },
  {
    type: 'image',
    quote: "WanderMesh matched me with a trip vibe that was exactly what I wanted — chill mornings, adventure in the afternoon, and social evenings. It didn't feel like a package tour at all. I met other travelers who were on the same wavelength, and that made all the difference.",
    author: 'Rohan K., 28 – Pune',
  },
  {
    type: 'video',
    quote: "What stood out for me was how connected I felt — not just to the place, but to the people. From local meetups to expert chat groups, I was never alone, even while traveling solo. That sense of community is something I've never experienced with other platforms.",
    author: 'Aarav M., 31 – Mumbai',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="testimonials-section">
      <div className="container">
        <p className="section-label">Stories from the Mesh</p>
        <div className="testimonial-carousel">
          <button className="carousel-arrow carousel-arrow-left" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <div className="testimonial-slide">
            <div className="testimonial-split-card">
              <div className="testimonial-media">
                {t.type === 'image' ? (
                  <div className="testimonial-photo-placeholder">
                    <span>📷</span>
                    <p>Photo</p>
                  </div>
                ) : (
                  <div className="testimonial-reel-placeholder">
                    <span className="reel-play-icon">▶</span>
                    <p>Video Testimonial</p>
                  </div>
                )}
              </div>
              <div className="testimonial-text-side">
                <blockquote>"{t.quote}"</blockquote>
                <div className="testimonial-author">{t.author}</div>
              </div>
            </div>
          </div>
          <button className="carousel-arrow carousel-arrow-right" onClick={next} aria-label="Next">
            ›
          </button>
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === current ? 'active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
