import React, { useState } from 'react';
import { SupportedLanguage } from '../types';
import { Globe, ChevronDown, Check } from 'lucide-react';

const LanguageHero: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguage>(SupportedLanguage.SPANISH);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  
  const handleSelectLanguage = (lang: SupportedLanguage) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <section className="relative bg-brand-green overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow opacity-20 rounded-full translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-6 py-20 md:py-32 relative z-10 flex flex-col md:flex-row items-center justify-between">
        
        <div className="w-full md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-md">
            The free, fun, and effective way to learn <br/>
            <span className="text-brand-yellow inline-block relative">
              {selectedLanguage}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>!
          </h1>
          <p className="text-xl text-white opacity-90 mb-8 font-semibold">
            Join millions of learners on LinguaSphere today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
             <button className="bg-white text-brand-green font-bold py-4 px-8 rounded-2xl shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-gray-100 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[2px] transition-all active:shadow-none active:translate-y-[4px] uppercase tracking-wide text-lg border-2 border-transparent">
              Get Started
            </button>
            
            <div className="relative">
              <button 
                onClick={toggleDropdown}
                className="w-full sm:w-auto bg-brand-greenDark text-white font-bold py-4 px-8 rounded-2xl shadow-[0_4px_0_0_rgba(0,0,0,0.2)] hover:bg-opacity-90 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[2px] transition-all active:shadow-none active:translate-y-[4px] flex items-center justify-center gap-2 border-2 border-white/20"
              >
                <Globe size={20} />
                <span>I want to learn {selectedLanguage}</span>
                <ChevronDown size={20} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full sm:w-64 bg-white rounded-2xl shadow-xl border-2 border-gray-100 overflow-hidden z-50">
                  {Object.values(SupportedLanguage).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleSelectLanguage(lang)}
                      className="w-full text-left px-6 py-3 hover:bg-gray-50 font-bold text-gray-700 flex items-center justify-between transition-colors"
                    >
                      {lang}
                      {selectedLanguage === lang && <Check size={18} className="text-brand-green" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full md:w-5/12 flex justify-center">
            {/* Placeholder for a hero illustration */}
            <div className="relative w-full max-w-md aspect-square">
                 <img 
                    src="https://picsum.photos/600/600" 
                    alt="Happy language learners" 
                    className="rounded-3xl shadow-[0_8px_0_0_rgba(0,0,0,0.1)] border-4 border-white object-cover w-full h-full transform rotate-3 hover:rotate-0 transition-transform duration-500"
                 />
                 {/* Floating Badges */}
                 <div className="absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-lg animate-bounce">
                    <span className="text-4xl">🔥</span>
                 </div>
                 <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-bold text-gray-700">12k Online</span>
                 </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default LanguageHero;