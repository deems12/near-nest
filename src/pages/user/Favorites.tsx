import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Search } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { PlaceCard } from '../../components/common/PlaceCard';
export function Favorites() {
  const navigate = useNavigate();
  const { places } = useResource();
  // Mock favorites (just taking the first 2 verified places)
  const favoritePlaces = places.
  filter((p) => p.verificationStatus === 'Verified').
  slice(0, 2);
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Favorites & Saved</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {favoritePlaces.length > 0 ?
        <div className="flex flex-col gap-4">
            {favoritePlaces.map((place) =>
          <PlaceCard key={place.id} place={place} />
          )}
          </div> :

        <div className="flex flex-col items-center justify-center h-full text-center pb-20">
            <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-10 h-10 text-red-300" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              No favorites yet
            </h2>
            <p className="text-slate-500 mb-8 max-w-xs">
              Save places you frequently visit or want to remember for later.
            </p>
            <button
            onClick={() => navigate('/user/search')}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform flex items-center gap-2">
            
              <Search className="w-4 h-4" />
              Find Places
            </button>
          </div>
        }
      </div>
    </div>);

}