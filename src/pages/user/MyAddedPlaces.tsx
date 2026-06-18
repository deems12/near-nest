import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Edit2, Trash2 } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { CategoryChip } from '../../components/common/CategoryChip';
import { VerificationBadge } from '../../components/common/VerificationBadge';
export function MyAddedPlaces() {
  const navigate = useNavigate();
  const { places, currentUser } = useResource();
  const myPlaces = places.filter(
    (p) => p.addedBy === currentUser?.name || p.addedBy === 'Demo User'
  );
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate('/user/profile')}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-slate-900 ml-2">
          My Added Places
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {myPlaces.length > 0 ?
        <div className="flex flex-col gap-4">
            {myPlaces.map((place) =>
          <div
            key={place.id}
            className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            
                <div className="flex justify-between items-start mb-3">
                  <CategoryChip categoryId={place.categoryId} />
                  <VerificationBadge status={place.verificationStatus} />
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-1">
                  {place.name}
                </h3>
                <p className="text-slate-500 text-sm flex items-start gap-1 mb-4">
                  <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                  {place.address}
                </p>

                <div className="flex gap-2 pt-3 border-t border-slate-100">
                  <button
                onClick={() => navigate(`/user/edit-place/${place.id}`)}
                className="flex-1 py-2 bg-slate-50 text-slate-700 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-100">
                
                    <Edit2 className="w-4 h-4" /> Edit
                  </button>
                  <button
                onClick={() => navigate(`/user/delete-place/${place.id}`)}
                className="flex-1 py-2 bg-red-50 text-red-600 rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-red-100">
                
                    <Trash2 className="w-4 h-4" /> Delete
                  </button>
                </div>
              </div>
          )}
          </div> :

        <div className="text-center py-12">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              No places added yet
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Help the community by adding nearby resources.
            </p>
            <button
            onClick={() => navigate('/user/add-place')}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
            
              Add a Place
            </button>
          </div>
        }
      </div>
    </div>);

}