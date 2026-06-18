import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin } from 'lucide-react';
export function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="flex-1 bg-blue-600 flex flex-col items-center justify-center text-white h-full relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-4000"></div>

      <div className="z-10 flex flex-col items-center">
        <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl mb-6">
          <MapPin className="w-12 h-12 text-blue-600" />
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight mb-2">
          NEAR NEST
        </h1>
        <p className="text-blue-100 font-medium tracking-wide">
          Find. Verify. Navigate.
        </p>
      </div>
    </div>);

}