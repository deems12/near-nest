import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon, ArrowLeft, History, X } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { PlaceCard } from '../../components/common/PlaceCard';
import { RESOURCE_CATEGORIES } from '../../constants/categories';
export function Search() {
  const navigate = useNavigate();
  const { places } = useResource();
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const recentSearches = ['Hospital', 'Drinking Water', 'Fuel Station'];
  const results = query ?
  places.filter(
    (p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.categoryId.includes(query.toLowerCase())
  ) :
  [];
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
  };
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex gap-3 items-center">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full shrink-0">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <form onSubmit={handleSearch} className="flex-1 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsSearching(false);
            }}
            className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm font-medium"
            placeholder="Search resources, places..." />
          
          {query &&
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setIsSearching(false);
            }}
            className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600">
            
              <X className="h-5 w-5" />
            </button>
          }
        </form>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {!query && !isSearching ?
        <>
            <div className="mb-6">
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Recent Searches
              </h3>
              <div className="flex flex-col gap-2">
                {recentSearches.map((term, i) =>
              <button
                key={i}
                onClick={() => {
                  setQuery(term);
                  setIsSearching(true);
                }}
                className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 text-left active:scale-[0.98] transition-transform">
                
                    <History className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-medium text-slate-700">
                      {term}
                    </span>
                  </button>
              )}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-3">
                Browse Categories
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {RESOURCE_CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => navigate(`/user/category/${cat.id}`)}
                    className={`flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 text-left active:scale-[0.98] transition-transform`}>
                    
                      <div
                      className={`w-8 h-8 rounded-lg ${cat.bg} ${cat.color} flex items-center justify-center shrink-0`}>
                      
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-semibold text-slate-700 truncate">
                        {cat.name}
                      </span>
                    </button>);

              })}
              </div>
            </div>
          </> :

        <div>
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-lg font-bold text-slate-900">
                Search Results
              </h2>
              <span className="text-sm text-slate-500 font-medium">
                {results.length} found
              </span>
            </div>

            {results.length > 0 ?
          <div className="flex flex-col gap-4">
                {results.map((place) =>
            <PlaceCard key={place.id} place={place} />
            )}
              </div> :

          <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SearchIcon className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  No results found
                </h3>
                <p className="text-sm text-slate-500">
                  Try adjusting your search or browse categories.
                </p>
              </div>
          }
          </div>
        }
      </div>
    </div>);

}