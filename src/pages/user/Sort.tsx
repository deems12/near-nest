import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
export function Sort() {
  const navigate = useNavigate();
  const [selectedSort, setSelectedSort] = useState('nearest');
  const sortOptions = [
  {
    id: 'nearest',
    label: 'Nearest First'
  },
  {
    id: 'top-rated',
    label: 'Top Rated'
  },
  {
    id: 'verified',
    label: 'Verified First'
  },
  {
    id: 'most-reviewed',
    label: 'Most Reviewed'
  },
  {
    id: 'recently-added',
    label: 'Recently Added'
  }];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-slate-900 ml-2">Sort Results</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {sortOptions.map((option, index) =>
          <button
            key={option.id}
            onClick={() => setSelectedSort(option.id)}
            className={`w-full flex items-center justify-between p-4 text-left active:bg-slate-50 ${index !== sortOptions.length - 1 ? 'border-b border-slate-100' : ''}`}>
            
              <span
              className={`font-medium ${selectedSort === option.id ? 'text-blue-600' : 'text-slate-700'}`}>
              
                {option.label}
              </span>
              {selectedSort === option.id &&
            <Check className="w-5 h-5 text-blue-600" />
            }
            </button>
          )}
        </div>
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
          
          Apply Sorting
        </button>
      </div>
    </div>);

}