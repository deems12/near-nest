import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Camera } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { RESOURCE_CATEGORIES } from '../../constants/categories';
export function EditPlace() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const place = places.find((p) => p.id === id) || places[0];
  const [selectedCategory, setSelectedCategory] = useState(place.categoryId);
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Edit Place</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Place Name
            </label>
            <input
              type="text"
              defaultValue={place.name}
              className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
            
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              {RESOURCE_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 p-3 rounded-xl border transition-all ${isSelected ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200'}`}>
                    
                    <Icon className="w-4 h-4 shrink-0" />
                    <span className="text-xs font-semibold truncate">
                      {cat.name}
                    </span>
                  </button>);

              })}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Location
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <MapPin className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                defaultValue={place.address}
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
              
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Description
            </label>
            <textarea
              rows={3}
              defaultValue={place.description}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none">
            </textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Update Photo
            </label>
            <button
              type="button"
              className="w-full h-24 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-colors">
              
              <Camera className="w-6 h-6 mb-1" />
              <span className="text-sm font-medium">
                Tap to upload new photo
              </span>
            </button>
          </div>
        </form>
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <button
          onClick={() => navigate('/system/success')}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
          
          Save Changes
        </button>
      </div>
    </div>);

}