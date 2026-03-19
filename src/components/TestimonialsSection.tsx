import { useState, useRef, useEffect } from 'react';

const testimonials = [
  {
    type: 'video',
    quote: "I joined my first solo trip through WanderMesh thinking I'd mostly be on my own, but within hours it felt like a small community. From beachside sundowners to celebrating a new friend's birthday, the entire experience felt magical.",
    author: '~ Richa, Mumbai',
    videoUrl: '/videos/richa-testimonial.mp4',
  },
  {
    type: 'video',
    quote: "What started as my first solo trip with WanderMesh quickly turned into a trip with friends. Between the luxury villa stays, the yacht party, and exploring Goa together, every moment felt special.",
    author: '~ Vandana, Bangalore',
    videoUrl: '/videos/vandana-testimonial.mp4',
  },
  {
    type: 'video',
    quote: "As a solo female traveler, feeling safe matters a lot. With WanderMesh I could simply enjoy the journey. Watching the sunset during a sundowner in the dunes and sharing the experience with people who quickly became friends was truly special.",
    author: '~ Hitakshi, Delhi',
    videoUrl: '/videos/hitakshi-testimonial.mp4',
  },
  {
    type: 'video',
    quote: "Sometimes we still talk about the Goa trip and wonder how it all happened in just a few days. Beautiful villas, sunset DJ parties, kayaking, scooty rides, and a yacht party that felt straight out of a movie.",
    author: '~ Chakit & Shikha, Mumbai',
    videoUrl: '/videos/chakit-shikha-testimonial.mp4',
  },
  {
    type: 'video',
    quote: "I almost overthought my way out of booking the trip, but my first solo experience with WanderMesh turned out to be incredible. From kayaking and beach hopping to spa time and a sunset yacht party, it completely changed how I see solo travel.",
    author: '~ Simran, Bangalore',
    videoUrl: '/videos/simran-testimonial.mp4',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  // Pause video when testimonial changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [current]);

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
                    {t.videoUrl ? (
                      <video
                        key={`video-${current}`}
                        ref={videoRef}
                        width="120%"
                        height="120%"
                        controls
                        autoPlay
                        muted
                        loop
                        style={{ borderRadius: '12px', objectFit: 'cover' }}
                      >
                        <source src={t.videoUrl} type="video/mp4" />
                        Your browser does not support the video.
                      </video>
                    ) : (
                      <>
                        <span className="reel-play-icon">▶</span>
                        <p>Video Testimonial</p>
                      </>
                    )}
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
