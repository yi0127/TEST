import React, { useEffect, useState } from 'react';
import { GroupResult } from '../types';
import { generateKpopAnalysis } from '../services/geminiService';
import { Sparkles, Share2, RefreshCcw } from 'lucide-react';

interface ResultProps {
  group: GroupResult;
  mbti: string;
  onRetry: () => void;
}

const Result: React.FC<ResultProps> = ({ group, mbti, onRetry }) => {
  const [aiAnalysis, setAiAnalysis] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const fetchAnalysis = async () => {
      const result = await generateKpopAnalysis(mbti, group.name, []);
      if (isMounted) {
        setAiAnalysis(result);
        setLoading(false);
      }
    };
    fetchAnalysis();
    return () => { isMounted = false; };
  }, [group, mbti]);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 pb-20 animate-in zoom-in-95 duration-500">
      
      {/* Title */}
      <div className="text-center mb-8">
        <span className="bg-white/50 px-4 py-1 rounded-full text-sm font-bold text-pink-600 tracking-widest uppercase mb-2 inline-block border border-pink-200">
          Your Destiny Group
        </span>
        <h2 className={`text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r ${group.color} drop-shadow-sm`} style={{fontFamily: 'Zen Kaku Gothic New'}}>
          {group.name}
        </h2>
        <p className="text-xl text-slate-600 mt-2 font-bold tracking-widest">{group.vibe}</p>
      </div>

      {/* Main Card */}
      <div className="bg-white/70 backdrop-blur-md rounded-3xl border-4 border-white shadow-2xl overflow-hidden relative">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"></div>
        
        <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            {/* Image Area - Using generic keywords to get specific vibes from Lorem Picsum */}
            <div className="relative group cursor-pointer">
                <div className={`absolute -inset-2 bg-gradient-to-r ${group.color} rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt`}></div>
                <div className="relative rounded-xl overflow-hidden border-2 border-white aspect-[3/4]">
                     <img 
                        src={`https://picsum.photos/seed/${group.id}/400/600`} 
                        alt={group.name}
                        className="object-cover w-full h-full hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute bottom-0 left-0 w-full bg-black/50 p-2 text-white text-center font-pixel">
                        FANDOM: {group.fandomName}
                     </div>
                </div>
            </div>

            {/* Text Area */}
            <div className="space-y-6">
                <div className="bg-pink-50 rounded-lg p-4 border border-pink-100">
                    <p className="text-lg font-bold text-slate-800 mb-2">✨ 靈魂特質</p>
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {group.description}
                    </p>
                </div>

                {/* AI Content */}
                <div className="bg-gradient-to-br from-white to-purple-50 rounded-lg p-4 border-2 border-dashed border-purple-200 relative">
                    <Sparkles className="absolute -top-3 -right-3 text-yellow-400 fill-yellow-200 w-8 h-8 animate-bounce" />
                    <p className="text-xs font-bold text-purple-400 mb-1">AI 經紀人分析報告</p>
                    {loading ? (
                        <div className="flex items-center gap-2 text-purple-400 animate-pulse">
                            <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                            <span className="w-2 h-2 bg-purple-400 rounded-full delay-75"></span>
                            <span className="w-2 h-2 bg-purple-400 rounded-full delay-150"></span>
                            正在生成出道企劃...
                        </div>
                    ) : (
                        <div className="whitespace-pre-line text-slate-700 text-sm font-medium leading-relaxed">
                            {aiAnalysis}
                        </div>
                    )}
                </div>
                
                 <div className="bg-slate-100 p-3 rounded border border-slate-200">
                    <p className="text-xs font-bold text-slate-500 mb-2 uppercase">Potential Bias Wreckers</p>
                    <div className="flex flex-wrap gap-2">
                        {group.memberArchetypes.map((mem, i) => (
                            <span key={i} className="text-xs bg-white px-2 py-1 rounded shadow-sm text-slate-600 border border-slate-200">
                                {mem}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>

        {/* Actions */}
        <div className="bg-slate-50 p-4 flex flex-col sm:flex-row gap-4 justify-center border-t border-slate-200">
            <button 
                onClick={onRetry}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-slate-300 rounded-xl text-slate-600 font-bold hover:bg-slate-100 hover:border-slate-400 transition-colors shadow-[2px_2px_0px_#cbd5e1] active:translate-y-1 active:shadow-none"
            >
                <RefreshCcw size={18} />
                再測一次
            </button>
            <button 
                onClick={() => alert("截圖分享給朋友吧！")}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-bold hover:shadow-lg hover:scale-105 transition-all shadow-[2px_2px_0px_#831843] active:translate-y-1 active:shadow-none border-2 border-white"
            >
                <Share2 size={18} />
                分享出道海報
            </button>
        </div>
      </div>
    </div>
  );
};

export default Result;