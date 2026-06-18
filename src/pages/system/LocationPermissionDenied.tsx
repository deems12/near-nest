import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPinOff, Settings } from 'lucide-react';
export function LocationPermissionDenied() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white flex flex-col h-full items-center justify-center p-8 text-center">
      <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6">
        <MapPinOff className="w-12 h-12 text-red-500" />
      </div>

      <h1 className="text-2xl font-bold text-slate-900 mb-3">
        Location Access Denied
      </h1>
      <p className="text-slate-500 mb-8 max-w-xs">
        We cannot show you nearby resources without location access. Please
        enable it in your device settings.
      </p>

      <div className="w-full flex flex-col gap-3">
        <button
          onClick={() => navigate('/user/home')}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
          
          <Settings className="w-5 h-5" />
          Open Settings
        </button>
        <button
          onClick={() => navigate('/user/search')}
          className="w-full py-4 bg-slate-50 text-slate-600 rounded-xl font-bold text-lg active:scale-[0.98] transition-transform">
          
          Search Manually
        </button>
      </div>
    </div>);

}