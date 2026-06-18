import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import { RESOURCE_CATEGORIES } from '../../constants/categories';
export function Filter() {
  const navigate = useNavigate();
  const [distance, setDistance] = useState(5);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const toggleCategory = (id: string) => {
    setSelectedCategories((prev) =>
    prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold ml-2">Filters</h1>
        </div>
        <button
          onClick={() => {
            setDistance(5);
            setVerifiedOnly(false);
            setSelectedCategories([]);
          }}
          className="text-sm font-semibold text-blue-600">
          
          Reset
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="mb-8">
          <h3 className="font-bold text-slate-900 mb-4">
            Distance: {distance} km
          </h3>
          <input
            type="range"
            min="1"
            max="50"
            value={distance}
            onChange={(e) => setDistance(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600" />
          
          <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
            <span>1 km</span>
            <span>50 km</span>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-bold text-slate-900 mb-4">Verification Status</h3>
          <label className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-100 shadow-sm cursor-pointer active:scale-[0.98] transition-transform">
            <div>
              <div className="font-semibold text-slate-900">
                Verified Places Only
              </div>
              <div className="text-xs text-slate-500">
                Hide pending or unverified resources
              </div>
            </div>
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${verifiedOnly ? 'bg-blue-600 border-blue-600' : 'border-slate-300'}`}>
              
              {verifiedOnly && <Check className="w-4 h-4 text-white" />}
            </div>
            <input
              type="checkbox"
              className="hidden"
              checked={verifiedOnly}
              onChange={() => setVerifiedOnly(!verifiedOnly)} />
            
          </label>
        </div>

        <div>
          <h3 className="font-bold text-slate-900 mb-4">Resource Categories</h3>
          <div className="flex flex-wrap gap-2">
            {RESOURCE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategories.includes(cat.id);
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => toggleCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${isSelected ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200' : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300'}`}>
                  
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>);

            })}
          </div>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
          
          Apply Filters
        </button>
      </div>
    </div>);

}