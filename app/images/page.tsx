'use client'
// ./app/images/page.tsx
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar'; // Adjust the import path as necessary
import Gallery from '../../components/Gallery'; // Assuming you have a Gallery component

const Page = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'kn'>('en');

  const changeLanguage = (lang: 'en' | 'kn') => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang); // Save language preference
  };

  useEffect(() => {
    // Load the saved language preference from localStorage
    const savedLang = localStorage.getItem('language') as 'en' | 'kn';
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  return (
    <div>
      <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
      <Gallery />
    </div>
  );
};

export default Page;
