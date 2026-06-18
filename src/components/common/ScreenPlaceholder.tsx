import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft, Construction } from 'lucide-react';
export function ScreenPlaceholder() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-gray-50 h-full">
      <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-sm">
        <Construction className="w-10 h-10" />
      </div>
      <h2 className="text-2xl font-bold mb-3 text-slate-800">Coming Soon</h2>
      <p className="text-sm text-slate-500 mb-2">
        This screen is part of the prototype but not yet fully implemented.
      </p>
      <div className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-xs font-mono text-gray-500 mb-8 break-all max-w-full shadow-sm">
        {location.pathname}
      </div>

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl shadow-sm font-semibold text-slate-700 hover:bg-gray-50 transition-colors active:scale-95">
        
        <ArrowLeft className="w-5 h-5" />
        Go Back
      </button>
    </div>);

}