const images = [
  '/images/1.JPG',
  '/images/2.JPG',
  '/images/3.JPG',
  '/images/4.JPG',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
  '/images/9.jpg',
];

const GallerySection = () => {
  return (
    <section className="gallery-section">
      <div className="container">
        <p className="section-label">Gallery</p>
        <div className="gallery-static-grid">
          {images.map((src, i) => (
            <div className="gallery-static-item" key={i}>
              <img src={src} alt={`Gallery ${i}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
