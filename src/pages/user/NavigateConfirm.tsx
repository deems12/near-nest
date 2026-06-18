import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Navigation, Car, Footprints, Bike } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { PlaceCard } from '../../components/common/PlaceCard';
export function NavigateConfirm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const [mode, setMode] = useState<'drive' | 'walk' | 'bike'>('drive');
  const place = places.find((p) => p.id === id) || places[0];
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Start Navigation</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24 flex flex-col gap-6">
        <div>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 ml-1">
            Destination
          </h2>
          <PlaceCard place={place} />
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 ml-1">
            Transport Mode
          </h2>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setMode('drive')}
              className={`p-4 rounded-2xl flex flex-col items-center gap-2 border-2 transition-all ${mode === 'drive' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-100 bg-white text-slate-600 hover:border-blue-200'}`}>
              
              <Car className="w-6 h-6" />
              <span className="text-xs font-bold">Drive</span>
              <span className="text-[10px] font-medium opacity-70">
                {place.eta}
              </span>
            </button>
            <button
              onClick={() => setMode('walk')}
              className={`p-4 rounded-2xl flex flex-col items-center gap-2 border-2 transition-all ${mode === 'walk' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-100 bg-white text-slate-600 hover:border-blue-200'}`}>
              
              <Footprints className="w-6 h-6" />
              <span className="text-xs font-bold">Walk</span>
              <span className="text-[10px] font-medium opacity-70">15 min</span>
            </button>
            <button
              onClick={() => setMode('bike')}
              className={`p-4 rounded-2xl flex flex-col items-center gap-2 border-2 transition-all ${mode === 'bike' ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-100 bg-white text-slate-600 hover:border-blue-200'}`}>
              
              <Bike className="w-6 h-6" />
              <span className="text-xs font-bold">Bike</span>
              <span className="text-[10px] font-medium opacity-70">8 min</span>
            </button>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 flex items-start gap-3">
          <Navigation className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-blue-900 text-sm mb-1">Route Info</h3>
            <p className="text-xs text-blue-700">
              Fastest route selected. Normal traffic conditions.
            </p>
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <button
          onClick={() => {
  window.open(
    "https://www.google.com/maps",
    "_blank"
  );
}}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform flex justify-center items-center gap-2">
          
          <Navigation className="w-5 h-5" />
          Start Navigation
        </button>
      </div>
    </div>);

}