import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';
import './Footer.css';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    ar: {
      aboutText: 'شركة رائدة في مجال زجاج السيارات مع أكثر من 20 عاماً من الخبرة في السوق السعودي',
      quickLinks: 'روابط سريعة',
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      branches: 'الفروع',
      gallery: 'معرض الصور',
      contact: 'اتصل بنا',
      contactInfo: 'معلومات الاتصال',
      phone: '٩٦٦٥٥٥٥٥٥٥٥٥+',
      email: 'info@alsalem.com',
      address: 'الرياض، المملكة العربية السعودية',
      hours: 'ساعات العمل',
      weekdays: 'السبت - الخميس: ٩ص - ٩م',
      friday: 'الجمعة: مغلق',
      socialMedia: 'وسائل التواصل',
      rights: 'جميع الحقوق محفوظة',
    },
    en: {
      aboutText: 'Leading auto glass company with over 20 years of experience in the Saudi market',
      quickLinks: 'Quick Links',
      home: 'Home',
      about: 'About Us',
      services: 'Services',
      branches: 'Branches',
      gallery: 'Gallery',
      contact: 'Contact Us',
      contactInfo: 'Contact Info',
      phone: '+966 55 555 5555',
      email: 'info@alsalem.com',
      address: 'Riyadh, Saudi Arabia',
      hours: 'Working Hours',
      weekdays: 'Saturday - Thursday: 9AM - 9PM',
      friday: 'Friday: Closed',
      socialMedia: 'Social Media',
      rights: 'All rights reserved',
    }
  };

  const t = content[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3>{t.about}</h3>
            <p className="footer-about">{t.aboutText}</p>
            <div className="social-links">
              <a href="/" className="social-link"><i className="fab fa-facebook-f"></i></a>
              <a href="/" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="/" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="/" className="social-link"><i className="fab fa-linkedin-in"></i></a>
              <a href="/" className="social-link"><i className="fab fa-youtube"></i></a>
            </div>
          </div>

          <div className="footer-section">
            <h3>{t.quickLinks}</h3>
            <ul className="footer-links">
              <li><Link to="/">{t.home}</Link></li>
              <li><Link to="/about">{t.about}</Link></li>
              <li><Link to="/services">{t.services}</Link></li>
              <li><Link to="/branches">{t.branches}</Link></li>
              <li><Link to="/gallery">{t.gallery}</Link></li>
              <li><Link to="/contact">{t.contact}</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t.contactInfo}</h3>
            <ul className="footer-contact">
              <li><i className="fas fa-phone"></i> {t.phone}</li>
              <li><i className="fas fa-envelope"></i> {t.email}</li>
              <li><i className="fas fa-map-marker-alt"></i> {t.address}</li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>{t.hours}</h3>
            <ul className="footer-hours">
              <li><i className="far fa-clock"></i> {t.weekdays}</li>
              <li><i className="far fa-clock"></i> {t.friday}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} AlSalem Auto Glass. {t.rights}.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;