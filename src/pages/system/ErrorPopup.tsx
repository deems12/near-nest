import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertOctagon, ArrowLeft } from 'lucide-react';
export function ErrorPopup() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white flex flex-col h-full items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
        <AlertOctagon className="w-12 h-12 text-red-500" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Something went wrong
      </h2>
      <p className="text-slate-500 mb-8 max-w-xs">
        An unexpected error occurred while processing your request. Our team has
        been notified.
      </p>

      <div className="w-full flex flex-col gap-3">
        <button
          onClick={() => navigate(0)}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
          
          Try Again
        </button>
        <button
          onClick={() => navigate(-1)}
          className="w-full py-4 bg-slate-100 text-slate-700 rounded-xl font-bold text-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
          
          <ArrowLeft className="w-5 h-5" />
          Go Back
        </button>
      </div>
    </div>);

}