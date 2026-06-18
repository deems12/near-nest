import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
export function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white flex flex-col h-full relative overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center relative z-10">
        <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl mb-8">
          <MapPin className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Welcome to
          <br />
          NEAR NEST
        </h1>
        <p className="text-slate-500 mb-12 max-w-xs">
          Your community-verified guide to essential resources nearby.
        </p>
      </div>

      <div className="p-6 bg-white z-10 flex flex-col gap-4 pb-12">
        <button
          onClick={() => navigate('/login')}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
          
          Log In
        </button>
        <button
          onClick={() => navigate('/register')}
          className="w-full py-4 bg-blue-50 text-blue-600 rounded-2xl font-bold text-lg active:scale-[0.98] transition-transform">
          
          Create Account
        </button>
        <button
          onClick={() => navigate('/onboarding/1')}
          className="w-full py-2 text-slate-400 font-medium text-sm mt-2">
          
          Learn More
        </button>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-50 to-white -z-0"></div>
    </div>);

}