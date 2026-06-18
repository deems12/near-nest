import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { PlaceCard } from '../../components/common/PlaceCard';
import { RESOURCE_CATEGORIES } from '../../constants/categories';
export function CategoryScreen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const category =
  RESOURCE_CATEGORIES.find((c) => c.id === id) || RESOURCE_CATEGORIES[0];
  const Icon = category.icon;
  const results = places.filter((p) => p.categoryId === id);
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className={`p-4 pt-6 pb-6 ${category.bg} shadow-sm z-10`}>
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => navigate(-1)}
            className={`p-2 -ml-2 ${category.color} hover:bg-white/20 rounded-full`}>
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigate('/user/filter')}
            className={`p-2 -mr-2 ${category.color} hover:bg-white/20 rounded-full`}>
            
            <SlidersHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm`}>
            
            <Icon className={`w-6 h-6 ${category.color}`} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              {category.name}
            </h1>
            <p className={`text-sm font-medium ${category.color}`}>
              {results.length} places nearby
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {results.length > 0 ?
        <div className="flex flex-col gap-4">
            {results.map((place) =>
          <PlaceCard key={place.id} place={place} />
          )}
          </div> :

        <div className="text-center py-12">
            <div
            className={`w-16 h-16 ${category.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
            
              <Icon className={`w-8 h-8 ${category.color}`} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              No places found
            </h3>
            <p className="text-sm text-slate-500">
              Be the first to add a {category.name} in this area.
            </p>
            <button
            onClick={() => navigate('/user/add-place')}
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
            
              Add Place
            </button>
          </div>
        }
      </div>
    </div>);

}