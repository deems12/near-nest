import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinOff, Settings } from 'lucide-react';
export function GpsDisabled() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white flex flex-col h-full items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-amber-50 rounded-full flex items-center justify-center mb-6">
        <MapPinOff className="w-12 h-12 text-amber-500" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Location Disabled
      </h2>
      <p className="text-slate-500 mb-8 max-w-xs">
        We need your location to show nearby resources and provide accurate
        navigation.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
        
        <Settings className="w-5 h-5" />
        Enable Location Settings
      </button>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 font-semibold text-slate-500">
        
        Continue without location
      </button>
    </div>);

}