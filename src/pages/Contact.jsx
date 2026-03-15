import React, { useContext } from 'react';
import { LanguageContext } from '../App';
import './Contact.css';

const Contact = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    ar: {
      title: 'اتصل بنا',
      subtitle: 'نحن هنا لمساعدتك على مدار الساعة',
      form: {
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        phone: 'رقم الجوال',
        message: 'الرسالة',
        branch: 'اختر الفرع',
        send: 'إرسال الرسالة',
        success: 'تم إرسال الرسالة بنجاح'
      },
      contactInfo: 'معلومات الاتصال',
      phone: 'هاتف',
      email: 'بريد إلكتروني',
      address: 'العنوان',
      socialMedia: 'وسائل التواصل',
      branches: 'فروعنا',
      mainBranch: 'الفرع الرئيسي'
    },
    en: {
      title: 'Contact Us',
      subtitle: "We're here to help you 24/7",
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone Number',
        message: 'Message',
        branch: 'Select Branch',
        send: 'Send Message',
        success: 'Message sent successfully'
      },
      contactInfo: 'Contact Information',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      socialMedia: 'Social Media',
      branches: 'Our Branches',
      mainBranch: 'Main Branch'
    }
  };

  const t = content[language];

  const branches = Array.from({ length: 10 }, (_, i) => ({
    id: 101 + i,
    name: `${language === 'ar' ? 'فرع' : 'Branch'} ${101 + i}`
  }));

  return (
    <div className="contact-page">
      <section className="section contact-hero">
        <div className="container">
          <h1 className="section-title">{t.title}</h1>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>{t.title}</h2>
              <form
                className="contact-form"
                action="https://formsubmit.co/rajkumarbk100@gmail.com"
                method="POST"
              >
                {/* Important: Prevents spam */}
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="box" />
                <input type="hidden" name="_subject" value="New Contact from AlSalem Website" />
                <input
                  type="hidden"
                  name="_next"
                  value={`https://test.watamglass.com/thank-you?lang=${language}`}
                />
                <input type="hidden" name="language" value={language} />

                {/* Honeypot to prevent spam */}
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div className="form-group">
                  <input
                    type="text"
                    name="name"  // Added name attribute
                    placeholder={t.form.name}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"  // Added name attribute
                    placeholder={t.form.email}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"  // Added name attribute
                    placeholder={t.form.phone}
                    required
                  />
                </div>

                <div className="form-group">
                  <select
                    name="branch"  // Added name attribute
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>{t.form.branch}</option>
                    {branches.map(branch => (
                      <option key={branch.id} value={branch.id}>
                        {branch.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"  // Added name attribute
                    rows="5"
                    placeholder={t.form.message}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn">
                  {t.form.send}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-wrapper">
              <div className="contact-info-card">
                <h3>{t.contactInfo}</h3>

                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-phone-alt"></i>
                    </div>
                    <div className="info-details">
                      <span className="info-label">{t.phone}</span>
                      <span className="info-value">+966 55 555 5555</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="info-details">
                      <span className="info-label">{t.email}</span>
                      <span className="info-value">info@alsalem.com</span>
                    </div>
                  </div>

                  <div className="info-item">
                    <div className="info-icon">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div className="info-details">
                      <span className="info-label">{t.address}</span>
                      <span className="info-value">
                        {language === 'ar'
                          ? 'الرياض، المملكة العربية السعودية'
                          : 'Riyadh, Saudi Arabia'
                        }
                      </span>
                    </div>
                  </div>
                </div>

                <div className="contact-social">
                  <h4>{t.socialMedia}</h4>
                  <div className="social-icons">
                    <a href="/" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                    <a href="/" className="social-icon"><i className="fab fa-twitter"></i></a>
                    <a href="/" className="social-icon"><i className="fab fa-instagram"></i></a>
                    <a href="/" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
                    <a href="/" className="social-icon"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="map-container">
                <iframe
                  title="AlSalem Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231900.5525337781!2d46.616670249999996!3d24.7135517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48999f%3A0xba974d1c6c8f7f8a!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;