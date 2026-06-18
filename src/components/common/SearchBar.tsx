import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
export function SearchBar({
  onClick,
  readOnly = false,
  autoFocus = false




}: {onClick?: () => void;readOnly?: boolean;autoFocus?: boolean;}) {
  const navigate = useNavigate();
  return (
    <div className="flex gap-2 w-full">
      <div className="flex-1 relative" onClick={onClick}>
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-slate-400" />
        </div>
        <input
          type="text"
          readOnly={readOnly}
          autoFocus={autoFocus}
          className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm font-medium"
          placeholder="Search resources, places..." />
        
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          navigate('/user/filter');
        }}
        className="w-12 h-[52px] bg-white border border-slate-200 rounded-2xl shadow-sm flex items-center justify-center text-slate-600 hover:bg-slate-50 active:scale-95 transition-all">
        
        <SlidersHorizontal className="w-5 h-5" />
      </button>
    </div>);

}