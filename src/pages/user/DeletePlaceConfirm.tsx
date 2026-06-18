import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { PlaceCard } from '../../components/common/PlaceCard';
export function DeletePlaceConfirm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const place = places.find((p) => p.id === id) || places[0];
  return (
    <div className="flex-1 bg-slate-900/40 backdrop-blur-sm flex flex-col h-full items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 mx-auto">
          <AlertTriangle className="w-8 h-8 text-red-600" />
        </div>

        <h2 className="text-xl font-bold text-slate-900 text-center mb-2">
          Delete Place?
        </h2>
        <p className="text-slate-500 text-center text-sm mb-6">
          Are you sure you want to delete this place? This action cannot be
          undone and will remove it for all users.
        </p>

        <div className="mb-6 pointer-events-none opacity-80">
          <PlaceCard place={place} />
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate(-1)}
            className="flex-1 py-3.5 bg-slate-100 text-slate-700 rounded-xl font-bold active:scale-[0.98] transition-transform">
            
            Cancel
          </button>
          <button
            onClick={() => navigate('/system/success')}
            className="flex-1 py-3.5 bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-200 active:scale-[0.98] transition-transform">
            
            Delete
          </button>
        </div>
      </div>
    </div>);

}