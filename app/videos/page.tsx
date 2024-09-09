'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/navbar'; 
import VideoGallery from '../../components/VideoGallery';


const Videos: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'kn'>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as 'en' | 'kn';
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  const changeLanguage = (lang: 'en' | 'kn') => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
  };

  const isEnglish = currentLang === 'en';
  const headingText = isEnglish ? "Basavanna's Videos" : "ಬಸವಣ್ಣನ ವಿಡಿಯೋಗಳು";

  return (
    <div>
      <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
      <div className="bg-gradient-to-r from-white via-blue-100 to-white min-h-screen flex flex-col items-center justify-center py-5 px-5">
      <h1 className="text-4xl font-bold mb-8 text-blue-500">{headingText}</h1>
        <VideoGallery />
      </div>
    </div>
  );
};

export default Videos;
