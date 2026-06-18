import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function PlacePhotos() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const place = places.find((p) => p.id === id) || places[0];
  // Generate some mock photos based on category
  const mockPhotos = Array.from({
    length: 8
  }).map(
    (_, i) =>
    `https://source.unsplash.com/random/400x400?${place.categoryId}&sig=${i}`
  );
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-slate-900 ml-2">Photos</h1>
        </div>
        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-full">
          <Camera className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-1 pb-24">
        <div className="grid grid-cols-2 gap-1">
          {mockPhotos.map((url, i) =>
          <div
            key={i}
            className="aspect-square bg-slate-200 relative group cursor-pointer">
            
              <img
              src={url}
              alt={`Photo ${i + 1}`}
              className="w-full h-full object-cover" />
            
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          )}
        </div>
      </div>
    </div>);

}