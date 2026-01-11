import React from 'react';
import LanguageHero from './components/LanguageHero';
import FeaturesList from './components/FeaturesList';
import PricingTiers from './components/PricingTiers';
import TestimonialGrid from './components/TestimonialGrid';

const App = () => {
  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white">
      {/* Header / Navbar */}
      <header className="border-b-2 border-gray-100 sticky top-0 bg-white/90 backdrop-blur-md z-40">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-green rounded-lg"></div>
            <span className="text-2xl font-extrabold text-brand-green tracking-tight">LinguaSphere</span>
          </div>
          <nav className="hidden md:flex gap-8">
            {['Courses', 'Schools', 'Podcast', 'Shop'].map((item) => (
              <a key={item} href="#" className="text-gray-500 font-bold uppercase text-sm hover:text-brand-blue transition-colors">
                {item}
              </a>
            ))}
          </nav>
          <button className="hidden md:block bg-brand-blue text-white font-extrabold py-2 px-6 rounded-xl shadow-[0_4px_0_0_rgba(28,176,246,0.2)] hover:bg-opacity-90 hover:shadow-[0_2px_0_0_rgba(28,176,246,0.2)] hover:translate-y-[2px] transition-all active:shadow-none active:translate-y-[4px]">
            Log In
          </button>
        </div>
      </header>

      <main>
        <LanguageHero />
        <FeaturesList />
        <TestimonialGrid />
        <PricingTiers />
      </main>

      <footer className="bg-brand-greenDark text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <span className="text-3xl font-extrabold tracking-tight">LinguaSphere</span>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mb-12 font-bold text-green-100/80">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Careers</a>
            <a href="#" className="hover:text-white transition-colors">Apps</a>
            <a href="#" className="hover:text-white transition-colors">Press</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          <p className="text-green-100/60 font-semibold">© 2024 LinguaSphere Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
