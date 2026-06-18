import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Navigation, Compass, AlertTriangle } from 'lucide-react';
export function LocationPermission() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 rounded-full border-2 border-blue-200 animate-ping opacity-50"></div>
          <MapPin className="w-12 h-12 text-blue-600" />
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          Allow Location Access
        </h1>
        <p className="text-slate-500 mb-8">
          NEAR NEST needs your location to show you the closest resources and
          provide accurate navigation.
        </p>

        <div className="w-full space-y-4 text-left bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <div className="flex items-start gap-3">
            <Navigation className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700">
              <span className="font-semibold block">Find Nearest Places</span>{' '}
              Instantly locate water, restrooms, and medical help.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <Compass className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700">
              <span className="font-semibold block">Accurate Navigation</span>{' '}
              Get real-time routing to your destination.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <p className="text-sm text-slate-700">
              <span className="font-semibold block">Emergency Mode</span>{' '}
              Critical for finding immediate help during crises.
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-white flex flex-col gap-3">
        <button
          onClick={() => navigate(-1)}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
          
          Allow Location
        </button>
        <button
          onClick={() => navigate(-1)}
          className="w-full py-4 bg-slate-50 text-slate-600 rounded-xl font-bold text-lg active:scale-[0.98] transition-transform">
          
          Not Now
        </button>
      </div>
    </div>);

}