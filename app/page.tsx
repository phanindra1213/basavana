'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/navbar';
import VachanaBox from '../components/VachanaBox';
import Image from 'next/image';

const EN_CONTENT = {
  header: 'Basavanna',
  subheader: 'Timeless Wisdom for the Modern Age',
  wisdomTitle: 'Wisdom in Motion',
  exploreButton: 'Explore More',
};

const KN_CONTENT = {
  header: 'ಬಸವಣ್ಣ',
  subheader: 'ಆಧುನಿಕ ಕಾಲದ ಶಾಶ್ವತ ಜ್ಞಾನ',
  wisdomTitle: 'ಚಲನೆಯಲ್ಲಿನ ಜ್ಞಾನ',
  exploreButton: 'ಮತ್ತಷ್ಟು ಅನ್ವೇಷಿಸಿ',
};

const HomePage: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'kn'>('en');
  const vachanaBoxRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: 'en' | 'kn') => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'en' | 'kn';
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  const content = currentLang === 'en' ? EN_CONTENT : KN_CONTENT;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-100 text-black relative">
      <div className="absolute inset-0 bg-grid-pattern z-0"></div>
      <div className="relative z-10">
        <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
        <main className="container mx-auto px-4 py-8 md:py-16">
          <section className="text-center mb-6 md:mb-8">
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{content.header}</h1>
            <p className="text-lg md:text-2xl mb-4">{content.subheader}</p>
          </section>
          <section className="relative w-full max-w-lg mx-auto my-6 md:my-12 perspective-1000">
            <motion.div
              className="relative w-full h-full"
              initial={{ rotateX: 0, rotateY: 0, rotateZ: 0 }}
              whileHover={{ rotateX: 10, rotateY: 10, rotateZ: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-600 via-white to-blue-400 opacity-80"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <Image
                  src="/images/3.jpg"
                  alt="Basavanna"
                  className="rounded-lg shadow-lg relative z-10 object-cover"
                  layout="responsive"
                  width={1000}  // Replace with your actual width
                  height={1000} // Replace with your actual height
                  priority={true}  // If this is a key image that should load quickly
                  />
            </motion.div>
          </section>
          <section className="text-center mb-8 md:mb-16 vachana-container" ref={vachanaBoxRef}>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">{content.wisdomTitle}</h2>
            <VachanaBox lang={currentLang} />
          </section>
          <section className="flex justify-center mb-8 md:mb-16">
            <motion.button
              className="bg-transparent border-2 border-black text-black font-bold py-2 px-6 md:py-3 md:px-8 rounded-full hover:bg-black hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop} // Scrolls to the top of the page
            >
              {content.exploreButton}
            </motion.button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
