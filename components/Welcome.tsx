import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-in fade-in duration-700 p-4">
      <div className="relative">
        <Sparkles className="absolute -top-8 -left-8 text-yellow-400 w-12 h-12 animate-glitter" />
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 drop-shadow-sm" style={{ textShadow: '2px 2px 0px #fff, 4px 4px 0px #ff00ff' }}>
          WHO IS YOUR
          <br />
          K-POP DESTINY?
        </h1>
        <Sparkles className="absolute -bottom-8 -right-8 text-cyan-400 w-12 h-12 animate-glitter delay-100" />
      </div>

      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border-2 border-pink-300 shadow-[4px_4px_0px_0px_rgba(219,39,119,1)] max-w-md">
        <p className="text-xl font-bold text-slate-700 mb-2">✨ 少女心靈探索企劃 ✨</p>
        <p className="text-slate-600 leading-relaxed">
          如果你在第四代女團出道，你會是哪個團體的靈魂人物？<br/>
          透過10個情境題，分析你的隱藏魅力與本命歸屬！
        </p>
      </div>

      <button
        onClick={onStart}
        className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-2xl font-bold rounded-full shadow-lg hover:scale-105 transition-transform duration-200 border-4 border-pink-200 overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          START TEST <Heart className="fill-white animate-pulse" />
        </span>
        <div className="absolute inset-0 bg-white/30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>

      <div className="text-xs text-pink-400 font-pixel mt-8">
        ver 1.0.2 // KPOP_LOVER_EDITION
      </div>
    </div>
  );
};

export default Welcome;