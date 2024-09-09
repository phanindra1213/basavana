'use client';
import { FcGlobe } from "react-icons/fc";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

// Define the languages
const languages = {
  en: { name: 'English', code: 'en' },
  kn: { name: 'ಕನ್ನಡ', code: 'kn' } // Kannada
};

// Sample translations
const translations = {
  en: {
    about: 'About',
    images: 'Images',
    vachanas: 'Vachanas',
    videos: 'Videos',
  },
  kn: {
    about: 'ಬಗ್ಗೆ',
    images: 'ಚಿತ್ರಗಳು',
    vachanas: 'ವಚನಗಳು',
    videos: 'ವಿಡಿಯೋಗಳು',
  },
};

// Define a type for page names
type Page = 'about' | 'images' | 'vachanas' | 'videos';

// Define types for Navbar props
interface NavbarProps {
  currentLang: 'en' | 'kn';
  changeLanguage: (lang: 'en' | 'kn') => void;
}

export default function Navbar({ currentLang, changeLanguage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<Page | null>(null);

  useEffect(() => {
    // Check localStorage for saved language preference
    const savedLang = localStorage.getItem('language') as 'en' | 'kn';
    if (savedLang) {
      changeLanguage(savedLang);
    }
  }, [changeLanguage]);

  return (
    <header className="bg-white w-full">
      <nav className="mx-auto flex items-center justify-between p-4 lg:px-6 shadow-md w-full" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image width={35} height={35} src="/logo.png" alt="Logo" />
          </a>
        </div>
        <div className="hidden lg:flex lg:gap-x-11 space-x-4">
          {(Object.keys(translations.en) as Page[]).map((page) => (
            <a
              key={page}
              href={`/${page}`}
              onMouseEnter={() => setHoveredLink(page)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`relative text-lg font-semibold leading-6 text-black apple-font border-2 border-transparent rounded-full px-4 py-2 transition-transform duration-300 transform ${
                hoveredLink === page ? 'bg-blue-700 text-white scale-110 border-blue-700' : 'bg-transparent text-black scale-100 border-transparent'
              }`}
              style={{ zIndex: hoveredLink === page ? 10 : 1 }}
            >
              {translations[currentLang][page]}
              <span className={`absolute inset-0 border-2 ${hoveredLink === page ? 'border-blue-700' : 'border-transparent'} rounded-full`} />
            </a>
          ))}
        </div>
        <div className="flex lg:hidden items-center space-x-1">
          <div className="relative inline-block text-left">
            <button
              id="languageDropdownButton"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center justify-center rounded-full p-2.5 text-gray-700"
              style={{ marginRight: '0rem' }} // Adjusted margin for positioning closer to menu
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
                <path fill="#CFD8DC" d="M15,13h25c1.104,0,2,0.896,2,2v25c0,1.104-0.896,2-2,2H26L15,13z"></path>
                <path fill="#546E7A" d="M26.832,34.854l-0.916-1.776l0.889-0.459c0.061-0.031,6.101-3.208,9.043-9.104l0.446-0.895l1.79,0.893l-0.447,0.895c-3.241,6.496-9.645,9.85-9.916,9.989L26.832,34.854z"></path>
                <path fill="#546E7A" d="M38.019 34l-.87-.49c-.207-.116-5.092-2.901-8.496-7.667l1.627-1.162c3.139 4.394 7.805 7.061 7.851 7.087L39 32.26 38.019 34zM26 22H40V24H26z"></path>
                <path fill="#546E7A" d="M32 20H34V24H32z"></path>
                <path fill="#2196F3" d="M33,35H8c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2h14L33,35z"></path>
                <path fill="#3F51B5" d="M26 42L23 35 33 35z"></path>
                <path fill="#FFF" d="M19.172,24h-4.36l-1.008,3H11l4.764-13h2.444L23,27h-2.805L19.172,24z M15.444,22h3.101l-1.559-4.714L15.444,22z"></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-38 absolute right-0 mt-2">
                <ul className="py-2 text-sm text-gray-700" aria-labelledby="languageDropdownButton">
                  {Object.entries(languages).map(([code, lang]) => (
                    <li key={code}>
                      <button
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => {
                          changeLanguage(code as 'en' | 'kn');
                          setDropdownOpen(false); // Close dropdown after selection
                        }}
                      >
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="relative inline-block text-left">
            <button
              id="languageDropdownButtonDesktop"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="inline-flex items-center justify-center rounded-full p-2.5 text-gray-700"
              style={{ marginRight: '1rem' }} // Adjusted margin for positioning closer to menu
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 48 48">
                <path fill="#CFD8DC" d="M15,13h25c1.104,0,2,0.896,2,2v25c0,1.104-0.896,2-2,2H26L15,13z"></path>
                <path fill="#546E7A" d="M26.832,34.854l-0.916-1.776l0.889-0.459c0.061-0.031,6.101-3.208,9.043-9.104l0.446-0.895l1.79,0.893l-0.447,0.895c-3.241,6.496-9.645,9.85-9.916,9.989L26.832,34.854z"></path>
                <path fill="#546E7A" d="M38.019 34l-.87-.49c-.207-.116-5.092-2.901-8.496-7.667l1.627-1.162c3.139 4.394 7.805 7.061 7.851 7.087L39 32.26 38.019 34zM26 22H40V24H26z"></path>
                <path fill="#546E7A" d="M32 20H34V24H32z"></path>
                <path fill="#2196F3" d="M33,35H8c-1.104,0-2-0.896-2-2V8c0-1.104,0.896-2,2-2h14L33,35z"></path>
                <path fill="#3F51B5" d="M26 42L23 35 33 35z"></path>
                <path fill="#FFF" d="M19.172,24h-4.36l-1.008,3H11l4.764-13h2.444L23,27h-2.805L19.172,24z M15.444,22h3.101l-1.559-4.714L15.444,22z"></path>
              </svg>
            </button>
            {dropdownOpen && (
              <div className="z-10 bg-gray-200 divide-y divide-gray-100 rounded-lg shadow-lg w-38 absolute right-0 mt-2">
                <ul className="py-2 text-base text-gray-800" aria-labelledby="languageDropdownButtonDesktop">
                  {Object.entries(languages).map(([code, lang]) => (
                    <li key={code}>
                      <button
                        className="block px-4 py-2 hover:bg-gray-100"
                        onClick={() => {
                          changeLanguage(code as 'en' | 'kn');
                          setDropdownOpen(false); // Close dropdown after selection
                        }}
                      >
                        {lang.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
      <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <DialogPanel  className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image width={35} height={35} src="/logo.png" alt="Logo" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {(Object.keys(translations.en) as Page[]).map((page) => (
                  <a
                    key={page}
                    href={`/${page}`}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                  >
                    {translations[currentLang][page]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
