import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Trash2 } from
'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { VerificationBadge } from '../../components/common/VerificationBadge';
import { CategoryChip } from '../../components/common/CategoryChip';
export function AdminPlaceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const place = places.find((p) => p.id === id) || places[0];
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full relative">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-slate-900 ml-2">
            Place Details
          </h1>
        </div>
        <button className="p-2 text-red-600 hover:bg-red-50 rounded-full">
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {/* Header Info */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-4">
          <div className="flex justify-between items-start mb-3">
            <CategoryChip categoryId={place.categoryId} />
            <VerificationBadge status={place.verificationStatus} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-1">
            {place.name}
          </h2>
          <p className="text-slate-500 text-sm flex items-start gap-1 mb-4">
            <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
            {place.address}
          </p>
          <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
            {place.description}
          </div>
        </div>

        {/* Verification Status */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-4">
          <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-blue-600" />
            Verification Status
          </h3>

          <div className="space-y-3 mb-6">
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
          </div>

          {place.verificationStatus === 'Pending' &&
          <div className="flex gap-2">
              <button className="flex-1 py-3 bg-green-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-green-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5" /> Approve
              </button>
              <button className="flex-1 py-3 bg-red-50 text-red-600 rounded-xl font-bold text-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
                <XCircle className="w-5 h-5" /> Reject
              </button>
            </div>
          }
        </div>

        {/* Reports */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              Reports
            </h3>
            <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-lg">
              {place.reportCount} Total
            </span>
          </div>

          {place.reportCount > 0 ?
          <div className="space-y-3">
              <div className="p-3 bg-red-50 border border-red-100 rounded-xl">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-red-900 text-sm">
                    Fake / Doesn't Exist
                  </span>
                  <span className="text-xs text-red-700">2 days ago</span>
                </div>
                <p className="text-xs text-red-800">
                  Reported by User123. "I went there and there is nothing but an
                  empty lot."
                </p>
              </div>
            </div> :

          <p className="text-sm text-slate-500 text-center py-4">
              No reports filed against this place.
            </p>
          }
        </div>
      </div>
    </div>);

}