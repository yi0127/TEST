import React, { useState } from 'react';
import { Question, Option } from '../types';
import { QUESTIONS } from '../constants';

interface QuizProps {
  onComplete: (answers: Record<string, number>) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
  const [direction, setDirection] = useState(0); // for animation direction

  const handleOptionClick = (option: Option) => {
    const newScores = { ...scores, [option.value]: scores[option.value] + 1 };
    setScores(newScores);

    if (currentQIndex < QUESTIONS.length - 1) {
      setDirection(1);
      setTimeout(() => {
        setCurrentQIndex(prev => prev + 1);
        setDirection(0);
      }, 200);
    } else {
      onComplete(newScores);
    }
  };

  const currentQ = QUESTIONS[currentQIndex];
  const progress = ((currentQIndex + 1) / QUESTIONS.length) * 100;

  return (
    <div className="w-full max-w-2xl mx-auto p-4 flex flex-col h-full justify-center">
      {/* Windows 95 Style Header */}
      <div className="bg-pink-500 text-white px-2 py-1 flex justify-between items-center font-pixel border-t-2 border-l-2 border-pink-300 border-b-2 border-r-2 border-pink-700 shadow-md mb-6">
        <span>Question {currentQIndex + 1} / {QUESTIONS.length}</span>
        <span className="cursor-pointer">x</span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white border-2 border-slate-800 h-6 mb-8 relative p-1 shadow-[2px_2px_0px_rgba(0,0,0,0.2)]">
        <div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 relative overflow-hidden"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-30"></div>
        </div>
      </div>

      {/* Question Card */}
      <div className={`transform transition-all duration-300 ${direction === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
        <div className="bg-white/80 backdrop-blur p-8 rounded-2xl border-4 border-double border-purple-300 shadow-xl mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 leading-relaxed">
            {currentQ.question}
          </h2>
        </div>

        <div className="grid gap-4">
          {currentQ.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleOptionClick(opt)}
              className="group p-4 md:p-6 bg-white border-2 border-pink-200 rounded-xl hover:bg-pink-50 hover:border-pink-400 hover:shadow-[4px_4px_0px_#db2777] transition-all text-left flex items-center gap-4 active:translate-y-1 active:shadow-none"
            >
              <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-500 flex items-center justify-center font-bold group-hover:bg-pink-500 group-hover:text-white transition-colors shrink-0">
                {idx === 0 ? 'A' : 'B'}
              </div>
              <span className="text-lg text-slate-700 font-medium group-hover:text-pink-600">
                {opt.text}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;