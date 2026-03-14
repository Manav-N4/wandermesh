const images = Array.from({ length: 9 }, (_, i) => `/images/img${i + 1}.jpg`);

const GallerySection = () => (
  <section className="gallery-section">
    <div className="container">
      <p className="section-label">Gallery</p>
      <div className="gallery-masonry">
        {images.map((src, i) => (
          <div className={`gallery-item gallery-item-${i + 1}`} key={i}>
            <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
