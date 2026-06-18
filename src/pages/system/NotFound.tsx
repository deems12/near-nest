import React from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchX, Home } from 'lucide-react';
export function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full items-center justify-center p-6 text-center">
      <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-slate-100">
        <SearchX className="w-16 h-16 text-slate-300" />
      </div>
      <h1 className="text-6xl font-black text-slate-200 mb-2">404</h1>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">Page Not Found</h2>
      <p className="text-slate-500 mb-8 max-w-xs">
        The screen you are looking for doesn't exist or has been moved.
      </p>

      <button
        onClick={() => navigate('/user/home')}
        className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
        
        <Home className="w-5 h-5" />
        Return to Home
      </button>
    </div>);

}