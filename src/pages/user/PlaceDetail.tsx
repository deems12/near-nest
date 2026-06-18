import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Share2,
  Heart,
  Navigation,
  MapPin,
  Clock,
  Star,
  AlertTriangle,
  ShieldCheck } from
'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { VerificationBadge } from '../../components/common/VerificationBadge';
import { CategoryChip } from '../../components/common/CategoryChip';
export function PlaceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const place = places.find((p) => p.id === id) || places[0];
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full relative">
      {/* Header Image */}
      <div className="h-64 bg-slate-200 relative shrink-0">
        <img
          src={`https://source.unsplash.com/random/800x600?${place.categoryId}`}
          alt=""
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60"></div>

        <div className="absolute top-0 left-0 right-0 p-4 pt-6 flex justify-between items-center z-10">
          <button
            onClick={() => navigate(-1)}
            className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-2">
            <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="flex gap-2 mb-2">
            <CategoryChip
              categoryId={place.categoryId}
              className="bg-white/90 backdrop-blur-sm" />
            
            <VerificationBadge
              status={place.verificationStatus}
              className="bg-white/90 backdrop-blur-sm" />
            
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">{place.name}</h1>
          <p className="text-white/90 text-sm flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {place.address}
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-32">
        {/* Quick Actions */}
        <div className="bg-white p-4 flex gap-3 border-b border-slate-100">
          <button
            onClick={() => navigate(`/user/navigate/route/${place.id}`)}
            className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
            
            <Navigation className="w-4 h-4" />
            Navigate ({place.distance})
          </button>
          <button
            onClick={() => navigate(`/user/report/${place.id}`)}
            className="px-4 py-3 bg-red-50 text-red-600 rounded-xl font-bold text-sm active:scale-[0.98] transition-transform flex items-center justify-center">
            
            <AlertTriangle className="w-4 h-4" />
          </button>
        </div>

        {/* Info Cards */}
        <div className="p-4 flex flex-col gap-4">
          {/* Status & Rating */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex divide-x divide-slate-100">
            <div className="flex-1 flex flex-col items-center justify-center px-2">
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-lg font-bold text-slate-900">
                  {place.rating > 0 ? place.rating : '-'}
                </span>
              </div>
              <span className="text-xs text-slate-500">
                {place.reviewCount} Reviews
              </span>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-2">
              <Clock
                className={`w-5 h-5 mb-1 ${place.isOpen ? 'text-green-500' : 'text-red-500'}`} />
              
              <span
                className={`text-sm font-bold ${place.isOpen ? 'text-green-600' : 'text-red-600'}`}>
                
                {place.isOpen ? 'Open Now' : 'Closed'}
              </span>
              <span className="text-xs text-slate-500">Closes at 10 PM</span>
            </div>
          </div>

          {/* Verification Info */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              Verification Details
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Added by</span>
                <span className="font-semibold text-slate-900">
                  {place.addedBy}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-500">Verified by</span>
                <span className="font-semibold text-slate-900">
                  {place.verifiedBy || '—'}
                </span>
              </div>

              {/* Timeline */}
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                  Timeline
                </div>
                <div className="relative pl-4 space-y-4 border-l-2 border-slate-200 ml-2">
                  {place.timeline.map((event, i) =>
                  <div key={i} className="relative">
                      <div
                      className={`absolute -left-[21px] w-3 h-3 rounded-full border-2 border-white ${event.status === 'Verified' ? 'bg-blue-500' : 'bg-amber-500'}`}>
                    </div>
                      <div className="text-sm font-semibold text-slate-900">
                        {event.status}
                      </div>
                      <div className="text-xs text-slate-500">{event.date}</div>
                      {event.note &&
                    <div className="text-xs text-slate-600 mt-1 bg-slate-50 p-2 rounded-lg">
                          {event.note}
                        </div>
                    }
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-2">About</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {place.description}
            </p>
          </div>
        </div>
      </div>
    </div>);

}