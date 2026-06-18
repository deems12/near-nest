import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Navigation, Star, Clock } from 'lucide-react';
import { Place } from '../../types';
import { VerificationBadge } from './VerificationBadge';
import { CategoryChip } from './CategoryChip';
export function PlaceCard({
  place,
  onClick



}: {place: Place;onClick?: () => void;}) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) onClick();else
    navigate(`/user/place/${place.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 active:scale-[0.98] transition-transform cursor-pointer">
      
      <div className="flex justify-between items-start mb-3">
        <CategoryChip categoryId={place.categoryId} />
        <VerificationBadge status={place.verificationStatus} />
      </div>

      <h3 className="font-bold text-slate-900 text-lg mb-1 leading-tight">
        {place.name}
      </h3>
      <p className="text-slate-500 text-sm flex items-start gap-1 mb-3 line-clamp-1">
        <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
        {place.address}
      </p>

      <div className="flex items-center gap-4 text-xs font-medium text-slate-600 mb-4">
        {place.rating > 0 ?
        <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-slate-700">{place.rating}</span>
            <span className="text-slate-400 font-normal">
              ({place.reviewCount})
            </span>
          </div> :

        <div className="text-slate-400">No reviews yet</div>
        }
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-slate-400" />
          {place.isOpen ?
          <span className="text-green-600">Open</span> :

          <span className="text-red-500">Closed</span>
          }
        </div>
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-slate-100">
        <div className="text-xs text-slate-500">
          Added by{' '}
          <span className="font-semibold text-slate-700">{place.addedBy}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/user/navigate/route/${place.id}`);
          }}
          className="flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors">
          
          <Navigation className="w-3.5 h-3.5" />
          {place.distance}
        </button>
      </div>
    </div>);

}