import React from 'react';
import { useNavigate } from 'react-router-dom';
import { WifiOff, RefreshCw } from 'lucide-react';
export function NoInternet() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white flex flex-col h-full items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
        <WifiOff className="w-12 h-12 text-slate-400" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        No Internet Connection
      </h2>
      <p className="text-slate-500 mb-8 max-w-xs">
        Please check your network settings and try again. NEAR NEST requires an
        active connection to fetch nearby resources.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
        
        <RefreshCw className="w-5 h-5" />
        Try Again
      </button>
    </div>);

}