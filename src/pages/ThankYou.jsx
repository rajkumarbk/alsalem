import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../App';

const ThankYou = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    ar: {
      title: 'شكراً لك!',
      message: 'تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',
      returnHome: 'العودة إلى الرئيسية',
    },
    en: {
      title: 'Thank You!',
      message: "Your message has been sent successfully. We'll get back to you soon.",
      returnHome: 'Return to Home',
    },
  };

  const t = content[language];

  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>{t.title}</h1>
      <p>{t.message}</p>
      <Link to="/">{t.returnHome}</Link>
    </div>
  );
};

export default ThankYou;