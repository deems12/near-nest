import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, XCircle, MapPin } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { CategoryChip } from '../../components/common/CategoryChip';
export function ModeratorTasks() {
  const navigate = useNavigate();
  const { places } = useResource();
  const pendingPlaces = places.filter((p) => p.verificationStatus === 'Pending');
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center">
        <button
          onClick={() => navigate('/moderator/dashboard')}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-slate-900 ml-2">
          Verification Tasks
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {pendingPlaces.length > 0 ?
        <div className="flex flex-col gap-4">
            {pendingPlaces.map((place) =>
          <div
            key={place.id}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            
                <div className="h-32 bg-slate-200 relative">
                  <img
                src={`https://source.unsplash.com/random/400x200?${place.categoryId}`}
                alt=""
                className="w-full h-full object-cover" />
              
                  <div className="absolute top-2 right-2">
                    <CategoryChip
                  categoryId={place.categoryId}
                  className="bg-white/90 backdrop-blur-sm shadow-sm" />
                
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-slate-900 text-lg mb-1">
                    {place.name}
                  </h3>
                  <p className="text-sm text-slate-500 flex items-start gap-1 mb-3">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                    {place.address}
                  </p>

                  <div className="text-xs text-slate-500 mb-4 bg-slate-50 p-2 rounded-lg">
                    Submitted by{' '}
                    <span className="font-semibold text-slate-700">
                      {place.addedBy}
                    </span>{' '}
                    • {place.timeline[0]?.date}
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 py-3 bg-green-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-green-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Approve
                    </button>
                    <button className="flex-1 py-3 bg-red-50 text-red-600 rounded-xl font-bold text-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
                      <XCircle className="w-5 h-5" /> Reject
                    </button>
                  </div>
                </div>
              </div>
          )}
          </div> :

        <div className="text-center py-12">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              All caught up!
            </h3>
            <p className="text-sm text-slate-500">
              There are no pending places to verify.
            </p>
          </div>
        }
      </div>
    </div>);

}