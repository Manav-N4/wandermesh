const images = Array.from({ length: 9 }, (_, i) => `/images/${i + 1}.png`);

const GallerySection = () => {
  // Distribute images into 3 rows
  const row1 = [images[0], images[1], images[2]];
  const row2 = [images[3], images[4], images[5]];
  const row3 = [images[6], images[7], images[8]];

  return (
    <section className="gallery-section">
      <div className="container">
        <p className="section-label">Gallery</p>
        <div className="gallery-stream-wrapper">
          {/* Row 1 - scrolls left */}
          <div className="gallery-row gallery-row-1">
            <div className="gallery-stream scroll-left">
              {[...row1, ...row1].map((src, i) => (
                <div className="gallery-stream-item" key={i}>
                  <img src={src} alt={`Gallery ${i}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - scrolls right */}
          <div className="gallery-row gallery-row-2">
            <div className="gallery-stream scroll-right">
              {[...row2, ...row2].map((src, i) => (
                <div className="gallery-stream-item" key={i}>
                  <img src={src} alt={`Gallery ${i}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3 - scrolls left */}
          <div className="gallery-row gallery-row-3">
            <div className="gallery-stream scroll-left">
              {[...row3, ...row3].map((src, i) => (
                <div className="gallery-stream-item" key={i}>
                  <img src={src} alt={`Gallery ${i}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
