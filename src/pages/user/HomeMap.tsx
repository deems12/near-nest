import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { List, Crosshair } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { MapMock } from '../../components/common/MapMock';
import { SearchBar } from '../../components/common/SearchBar';
import { RESOURCE_CATEGORIES } from '../../constants/categories';
import { Place } from '../../types';
export function HomeMap() {
  const navigate = useNavigate();
  const { places } = useResource();
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  return (
    <div className="min-h-screen w-full relative flex flex-col bg-gray-100">
      <MapMock places={places} onPinClick={setSelectedPlace} />

      {/* Top Overlay */}
      <div className="absolute top-0 left-0 right-0 p-4 z-20 bg-gradient-to-b from-white/80 to-transparent pt-6">
        <SearchBar onClick={() => navigate('/user/search')} readOnly />

        {/* Quick Categories */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar mt-4 pb-2">
          {RESOURCE_CATEGORIES.slice(0, 6).map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => navigate(`/user/category/${cat.id}`)}
                className="flex items-center gap-1.5 bg-white px-3 py-2 rounded-xl shadow-sm border border-slate-100 shrink-0 active:scale-95 transition-transform">
                
                <Icon className={`w-4 h-4 ${cat.color}`} />
                <span className="text-xs font-semibold text-slate-700">
                  {cat.name}
                </span>
              </button>);

          })}
        </div>
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-6 right-4 z-20 flex flex-col gap-3">
        <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-700 active:scale-95 transition-transform">
          <Crosshair className="w-5 h-5" />
        </button>
        <button
          onClick={() => navigate('/user/home/list')}
          className="w-12 h-12 bg-slate-900 rounded-full shadow-lg flex items-center justify-center text-white active:scale-95 transition-transform">
          
          <List className="w-5 h-5" />
        </button>
      </div>

      {/* Selected Place Popup */}
      {selectedPlace &&
      <div className="absolute bottom-6 left-4 right-20 z-30 animate-in slide-in-from-bottom-4">
          <div className="bg-white rounded-2xl p-3 shadow-xl border border-slate-100 relative">
            <button
            onClick={() => setSelectedPlace(null)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-xs font-bold text-slate-600">
            
              ×
            </button>
            <div
            className="flex gap-3"
            onClick={() => navigate(`/user/place/${selectedPlace.id}`)}>
            
              <div className="w-16 h-16 bg-slate-100 rounded-xl shrink-0 overflow-hidden">
                <img
                src={`https://source.unsplash.com/random/100x100?${selectedPlace.categoryId}`}
                alt=""
                className="w-full h-full object-cover opacity-80" />
              
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-slate-900 text-sm truncate">
                  {selectedPlace.name}
                </h4>
                <p className="text-xs text-slate-500 truncate mb-1">
                  {selectedPlace.address}
                </p>
                <div className="flex items-center gap-2 text-[10px] font-bold">
                  <span className="text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                    {selectedPlace.distance}
                  </span>
                  {selectedPlace.verificationStatus === 'Verified' &&
                <span className="text-blue-600">✓ Verified</span>
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>);

}