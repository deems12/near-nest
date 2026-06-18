import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Map as MapIcon } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { SearchBar } from '../../components/common/SearchBar';
import { PlaceCard } from '../../components/common/PlaceCard';
import { RESOURCE_CATEGORIES } from '../../constants/categories';
export function HomeList() {
  const navigate = useNavigate();
  const { places } = useResource();
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 pb-4 shadow-sm z-10">
        <SearchBar onClick={() => navigate('/user/search')} readOnly />
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold text-slate-900">Nearby Resources</h2>
          <span className="text-sm text-slate-500 font-medium">
            {places.length} found
          </span>
        </div>

        <div className="flex flex-col gap-4">
          {places.map((place) =>
          <PlaceCard key={place.id} place={place} />
          )}
        </div>
      </div>

      {/* Floating Map Button */}
      <div className="absolute bottom-6 right-4 z-20">
        <button
          onClick={() => navigate('/user/home')}
          className="flex items-center gap-2 px-5 py-3 bg-slate-900 rounded-full shadow-lg text-white font-bold text-sm active:scale-95 transition-transform">
          
          <MapIcon className="w-5 h-5" />
          Map View
        </button>
      </div>
    </div>);

}