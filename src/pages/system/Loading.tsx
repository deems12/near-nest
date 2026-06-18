import React from 'react';
import { MapPin, Loader2 } from 'lucide-react';
export function Loading() {
  return (
    <div className="flex-1 bg-blue-600 flex flex-col h-full items-center justify-center relative overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-blue-700 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="z-10 flex flex-col items-center">
        <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center shadow-2xl mb-8 relative">
          <MapPin className="w-10 h-10 text-blue-600" />
          <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow-sm">
            <Loader2 className="w-4 h-4 text-blue-600 animate-spin" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight mb-2">
          NEAR NEST
        </h1>
        <p className="text-blue-200 text-sm font-medium">
          Loading resources...
        </p>
      </div>
    </div>);

}