import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PhoneOff, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
export function EmergencyCall() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isSpeaker, setIsSpeaker] = useState(true);
  useEffect(() => {
    const timer = setInterval(() => {
      setDuration((d) => d + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };
  const getContactName = () => {
    if (id === 'sos' || id === '112') return 'National Emergency';
    if (id === '108') return 'Ambulance';
    return 'Emergency Services';
  };
  return (
    <div className="flex-1 bg-slate-900 flex flex-col h-full relative overflow-hidden">
      {/* Pulsing background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 z-10">
        <div className="w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center mb-8 border-4 border-slate-700 relative">
          <div className="absolute inset-0 rounded-full border-2 border-red-500 animate-ping opacity-50"></div>
          <span className="text-4xl font-bold text-white">
            {getContactName().charAt(0)}
          </span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2 text-center">
          {getContactName()}
        </h1>
        <p className="text-red-400 font-medium text-lg mb-2">Calling...</p>
        <p className="text-slate-400 font-mono text-xl">
          {formatTime(duration)}
        </p>
      </div>

      <div className="bg-slate-800 rounded-t-3xl p-8 z-10 pb-12">
        <div className="grid grid-cols-3 gap-6 mb-10">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`flex flex-col items-center gap-2 ${isMuted ? 'text-white' : 'text-slate-400'}`}>
            
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${isMuted ? 'bg-slate-600' : 'bg-slate-700'}`}>
              
              {isMuted ?
              <MicOff className="w-6 h-6" /> :

              <Mic className="w-6 h-6" />
              }
            </div>
            <span className="text-xs font-medium">Mute</span>
          </button>

          <div className="flex flex-col items-center gap-2 text-slate-400 opacity-50">
            <div className="w-16 h-16 rounded-full bg-slate-700 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-1">
                {[...Array(9)].map((_, i) =>
                <div
                  key={i}
                  className="w-1 h-1 bg-current rounded-full">
                </div>
                )}
              </div>
            </div>
            <span className="text-xs font-medium">Keypad</span>
          </div>

          <button
            onClick={() => setIsSpeaker(!isSpeaker)}
            className={`flex flex-col items-center gap-2 ${isSpeaker ? 'text-white' : 'text-slate-400'}`}>
            
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center ${isSpeaker ? 'bg-slate-600' : 'bg-slate-700'}`}>
              
              {isSpeaker ?
              <Volume2 className="w-6 h-6" /> :

              <VolumeX className="w-6 h-6" />
              }
            </div>
            <span className="text-xs font-medium">Speaker</span>
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => navigate(-1)}
            className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(220,38,38,0.4)] active:scale-95 transition-transform">
            
            <PhoneOff className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>);

}