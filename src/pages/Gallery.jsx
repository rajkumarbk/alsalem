import React, { useState, useContext } from 'react';
import { LanguageContext } from '../App';
import './Gallery.css';

const Gallery = () => {
  const { language } = useContext(LanguageContext);
  const [activeBranch, setActiveBranch] = useState(101);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const content = {
    ar: {
      title: 'معرض الصور',
      subtitle: 'تصفح صور أعمالنا في جميع الفروع',
      allBranches: 'جميع الفروع',
      branch: 'فرع',
      noImages: 'لا توجد صور لهذا الفرع حالياً'
    },
    en: {
      title: 'Photo Gallery',
      subtitle: 'Browse our work photos across all branches',
      allBranches: 'All Branches',
      branch: 'Branch',
      noImages: 'No images available for this branch yet'
    }
  };

  const t = content[language];

  const branches = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110];

  const galleryImages = {
    101: [
      { id: 1, url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600", title: { ar: "صورة 1 للفرع 101", en: "Image 1 for Branch 101" }, branch: 101 },
      { id: 2, url: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600", title: { ar: "صورة 2 للفرع 101", en: "Image 2 for Branch 101" }, branch: 101 },
      { id: 3, url: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=600", title: { ar: "صورة 3 للفرع 101", en: "Image 3 for Branch 101" }, branch: 101 }
    ],
    102: [
      { id: 1, url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600", title: { ar: "صورة 1 للفرع 102", en: "Image 1 for Branch 102" }, branch: 102 },
      { id: 2, url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600", title: { ar: "صورة 2 للفرع 102", en: "Image 2 for Branch 102" }, branch: 102 },
      { id: 3, url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600", title: { ar: "صورة 3 للفرع 102", en: "Image 3 for Branch 102" }, branch: 102 }
    ],
    103: [
      { id: 1, url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600", title: { ar: "صورة 1 للفرع 103", en: "Image 1 for Branch 103" }, branch: 103 },
      { id: 2, url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600", title: { ar: "صورة 2 للفرع 103", en: "Image 2 for Branch 103" }, branch: 103 },
      { id: 3, url: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600", title: { ar: "صورة 3 للفرع 103", en: "Image 3 for Branch 103" }, branch: 103 }
    ],
    104: [
      { id: 1, url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600", title: { ar: "صورة 1 للفرع 104", en: "Image 1 for Branch 104" }, branch: 104 },
      { id: 2, url: "https://images.unsplash.com/photo-1581092919535-7146ff1a5904?w=600", title: { ar: "صورة 2 للفرع 104", en: "Image 2 for Branch 104" }, branch: 104 },
      { id: 3, url: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600", title: { ar: "صورة 3 للفرع 104", en: "Image 3 for Branch 104" }, branch: 104 }
    ],
    105: [
      { id: 1, url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600", title: { ar: "صورة 1 للفرع 105", en: "Image 1 for Branch 105" }, branch: 105 },
      { id: 2, url: "https://images.unsplash.com/photo-1590859808308-3d2d9c515b1a?w=600", title: { ar: "صورة 2 للفرع 105", en: "Image 2 for Branch 105" }, branch: 105 },
      { id: 3, url: "https://images.unsplash.com/photo-1541976590-713941681591?w=600", title: { ar: "صورة 3 للفرع 105", en: "Image 3 for Branch 105" }, branch: 105 }
    ],
    106: [
      { id: 1, url: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600", title: { ar: "صورة 1 للفرع 106", en: "Image 1 for Branch 106" }, branch: 106 },
      { id: 2, url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600", title: { ar: "صورة 2 للفرع 106", en: "Image 2 for Branch 106" }, branch: 106 },
      { id: 3, url: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600", title: { ar: "صورة 3 للفرع 106", en: "Image 3 for Branch 106" }, branch: 106 }
    ],
    107: [
      { id: 1, url: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600", title: { ar: "صورة 1 للفرع 107", en: "Image 1 for Branch 107" }, branch: 107 },
      { id: 2, url: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600", title: { ar: "صورة 2 للفرع 107", en: "Image 2 for Branch 107" }, branch: 107 },
      { id: 3, url: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=600", title: { ar: "صورة 3 للفرع 107", en: "Image 3 for Branch 107" }, branch: 107 }
    ],
    108: [
      { id: 1, url: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600", title: { ar: "صورة 1 للفرع 108", en: "Image 1 for Branch 108" }, branch: 108 },
      { id: 2, url: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600", title: { ar: "صورة 2 للفرع 108", en: "Image 2 for Branch 108" }, branch: 108 },
      { id: 3, url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600", title: { ar: "صورة 3 للفرع 108", en: "Image 3 for Branch 108" }, branch: 108 }
    ],
    109: [
      { id: 1, url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600", title: { ar: "صورة 1 للفرع 109", en: "Image 1 for Branch 109" }, branch: 109 },
      { id: 2, url: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600", title: { ar: "صورة 2 للفرع 109", en: "Image 2 for Branch 109" }, branch: 109 },
      { id: 3, url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600", title: { ar: "صورة 3 للفرع 109", en: "Image 3 for Branch 109" }, branch: 109 }
    ],
    110: [
      { id: 1, url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600", title: { ar: "صورة 1 للفرع 110", en: "Image 1 for Branch 110" }, branch: 110 },
      { id: 2, url: "https://images.unsplash.com/photo-1590650046871-92c887180603?w=600", title: { ar: "صورة 2 للفرع 110", en: "Image 2 for Branch 110" }, branch: 110 },
      { id: 3, url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600", title: { ar: "صورة 3 للفرع 110", en: "Image 3 for Branch 110" }, branch: 110 }
    ]
  };

  const activeImages = galleryImages[activeBranch] || [];

  const openImage = (index) => {
    setCurrentIndex(index);
    setSelectedImage(activeImages[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % activeImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(activeImages[newIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + activeImages.length) % activeImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(activeImages[newIndex]);
  };

  return (
    <div className="gallery-page">
      <section className="section gallery-hero">
        <div className="container">
          <h1 className="section-title">{t.title}</h1>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">

          <div className="branch-tabs">
            {branches.map(branchId => (
              <button
                key={branchId}
                className={`tab-btn ${activeBranch === branchId ? 'active' : ''}`}
                onClick={() => setActiveBranch(branchId)}
              >
                {t.branch} {branchId}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {activeImages.length > 0 ? (
              activeImages.map((image, index) => (
                <div
                  key={image.id}
                  className="gallery-item"
                  onClick={() => openImage(index)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="gallery-image-wrapper">
                    <img src={image.url} alt={image.title[language]} />
                    <div className="gallery-overlay">
                      <div className="overlay-content">
                        <h3>{image.title[language]}</h3>
                        <p>{t.branch} {image.branch}</p>
                        <button className="view-btn">
                          <i className="fas fa-search-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="no-images">
                <i className="fas fa-images"></i>
                <p>{t.noImages}</p>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-modal" onClick={closeImage}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeImage}>
              <i className="fas fa-times"></i>
            </button>

            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="lightbox-image-container">
              <img
                src={selectedImage.url.replace('w=600', 'w=1200')}
                alt={selectedImage.title[language]}
              />
              <div className="lightbox-caption">
                <h3>{selectedImage.title[language]}</h3>
                <p>{t.branch} {selectedImage.branch}</p>
              </div>
            </div>

            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              <i className="fas fa-chevron-right"></i>
            </button>

            <div className="lightbox-counter">
              {currentIndex + 1} / {activeImages.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;