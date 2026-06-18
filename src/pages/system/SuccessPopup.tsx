import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
export function SuccessPopup() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white flex flex-col h-full items-center justify-center p-8 text-center">
      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-in zoom-in duration-300">
        <CheckCircle2 className="w-12 h-12 text-green-500" />
      </div>

      <h1 className="text-2xl font-bold text-slate-900 mb-2">Success!</h1>
      <p className="text-slate-500 mb-8 max-w-xs">
        Your action has been completed successfully.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
        
        Continue
      </button>
    </div>);

}