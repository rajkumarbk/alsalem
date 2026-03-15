import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './Branches.css';

const Branches = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    ar: {
      title: 'فروعنا',
      subtitle: 'نخدمكم في ١٠ فروع منتشرة في جميع أنحاء المملكة',
      branch: 'فرع',
      call: 'اتصال',
      direction: 'الاتجاهات',
      hours: 'ساعات العمل:',
      satThu: 'السبت - الخميس: ٩ص - ٩م',
      fri: 'الجمعة: مغلق',
      phone: 'رقم الهاتف:'
    },
    en: {
      title: 'Our Branches',
      subtitle: 'Serving you through 10 branches across the kingdom',
      branch: 'Branch',
      call: 'Call',
      direction: 'Direction',
      hours: 'Working Hours:',
      satThu: 'Saturday - Thursday: 9AM - 9PM',
      fri: 'Friday: Closed',
      phone: 'Phone:'
    }
  };

  const t = content[language];

  const branches = Array.from({ length: 10 }, (_, i) => ({
    id: 101 + i,
    name: `${t.branch} ${101 + i}`,
    phone: `+966 5${String(50000000 + i).padStart(8, '0')}`,
    location: {
      ar: `الرياض، حي ${['النزهة', 'الربوة', 'الندوة', 'العليا', 'السليمانية', 'الملز', 'الشفا', 'البديعة', 'اليرموك', 'النسيم'][i]}`,
      en: `Riyadh, District ${['Al-Nuzhah', 'Al-Rabwah', 'Al-Nadwa', 'Olaya', 'Al-Sulaimaniyah', 'Al-Malaz', 'Al-Shifa', 'Al-Badiyah', 'Al-Yarmouk', 'Al-Naseem'][i]}`
    },
    openingHours: {
      weekdays: t.satThu,
      friday: t.fri
    },
    coordinates: {
      lat: 24.7136 + (i * 0.01),
      lng: 46.6753 + (i * 0.01)
    }
  }));

  return (
    <div className="branches-page">
      <section className="section branches-hero">
        <div className="container">
          <h1 className="section-title">{t.title}</h1>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section className="section branches-grid-section">
        <div className="container">
          <div className="branches-grid">
            {branches.map(branch => (
              <div key={branch.id} className="branch-card">
                <div className="branch-header">
                  <div className="branch-id">{branch.id}</div>
                  <h3 className="branch-name">{branch.name}</h3>
                </div>

                <div className="branch-content">
                  <div className="branch-info">
                    <div className="info-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <p>{branch.location[language]}</p>
                    </div>

                    <div className="info-item">
                      <i className="fas fa-phone"></i>
                      <p>{branch.phone}</p>
                    </div>

                    <div className="info-item hours">
                      <i className="fas fa-clock"></i>
                      <div className="hours-details">
                        <p>{branch.openingHours.weekdays}</p>
                        <p className="friday">{branch.openingHours.friday}</p>
                      </div>
                    </div>
                  </div>

                  <div className="branch-actions">
                    <a href={`tel:${branch.phone}`} className="action-btn call-btn">
                      <i className="fas fa-phone-alt"></i>
                      {t.call}
                    </a>
                    <a
                      href={`https://maps.google.com/?q=${branch.coordinates.lat},${branch.coordinates.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn direction-btn"
                    >
                      <i className="fas fa-directions"></i>
                      {t.direction}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Branches;