import React, { useState } from 'react';
import { checkGrammar } from '../services/geminiService';
import { Sparkles, ArrowRight, Bot } from 'lucide-react';

const GrammarAIDemo = () => {
  const [inputText, setInputText] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheck = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    setFeedback(null);
    const result = await checkGrammar(inputText);
    setFeedback(result);
    setIsLoading(false);
  };

  return (
    <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-[0_4px_0_0_rgba(0,0,0,0.1)] max-w-2xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-brand-purple p-3 rounded-xl text-white">
          <Bot size={28} />
        </div>
        <div>
          <h3 className="text-2xl font-extrabold text-gray-800">Grammar AI</h3>
          <p className="text-gray-500 font-semibold">Try it out! Type a sentence below.</p>
        </div>
      </div>

      <div className="relative mb-4">
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="e.g. 'She don't like apples'"
          className="w-full p-4 rounded-2xl bg-gray-100 border-2 border-transparent focus:border-brand-blue focus:bg-white outline-none resize-none h-32 text-lg font-medium text-gray-700 transition-all"
        />
        <button
          onClick={handleCheck}
          disabled={isLoading || !inputText.trim()}
          className="absolute bottom-4 right-4 bg-brand-blue text-white p-3 rounded-xl shadow-[0_3px_0_0_rgba(0,0,0,0.2)] hover:translate-y-[1px] hover:shadow-[0_2px_0_0_rgba(0,0,0,0.2)] active:translate-y-[3px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <ArrowRight size={20} />
          )}
        </button>
      </div>

      {feedback && (
        <div className="bg-brand-yellow/20 border-2 border-brand-yellow rounded-2xl p-4 flex gap-4 items-start animate-fade-in">
           <Sparkles className="text-brand-yellow flex-shrink-0 mt-1" size={24} fill="currentColor" />
           <div>
             <h4 className="font-bold text-gray-800 mb-1">AI Feedback</h4>
             <p className="text-gray-700 font-medium">{feedback}</p>
           </div>
        </div>
      )}
    </div>
  );
};

export default GrammarAIDemo;
