import { useState, createContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Branches from './pages/Branches';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ThankYou from './pages/ThankYou';
import './App.css';

export const LanguageContext = createContext();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [language, setLanguage] = useState(
    () => localStorage.getItem('lang') || 'ar'  // restore on reload
  );

  const toggleLanguage = () => {
    setLanguage(prevLang => {
      const newLang = prevLang === 'ar' ? 'en' : 'ar';
      localStorage.setItem('lang', newLang);  // save on every toggle
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <Router>
        <ScrollToTop />
        <div className={`app ${language === 'ar' ? 'rtl' : 'ltr'}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/thank-you" element={<ThankYou />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
}
export default App;