'use client'

import React, { useState, useEffect } from 'react';
import QuoteBox from './QuoteBox';
import Navbar from '../../components/navbar'; // Adjust the import path if needed
import { englishVachana } from '../language/englishVachana';
import { kannadaVachana } from '../language/kannadavachana';

const Vachana: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<'en' | 'kn'>('en'); // Define the state with specific types

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('language') as 'en' | 'kn'; // Type assertion
    if (savedLang) {
      setCurrentLang(savedLang);
    }
  }, []);

  const changeLanguage = (lang: 'en' | 'kn') => { // Define the argument type
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
  };

  const isEnglish = currentLang === 'en';
  const vachanaContent = isEnglish ? englishVachana : kannadaVachana;
  const headingText = isEnglish ? "Basavanna's Vachanas" : "ಬಸವಣ್ಣನ ವಚನಗಳು";

  return (
    <div>
      <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
      <div className="bg-gradient-to-r from-white via-blue-100 to-white min-h-screen flex flex-col items-center justify-center py-5 px-5 ">
        <h1 className="text-4xl font-bold mb-8 text-blue-500">{headingText}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vachanaContent.map((quote, index) => (
            <QuoteBox key={index} quote={quote} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vachana;
