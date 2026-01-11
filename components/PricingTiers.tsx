import React from 'react';
import { PricingPlan } from '../types';
import { Check, Star } from 'lucide-react';

const plans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '$0',
    period: '/mo',
    features: ['Access to all language courses', '5 Mistakes review per day', 'Ad-supported lessons'],
    color: 'border-gray-200',
    isRecommended: false
  },
  {
    id: 'premium',
    name: 'Super',
    price: '$9.99',
    period: '/mo',
    features: ['Unlimited hearts', 'Unlimited AI Grammar checks', 'No ads', 'Offline courses', 'Progress mastery quiz'],
    color: 'border-brand-blue',
    isRecommended: true
  },
  {
    id: 'family',
    name: 'Family',
    price: '$14.99',
    period: '/mo',
    features: ['Up to 6 premium accounts', 'Family management dashboard', 'All Premium features', 'Kids safe-mode'],
    color: 'border-brand-purple',
    isRecommended: false
  }
];

const PricingTiers: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">Choose your plan</h2>
          <p className="text-xl text-gray-500 font-semibold">Invest in yourself. Start for free.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative bg-white rounded-3xl p-8 border-2 ${plan.color} ${plan.isRecommended ? 'shadow-xl scale-105 z-10' : 'shadow-sm hover:shadow-lg transition-shadow'} flex flex-col h-full`}
            >
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-sm font-extrabold uppercase tracking-wide shadow-sm flex items-center gap-1">
                  <Star size={14} fill="currentColor" /> Most Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-extrabold text-gray-800 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-black text-gray-800">{plan.price}</span>
                  <span className="text-gray-500 font-bold ml-1">{plan.period}</span>
                </div>
              </div>

              <ul className="flex-grow space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className={`mt-1 p-0.5 rounded-full ${plan.isRecommended ? 'bg-brand-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
                      <Check size={14} strokeWidth={4} />
                    </div>
                    <span className="text-gray-600 font-bold">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-extrabold uppercase tracking-widest text-sm transition-all shadow-[0_4px_0_0_rgba(0,0,0,0.1)] active:shadow-none active:translate-y-[4px] border-2 border-transparent 
                ${plan.isRecommended 
                  ? 'bg-brand-blue text-white hover:bg-opacity-90' 
                  : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}>
                Select {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;