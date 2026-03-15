import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './Home.css';

const Home = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    ar: {
      heroTitle: 'السالم لإنجاح السيارة',
      heroSubtitle: 'خبرة وجودة في زجاج السيارات منذ أكثر من 20 عاماً',
      ctaButton: 'اتصل بنا الآن',
      servicesTitle: 'خدماتنا المتميزة',
      servicesSubtitle: 'نقدم أفضل خدمات زجاج السيارات في المملكة',
      features: [
        {
          title: 'جودة عالية',
          description: 'نستخدم أفضل أنواع الزجاج والمعايير العالمية'
        },
        {
          title: 'خدمة سريعة',
          description: 'فريق متخصص للتركيب خلال 24 ساعة'
        },
        {
          title: 'ضمان ممتد',
          description: 'ضمان يصل إلى 5 سنوات على جميع الخدمات'
        },
        {
          title: 'أسعار تنافسية',
          description: 'أفضل الأسعار مع عروض وحسومات مستمرة'
        }
      ],
      faqTitle: 'الأسئلة الشائعة',
      faqs: [
        {
          question: 'ما هي أنواع الزجاج المتوفرة؟',
          answer: 'نوفر جميع أنواع زجاج السيارات الأمامي والخلفي والجانبي لجميع الموديلات'
        },
        {
          question: 'كم يستغرق تركيب الزجاج؟',
          answer: 'يستغرق تركيب الزجاج من ساعة إلى ساعتين حسب نوع السيارة'
        },
        {
          question: 'هل توفرون خدمة التوصيل؟',
          answer: 'نعم، نوفر خدمة التوصيل والتركيب في الموقع'
        },
        {
          question: 'ما هي مدة الضمان؟',
          answer: 'نقدم ضماناً لمدة 5 سنوات على التركيب وسنة على الزجاج'
        }
      ]
    },
    en: {
      heroTitle: 'AlSalem Auto Glass',
      heroSubtitle: 'Experience and Quality in Auto Glass for Over 20 Years',
      ctaButton: 'Contact Us Now',
      servicesTitle: 'Our Premium Services',
      servicesSubtitle: 'We provide the best auto glass services in the kingdom',
      features: [
        {
          title: 'High Quality',
          description: 'We use the best glass types and international standards'
        },
        {
          title: 'Fast Service',
          description: 'Specialized team for installation within 24 hours'
        },
        {
          title: 'Extended Warranty',
          description: 'Up to 5 years warranty on all services'
        },
        {
          title: 'Competitive Prices',
          description: 'Best prices with continuous offers and discounts'
        }
      ],
      faqTitle: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'What types of glass are available?',
          answer: 'We provide all types of auto glass (front, rear, side) for all models'
        },
        {
          question: 'How long does glass installation take?',
          answer: 'Glass installation takes 1-2 hours depending on the car model'
        },
        {
          question: 'Do you provide delivery service?',
          answer: 'Yes, we provide delivery and on-site installation service'
        },
        {
          question: 'What is the warranty period?',
          answer: 'We provide 5 years warranty on installation and 1 year on glass'
        }
      ]
    }
  };

  const t = content[language];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          {/* <button className="btn btn-primary hero-btn">{t.ctaButton}</button> */}
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">{t.servicesTitle}</h2>
          <p className="section-subtitle">{t.servicesSubtitle}</p>

          <div className="features-grid">
            {t.features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={`fas fa-${index === 0 ? 'star' : index === 1 ? 'clock' : index === 2 ? 'shield-alt' : 'tag'}`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">{t.faqTitle}</h2>

          <div className="faq-grid">
            {t.faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <div className="faq-question">
                  <i className="fas fa-question-circle"></i>
                  <h3>{faq.question}</h3>
                </div>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;