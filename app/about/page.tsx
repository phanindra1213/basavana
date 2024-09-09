'use client'
import { useState, useEffect } from 'react';
import Navbar from '../../components/navbar'; // Adjust import path if necessary
import Image from 'next/image';
import { basavaEnglishIntro, basavaKannadaIntro, translations } from '../language/about';
import { statsEnglish, statsKannada } from '../language/about';

export default function Introduction() {
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
  const introContent = isEnglish ? basavaEnglishIntro : basavaKannadaIntro;
  const statsToDisplay = isEnglish ? statsEnglish : statsKannada;

  const workIsWorship = translations.workIsWorship[isEnglish ? 'english' : 'kannada'];
  const reformer = translations.reformer[isEnglish ? 'english' : 'kannada'];
  const basava = translations.basava[isEnglish ? 'english' : 'kannada'];

  return (
    <div className="bg-gradient-to-r from-white via-blue-100 to-white min-h-screen w-full flex flex-col">
      <Navbar currentLang={currentLang} changeLanguage={changeLanguage} /> {/* Pass the props here */}
      <div className="flex-grow py-10 sm:py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="relative lg:pr-8 mt-12 w-full">
              {/* Image section */}
              <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-96 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                <Image
                  className="absolute inset-0 object-cover brightness-125 saturate-0"
                  height={700}
                  width={700}
                  src="/images/about.jpg"
                  alt="Basavanna"
                />
                <div className="absolute inset-0 bg-gray-700 mix-blend-multiply opacity-75 hover:opacity-100 transition-opacity duration-300" />
                <div
                  className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                    style={{
                      clipPath:
                        "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                  />
                </div>
                <figure className="relative isolate">
                  <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                    <p>{workIsWorship}</p>
                  </blockquote>
                  <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                    <strong className="font-semibold text-white">
                      {basava}
                    </strong>{" "}
                    {reformer}
                  </figcaption>
                </figure>
              </div>
              {/* Stats section */}
              <div className="flex justify-center mt-10">
                <dl className="grid grid-cols-2 gap-4 max-w-lg w-full">
                  {statsToDisplay.map((stat, statIdx) => (
                    <div key={statIdx} className="bg-white p-3 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 w-full">
                      <dt className="text-sm font-semibold text-blue-400">{stat.label}</dt>
                      <dd className="mt-2 text-lg font-bold text-gray-800">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg text-balance">
                <h1 className="mt-8 text-3xl font-bold tracking-tight text-blue-500 sm:text-4xl">
                  {isEnglish ? 'WORK IS WORSHIP' : 'ಕಾಯಕವೇ ಕೈಲಾಸ'}
                </h1>
                <div className="max-w-xl text-black">
                  {introContent.map((element, index) => (
                    <p key={index} className="mt-6 text-justify">
                      {element}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
