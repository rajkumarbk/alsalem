import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LanguageContext } from '../App';
import './Navbar.css';
import logo from '../assets/images/header.jpeg';

<img src={logo} alt="AlSalem Logo" className="logo-img" />

const Navbar = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const content = {
    ar: {
      //   logo: 'السالم لإنجاح السيارة',
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      branches: 'الفروع',
      gallery: 'معرض الصور',
      contact: 'اتصل بنا',
      switchTo: 'English'
    },
    en: {
      //   logo: 'AlSalem Auto Glass',
      home: 'Home',
      about: 'About',
      services: 'Services',
      branches: 'Branches',
      gallery: 'Gallery',
      contact: 'Contact',
      switchTo: 'العربية'
    }
  };

  const t = content[language];

  const navLinks = [
    { path: '/', label: t.home },
    { path: '/about', label: t.about },
    { path: '/services', label: t.services },
    { path: '/branches', label: t.branches },
    { path: '/gallery', label: t.gallery },
    { path: '/contact', label: t.contact }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <div className="logo-wrapper">
            <img src={logo} alt="AlSalem Logo" className="logo-img" />
            <span className="logo-text">{t.logo}</span>
          </div>
        </Link>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <i className="fas fa-times"></i>
          ) : (
            <>
              <span></span>
              <span></span>
              <span></span>
            </>
          )}
        </button>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <button className="lang-switch" onClick={toggleLanguage}>
            {t.switchTo}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;