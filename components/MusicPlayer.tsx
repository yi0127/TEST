import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Music } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackName, setTrackName] = useState("DRAMA - aespa");

  useEffect(() => {
    if (isPlaying) {
      const tracks = ["DRAMA - aespa", "I AM - IVE", "UNFORGIVEN - LE SSERAFIM", "DASH - NMIXX"];
      let idx = 0;
      const interval = setInterval(() => {
        setTrackName(tracks[idx]);
        idx = (idx + 1) % tracks.length;
      }, 3000); // Simulate track changing for visual effect
      return () => clearInterval(interval);
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 right-4 w-64 bg-slate-200 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-slate-600 p-1 shadow-lg z-50 hidden sm:block">
      <div className="bg-gradient-to-b from-blue-800 to-blue-600 text-white p-2 mb-2 border border-slate-600 font-pixel text-lg overflow-hidden whitespace-nowrap">
        <div className={`${isPlaying ? 'animate-pulse' : ''}`}>
          {isPlaying ? `▶ NOW PLAYING: ${trackName}` : '❚❚ PAUSED'}
        </div>
      </div>
      <div className="flex justify-between items-center px-2 pb-1">
        <button className="text-slate-800 hover:text-pink-600 active:scale-95"><SkipBack size={16}/></button>
        <button 
          onClick={() => setIsPlaying(!isPlaying)} 
          className="text-slate-800 hover:text-pink-600 active:scale-95 border-2 border-slate-400 p-1 rounded bg-slate-100"
        >
          {isPlaying ? <Pause size={16}/> : <Play size={16}/>}
        </button>
        <button className="text-slate-800 hover:text-pink-600 active:scale-95"><SkipForward size={16}/></button>
        <Music size={16} className={`text-pink-500 ${isPlaying ? 'animate-bounce' : ''}`} />
      </div>
    </div>
  );
};

export default MusicPlayer;