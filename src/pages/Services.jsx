import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './Services.css';

const Services = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    ar: {
      title: 'خدماتنا',
      subtitle: 'نقدم مجموعة متكاملة من خدمات الزجاج للسيارات',
      services: [
        {
          title: 'تركيب الزجاج الأمامي',
          icon: 'car',
          features: [
            'تركيب زجاج أمامي أصلي',
            'معايرة حساسات المطر',
            'اختبار جودة التركيب',
            'ضمان ٥ سنوات',
            'خدمة منزلية'
          ],
          price: 'يبدأ من ٥٠٠ ريال'
        },
        {
          title: 'تركيب الزجاج الخلفي',
          icon: 'car-side',
          features: [
            'زجاج خلفي مع سخانات',
            'تركيب حساسات خلفية',
            'معايرة الكاميرا الخلفية',
            'ضمان ٣ سنوات',
            'تركيب خلال ساعتين'
          ],
          price: 'يبدأ من ٤٠٠ ريال'
        },
        {
          title: 'زجاج جانبي',
          icon: 'car',
          features: [
            'زجاج جانبي كهربائي',
            'تركيب محركات',
            'عازل للصوت والحرارة',
            'ضمان سنتين',
            'جميع الموديلات'
          ],
          price: 'يبدأ من ٢٥٠ ريال'
        },
        {
          title: 'إصلاح التشققات',
          icon: 'tools',
          features: [
            'إصلاح جميع أنواع التشققات',
            'تقنية حديثة',
            'نتيجة خلال ساعة',
            'ضمان على الإصلاح',
            'تكلفة منخفضة'
          ],
          price: 'يبدأ من ١٥٠ ريال'
        },
        {
          title: 'تظليل زجاج',
          icon: 'sun',
          features: [
            'تظليل احترافي',
            'عزل حراري عالي',
            'حماية من الأشعة',
            'مقاوم للخدش',
            'ضمان ٣ سنوات'
          ],
          price: 'يبدأ من ٣٠٠ ريال'
        },
        {
          title: 'زجاج مرايا',
          icon: 'car',
          features: [
            'مرايا كهربائية',
            'مرايا ضد التوهج',
            'إشارات مرايا',
            'تركيب سريع',
            'ضمان سنتين'
          ],
          price: 'يبدأ من ٢٠٠ ريال'
        }
      ]
    },
    en: {
      title: 'Our Services',
      subtitle: 'We offer a complete range of auto glass services',
      services: [
        {
          title: 'Windshield Installation',
          icon: 'car',
          features: [
            'Original windshield installation',
            'Rain sensor calibration',
            'Installation quality test',
            '5 years warranty',
            'Home service available'
          ],
        },
        {
          title: 'Rear Glass Installation',
          icon: 'car-side',
          features: [
            'Rear glass with defroster',
            'Rear sensors installation',
            'Rear camera calibration',
            '3 years warranty',
            'Installation within 2 hours'
          ],
        },
        {
          title: 'Side Glass',
          icon: 'car',
          features: [
            'Power window glass',
            'Motor installation',
            'Sound and heat insulation',
            '2 years warranty',
            'All models available'
          ],
        },
        {
          title: 'Crack Repair',
          icon: 'tools',
          features: [
            'All types of cracks repair',
            'Modern technology',
            'Results within 1 hour',
            'Repair warranty',
            'Low cost'
          ],
        },
        {
          title: 'Window Tinting',
          icon: 'sun',
          features: [
            'Professional tinting',
            'High heat insulation',
            'UV protection',
            'Scratch resistant',
            '3 years warranty'
          ],
        },
        {
          title: 'Mirror Glass',
          icon: 'car',
          features: [
            'Power mirrors',
            'Anti-glare mirrors',
            'Mirror signals',
            'Quick installation',
            '2 years warranty'
          ],
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="services-page">
      <section className="section services-hero">
        <div className="container">
          <h1 className="section-title">{t.title}</h1>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section className="section services-grid-section">
        <div className="container">
          <div className="services-grid">
            {t.services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-header">
                  <div className="service-icon">
                    <i className={`fas fa-${service.icon}`}></i>
                  </div>
                  <h3>{service.title}</h3>
                </div>

                <div className="service-content">
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="fas fa-check-circle"></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* <div className="service-footer">
                    <div className="service-price">
                      <span className="price-label">
                        {language === 'ar' ? 'السعر' : 'Price'}:
                      </span>
                      <span className="price-value">{service.price}</span>
                    </div>
                    <button className="service-btn">
                      {language === 'ar' ? 'احجز الآن' : 'Book Now'}
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;