import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Navigation, X, MapPin } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function RouteGuidance() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const [progress, setProgress] = useState(0);
  const place = places.find((p) => p.id === id) || places[0];
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => p < 100 ? p + 2 : 100);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="min-h-screen w-full bg-slate-100 flex flex-col relative overflow-hidden">
      {/* Map Background Mock */}
      <div className="absolute inset-0 bg-[#e5e3df]">
        <div className="absolute top-1/4 left-0 right-0 h-4 bg-white/60 rotate-12"></div>
        <div className="absolute top-1/2 left-0 right-0 h-6 bg-white/60 -rotate-6"></div>

        {/* Route Line Mock */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{
            filter: 'drop-shadow(0 0 4px rgba(37,99,235,0.3))'
          }}>
          
          <path
            d="M 100 400 Q 200 300 150 200 T 250 100"
            fill="none"
            stroke="#2563eb"
            strokeWidth="6" />
          
          <path
            d="M 100 400 Q 200 300 150 200 T 250 100"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2" />
          
        </svg>

        <div className="absolute top-[100px] left-[250px] z-10">
          <MapPin className="w-8 h-8 text-red-500 fill-red-100 -translate-x-1/2 -translate-y-full" />
        </div>

        <div className="absolute top-[400px] left-[100px] w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="w-5 h-5 bg-blue-500 border-2 border-white rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Top Bar */}
      <div className="p-4 pt-6 flex items-center justify-between z-20">
        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-slate-900 shadow-sm border border-slate-200">
          {place.distance} remaining
        </div>
        <button
          onClick={() => navigate(-1)}
          className="w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-slate-600 shadow-sm border border-slate-200">
          
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Instructions */}
      <div className="mt-2 mx-4 bg-blue-600 rounded-2xl p-4 shadow-xl z-20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
            <Navigation className="w-6 h-6 text-white rotate-45" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Turn right</h2>
            <p className="text-blue-100 font-medium">
              onto Main Street in 200m
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1"></div>

      {/* Bottom Info Panel */}
      <div className="bg-white rounded-t-3xl p-6 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border-t border-slate-100">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-3xl font-black text-slate-900 mb-1">
              {place.eta}
            </h1>
            <p className="text-slate-500 font-medium">{place.name}</p>
          </div>
        </div>

        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-blue-600 rounded-full transition-all duration-1000"
            style={{
              width: `${progress}%`
            }}>
          </div>
        </div>

        <button
          onClick={() => navigate('/system/success')}
          className="w-full py-4 bg-red-50 text-red-600 rounded-xl font-bold text-lg active:scale-[0.98] transition-transform">
          
          End Navigation
        </button>
      </div>
    </div>);

}