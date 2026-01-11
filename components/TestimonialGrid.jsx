import React from 'react';

const testimonials = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Learned Spanish',
    content: "I never thought I could learn a language at 30, but LinguaSphere made it feel like a game. I'm now fluent enough to travel solo through South America!",
    avatarUrl: 'https://picsum.photos/100/100?random=1',
    flagUrl: '🇪🇸'
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'Learned Japanese',
    content: "The Grammar AI feature is a game changer. It's like having a tutor in your pocket 24/7 without the hourly cost. Highly recommended!",
    avatarUrl: 'https://picsum.photos/100/100?random=2',
    flagUrl: '🇯🇵'
  },
  {
    id: '3',
    name: 'Elara Vossen',
    role: 'Learned French',
    content: "Beautiful interface, fun characters, and lessons that actually stick. I've tried every app out there, and this is the one that kept me coming back.",
    avatarUrl: 'https://picsum.photos/100/100?random=3',
    flagUrl: '🇫🇷'
  }
];

const TestimonialGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">Learner Stories</h2>
          <p className="text-xl text-gray-500 font-semibold">Join our global community of achievers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:border-gray-300 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img src={t.avatarUrl} alt={t.name} className="w-16 h-16 rounded-full border-2 border-gray-100 object-cover" />
                  <span className="absolute -bottom-1 -right-1 text-2xl filter drop-shadow-sm">{t.flagUrl}</span>
                </div>
                <div>
                  <h4 className="text-lg font-extrabold text-gray-800">{t.name}</h4>
                  <p className="text-brand-green font-bold text-sm uppercase">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-600 font-medium leading-relaxed italic">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialGrid;
