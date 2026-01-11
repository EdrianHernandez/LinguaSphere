import React, { useState } from 'react';
import { Video, BookOpen, WifiOff, Zap, X } from 'lucide-react';
import GrammarAIDemo from './GrammarAIDemo';

const features = [
  {
    id: 'live-tutors',
    title: 'Live Tutors',
    description: 'Connect with native speakers for real-time conversation practice anytime.',
    icon: 'video',
    color: 'bg-brand-blue',
  },
  {
    id: 'grammar-ai',
    title: 'Grammar AI',
    description: 'Instant corrections and explanations powered by advanced AI.',
    icon: 'zap',
    color: 'bg-brand-purple',
    isInteractive: true
  },
  {
    id: 'offline-mode',
    title: 'Offline Mode',
    description: 'Download lessons and keep learning even when you are off the grid.',
    icon: 'wifi-off',
    color: 'bg-brand-red',
  },
  {
    id: 'smart-lessons',
    title: 'Smart Lessons',
    description: 'Bite-sized lessons that adapt to your learning style and pace.',
    icon: 'book-open',
    color: 'bg-brand-green',
  }
];

const FeaturesList = () => {
  const [showAIDemo, setShowAIDemo] = useState(false);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'video': return <Video size={32} />;
      case 'zap': return <Zap size={32} />;
      case 'wifi-off': return <WifiOff size={32} />;
      case 'book-open': return <BookOpen size={32} />;
      default: return <BookOpen size={32} />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">Why you'll love learning with us</h2>
          <p className="text-xl text-gray-500 font-semibold">Effective, fun, and free.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className={`group flex flex-col items-center text-center p-6 rounded-3xl border-2 border-gray-200 hover:border-transparent transition-all duration-300 ${feature.isInteractive ? 'cursor-pointer hover:shadow-xl hover:scale-105' : 'hover:bg-gray-50'}`}
              onClick={() => feature.isInteractive && setShowAIDemo(true)}
            >
              <div className={`${feature.color} text-white p-5 rounded-2xl mb-6 shadow-md group-hover:shadow-[0_4px_0_0_rgba(0,0,0,0.1)] transition-shadow`}>
                {getIcon(feature.icon)}
              </div>
              <h3 className="text-2xl font-extrabold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-500 font-medium leading-relaxed">
                {feature.description}
              </p>
              {feature.isInteractive && (
                <span className="mt-4 text-brand-purple font-bold text-sm uppercase tracking-wider bg-brand-purple/10 px-3 py-1 rounded-full">
                  Try Demo
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for AI Demo */}
      {showAIDemo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl">
            <button 
              onClick={() => setShowAIDemo(false)}
              className="absolute -top-12 right-0 md:-right-12 text-white hover:text-gray-200 transition-colors"
            >
              <X size={40} />
            </button>
            <GrammarAIDemo />
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturesList;
