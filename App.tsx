import React, { useState, useMemo } from 'react';
import Welcome from './components/Welcome';
import Quiz from './components/Quiz';
import Result from './components/Result';
import MusicPlayer from './components/MusicPlayer';
import { QuizState, GroupResult } from './types';
import { GROUPS } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<QuizState>('WELCOME');
  const [finalGroup, setFinalGroup] = useState<GroupResult | null>(null);
  const [userMBTI, setUserMBTI] = useState<string>("");

  const calculateMBTI = (scores: Record<string, number>) => {
    const e = scores['E'] > scores['I'] ? 'E' : 'I';
    const s = scores['S'] > scores['N'] ? 'S' : 'N';
    const t = scores['T'] > scores['F'] ? 'T' : 'F';
    const j = scores['J'] > scores['P'] ? 'J' : 'P';
    return `${e}${s}${t}${j}`;
  };

  const determineGroup = (mbti: string): GroupResult => {
    // Find exact match logic based on the prompt's grouping
    // Group 1 (Analysts): aespa
    const group1 = ['INTJ', 'INTP', 'ENTJ', 'ENTP'];
    // Group 2 (Diplomats): LE SSERAFIM
    const group2 = ['INFJ', 'INFP', 'ENFJ', 'ENFP'];
    // Group 3 (Sentinels): IVE
    const group3 = ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ', 'ISTJ']; // added repeats for safety
    // Group 4 (Explorers): NMIXX
    const group4 = ['ISTP', 'ISFP', 'ESTP', 'ESFP'];

    if (group1.includes(mbti)) return GROUPS.find(g => g.id === 'aespa')!;
    if (group2.includes(mbti)) return GROUPS.find(g => g.id === 'lesserafim')!;
    if (group3.includes(mbti)) return GROUPS.find(g => g.id === 'ive')!;
    if (group4.includes(mbti)) return GROUPS.find(g => g.id === 'nmixx')!;
    
    // Fallback if something weird happens with scoring ties (default to NMIXX for chaos)
    return GROUPS.find(g => g.id === 'nmixx')!;
  };

  const handleQuizComplete = (scores: Record<string, number>) => {
    setView('ANALYZING');
    const mbti = calculateMBTI(scores);
    setUserMBTI(mbti);
    const group = determineGroup(mbti);
    
    // Fake loading delay for suspense
    setTimeout(() => {
      setFinalGroup(group);
      setView('RESULT');
    }, 2000);
  };

  const handleRetry = () => {
    setFinalGroup(null);
    setUserMBTI("");
    setView('WELCOME');
  };

  return (
    <div className="min-h-screen w-full bg-pink-50 overflow-x-hidden relative font-sans text-slate-900 selection:bg-pink-300 selection:text-pink-900">
      
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none" 
           style={{ 
             backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>
      
      {/* Background Blobs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob z-0"></div>
      <div className="fixed top-0 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000 z-0"></div>
      <div className="fixed -bottom-8 left-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000 z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex flex-col">
        
        {/* Header / Logo Area */}
        <header className="py-6 flex justify-center">
           <div className="bg-white/80 backdrop-blur px-6 py-2 rounded-full border border-pink-200 shadow-sm">
              <span className="text-pink-500 font-bold font-pixel text-xl tracking-widest">K-POP IDOL TEST_</span>
           </div>
        </header>

        <main className="flex-grow flex flex-col justify-center">
          {view === 'WELCOME' && <Welcome onStart={() => setView('QUIZ')} />}
          
          {view === 'QUIZ' && <Quiz onComplete={handleQuizComplete} />}
          
          {view === 'ANALYZING' && (
            <div className="flex flex-col items-center justify-center space-y-6 animate-pulse">
               <div className="w-24 h-24 border-8 border-pink-200 border-t-pink-500 rounded-full animate-spin"></div>
               <h2 className="text-2xl font-bold text-slate-700">Calculating Compatibility...</h2>
               <div className="font-pixel text-pink-400">ANALYZING BRAIN WAVES...</div>
            </div>
          )}
          
          {view === 'RESULT' && finalGroup && (
            <Result 
              group={finalGroup} 
              mbti={userMBTI}
              onRetry={handleRetry}
            />
          )}
        </main>

        {/* Footer */}
        <footer className="py-6 text-center text-slate-400 text-sm font-pixel">
           © 2024 K-POP SOULMATE FINDER. DESIGNED FOR FANS.
        </footer>
      </div>

      <MusicPlayer />
    </div>
  );
};

export default App;