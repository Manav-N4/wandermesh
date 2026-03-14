import { useState } from 'react';

const testimonials = [
  {
    type: 'text',
    quote: "I've done group tours before, and they always felt rushed. With WanderMesh, I got a flexible plan that gave me freedom to stay longer in places I loved. I ended up spending two extra days in Ubud just because it felt right — no extra calls, no penalties, just pure freedom.",
    author: 'Ananya R., 25 – Bangalore',
    image: null,
  },
  {
    type: 'video',
    quote: '',
    author: 'Video Testimonial',
    videoPlaceholder: true,
  },
  {
    type: 'text',
    quote: "WanderMesh matched me with a trip vibe that was exactly what I wanted — chill mornings, adventure in the afternoon, and social evenings. It didn't feel like a package tour at all. I met other travelers who were on the same wavelength, and that made all the difference.",
    author: 'Rohan K., 28 – Pune',
    image: null,
  },
  {
    type: 'video',
    quote: '',
    author: 'Video Testimonial',
    videoPlaceholder: true,
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
            {t.type === 'text' ? (
              <div className="testimonial-card">
                <div className="testimonial-user-img">
                  <div className="testimonial-img-placeholder">Photo</div>
                </div>
                <blockquote>"{t.quote}"</blockquote>
                <div className="testimonial-author">{t.author}</div>
              </div>
            ) : (
              <div className="testimonial-card testimonial-video-card">
                <div className="testimonial-video-placeholder">
                  <span>▶</span>
                  <p>Video Testimonial</p>
                </div>
                <div className="testimonial-author">{t.author}</div>
              </div>
            )}
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
