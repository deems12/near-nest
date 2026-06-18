import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, Home } from 'lucide-react';
export function EmergencySuccess() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-slate-900 flex flex-col h-full items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6 border-2 border-green-500">
        <CheckCircle2 className="w-12 h-12 text-green-500" />
      </div>
      <h2 className="text-2xl font-bold text-white mb-2">Navigation Ended</h2>
      <p className="text-slate-400 mb-12 max-w-xs">
        You have arrived at your destination. We hope you are safe.
      </p>

      <button
        onClick={() => navigate('/user/home')}
        className="w-full py-4 bg-slate-800 text-white rounded-xl font-bold text-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2 border border-slate-700">
        
        <Home className="w-5 h-5" />
        Return to Home
      </button>
    </div>);

}