import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Navigation, Phone, X, AlertTriangle } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function EmergencyRoute() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const [progress, setProgress] = useState(0);
  const place = places.find((p) => p.id === id) || places[0];
  // Mock progress
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => p < 100 ? p + 1 : 100);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="flex-1 bg-slate-900 flex flex-col h-full relative overflow-hidden">
      {/* Dark Map Mock */}
      <div className="absolute inset-0 bg-slate-800 opacity-50">
        <div className="absolute top-1/4 left-0 right-0 h-4 bg-slate-700 rotate-12"></div>
        <div className="absolute top-1/2 left-0 right-0 h-6 bg-slate-700 -rotate-6"></div>

        {/* Route Line Mock */}
        <svg
          className="absolute inset-0 w-full h-full"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(59,130,246,0.5))'
          }}>
          
          <path
            d="M 100 400 Q 200 300 150 200 T 250 100"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="6"
            strokeDasharray="10,10"
            className="animate-[dash_1s_linear_infinite]" />
          
        </svg>

        <div className="absolute top-[100px] left-[250px] w-8 h-8 bg-red-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg z-10">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>

        <div className="absolute top-[400px] left-[100px] w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center z-10">
          <div className="w-5 h-5 bg-blue-500 border-2 border-white rounded-full shadow-lg"></div>
        </div>
      </div>

      {/* Top Bar */}
      <div className="p-4 pt-6 flex items-center justify-between z-20 bg-gradient-to-b from-slate-900 to-transparent">
        <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold animate-pulse">
          <AlertTriangle className="w-4 h-4" />
          EMERGENCY ROUTE
        </div>
        <button
          onClick={() => navigate('/emergency')}
          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white backdrop-blur-md">
          
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Instructions */}
      <div className="mt-4 mx-4 bg-slate-800/90 backdrop-blur-md rounded-2xl p-4 border border-slate-700 z-20 shadow-2xl">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shrink-0">
            <Navigation className="w-6 h-6 text-white rotate-45" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Turn right</h2>
            <p className="text-slate-400 font-medium">
              onto Main Street in 200m
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1"></div>

      {/* Bottom Info Panel */}
      <div className="bg-slate-900 rounded-t-3xl p-6 z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-slate-800">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-3xl font-black text-white mb-1">{place.eta}</h1>
            <p className="text-slate-400 font-medium">
              {place.distance} • {place.name}
            </p>
          </div>
          <button
            onClick={() => navigate(`/emergency/call/${place.id}`)}
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(34,197,94,0.4)] active:scale-95 transition-transform">
            
            <Phone className="w-6 h-6" />
          </button>
        </div>

        <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-blue-500 rounded-full transition-all duration-1000"
            style={{
              width: `${progress}%`
            }}>
          </div>
        </div>

        <button
          onClick={() => navigate('/emergency/success')}
          className="w-full py-4 bg-red-600 text-white rounded-xl font-bold text-lg active:scale-[0.98] transition-transform">
          
          End Navigation
        </button>
      </div>
    </div>);

}