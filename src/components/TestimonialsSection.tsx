const testimonials = [
  {
    quote: "I've done group tours before, and they always felt rushed. With WanderMesh, I got a flexible plan that gave me freedom to stay longer in places I loved. I ended up spending two extra days in Ubud just because it felt right — no extra calls, no penalties, just pure freedom.",
    author: 'Ananya R., 25 – Bangalore',
  },
  {
    quote: "Most travel companies give you a printed schedule and expect you to stick to it. WanderMesh was different. I could swap activities on the go and explore hidden spots locals suggested. It felt like the trip was built around me, not the other way around.",
    author: 'Nisha D., 22 – Delhi',
  },
  {
    quote: "WanderMesh matched me with a trip vibe that was exactly what I wanted — chill mornings, adventure in the afternoon, and social evenings. It didn't feel like a package tour at all. I met other travelers who were on the same wavelength, and that made all the difference.",
    author: 'Rohan K., 28 – Pune',
  },
  {
    quote: "What stood out for me was how connected I felt — not just to the place, but to the people. From local meetups to expert chat groups, I was never alone, even while traveling solo. That sense of community is something I've never experienced with other platforms.",
    author: 'Aarav M., 31 – Mumbai',
  },
];

const TestimonialsSection = () => (
  <section className="testimonials-section">
    <div className="container">
      <p className="section-label">Stories from the Mesh</p>
      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div className="testimonial-card" key={i}>
            <blockquote>"{t.quote}"</blockquote>
            <div className="testimonial-author">{t.author}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
