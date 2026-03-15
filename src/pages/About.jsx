import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './About.css';

const About = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    ar: {
      title: 'من نحن',
      subtitle: 'نحو مستقبل أكثر أماناً لسيارتك',
      story: {
        title: 'قصتنا',
        content: 'تأسست شركة السالم لإنجاح السيارة عام 2000، ومنذ ذلك الحين ونحن نقدم أفضل خدمات زجاج السيارات في المملكة العربية السعودية. بدأنا كورشة صغيرة في الرياض واليوم لدينا 10 فروع في جميع أنحاء المملكة.'
      },
      mission: {
        title: 'رسالتنا',
        content: 'تقديم أفضل خدمات زجاج السيارات بجودة عالية وأسعار تنافسية، مع ضمان رضا العملاء وسلامتهم.'
      },
      vision: {
        title: 'رؤيتنا',
        content: 'أن نكون الخيار الأول لخدمات زجاج السيارات في المملكة والمنطقة، من خلال الابتكار المستمر وتطوير الخدمات.'
      },
      values: {
        title: 'قيمنا',
        list: [
          'الجودة: نستخدم أفضل المواد والتقنيات',
          'النزاهة: نتعامل بصدق وشفافية مع عملائنا',
          'الابتكار: نواكب أحدث التطورات في المجال',
          'الاحترافية: فريق عمل مدرب ومؤهل'
        ]
      },
      stats: {
        years: 'سنوات خبرة',
        branches: 'فرع',
        clients: 'عميل',
        technicians: 'فني'
      }
    },
    en: {
      title: 'About Us',
      subtitle: 'Towards a safer future for your car',
      story: {
        title: 'Our Story',
        content: 'AlSalem Auto Glass was established in 2000, and since then we have been providing the best auto glass services in Saudi Arabia. We started as a small workshop in Riyadh and today we have 10 branches across the kingdom.'
      },
      mission: {
        title: 'Our Mission',
        content: 'Providing the best auto glass services with high quality and competitive prices, ensuring customer satisfaction and safety.'
      },
      vision: {
        title: 'Our Vision',
        content: 'To be the first choice for auto glass services in the kingdom and the region, through continuous innovation and service development.'
      },
      values: {
        title: 'Our Values',
        list: [
          'Quality: We use the best materials and techniques',
          'Integrity: We deal honestly and transparently with our customers',
          'Innovation: We keep up with the latest developments in the field',
          'Professionalism: Trained and qualified team'
        ]
      },
      stats: {
        years: 'Years Experience',
        branches: 'Branches',
        clients: 'Clients',
        technicians: 'Technicians'
      }
    }
  };

  const t = content[language];

  return (
    <div className="about-page">
      <section className="section about-hero">
        <div className="container">
          <h1 className="section-title">{t.title}</h1>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section className="section story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>{t.story.title}</h2>
              <p>{t.story.content}</p>
            </div>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      <section className="section mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card mission">
              <i className="fas fa-bullseye"></i>
              <h3>{t.mission.title}</h3>
              <p>{t.mission.content}</p>
            </div>
            <div className="mv-card vision">
              <i className="fas fa-eye"></i>
              <h3>{t.vision.title}</h3>
              <p>{t.vision.content}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <h2 className="section-title centered">{t.values.title}</h2>
          <div className="values-grid">
            {t.values.list.map((value, index) => (
              <div key={index} className="value-item">
                <div className="value-icon">
                  <i className={`fas fa-${index === 0 ? 'star' : index === 1 ? 'handshake' : index === 2 ? 'lightbulb' : 'users'}`}></i>
                </div>
                <p>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">{t.stats.years}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10</span>
              <span className="stat-label">{t.stats.branches}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50k+</span>
              <span className="stat-label">{t.stats.clients}</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">{t.stats.technicians}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;