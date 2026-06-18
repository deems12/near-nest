import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  MapPin,
  MessageSquare } from
'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { CategoryChip } from '../../components/common/CategoryChip';
export function TaskDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const place = places.find((p) => p.id === id) || places[0];
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-slate-900 ml-2">Review Task</h1>
        </div>
        <button
          onClick={() => navigate(`/moderator/comments/${id}`)}
          className="p-2 text-indigo-600 bg-indigo-50 rounded-full relative">
          
          <MessageSquare className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-32">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
          <div className="h-40 bg-slate-200 relative">
            <img
              src={`https://source.unsplash.com/random/800x400?${place.categoryId}`}
              alt=""
              className="w-full h-full object-cover" />
            
            <div className="absolute top-3 right-3">
              <CategoryChip
                categoryId={place.categoryId}
                className="bg-white/90 backdrop-blur-sm shadow-sm" />
              
            </div>
          </div>

          <div className="p-4">
            <h2 className="text-xl font-bold text-slate-900 mb-1">
              {place.name}
            </h2>
            <p className="text-sm text-slate-500 flex items-start gap-1 mb-4">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              {place.address}
            </p>

            <div className="bg-indigo-50 p-3 rounded-xl border border-indigo-100 text-sm mb-4">
              <span className="text-indigo-700">Submitted by:</span>{' '}
              <span className="font-bold text-indigo-900">{place.addedBy}</span>
              <br />
              <span className="text-indigo-700">Date:</span>{' '}
              <span className="font-medium text-indigo-900">
                {place.timeline[0]?.date}
              </span>
            </div>

            <h3 className="font-bold text-slate-900 mb-2">Description</h3>
            <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
              {place.description || 'No description provided.'}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-6">
          <h3 className="font-bold text-slate-900 mb-3">
            Verification Checklist
          </h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
              
              <span className="text-sm font-medium text-slate-700">
                Location is accurate
              </span>
            </label>
            <label className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
              
              <span className="text-sm font-medium text-slate-700">
                Category matches resource
              </span>
            </label>
            <label className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
              
              <span className="text-sm font-medium text-slate-700">
                Not a duplicate entry
              </span>
            </label>
            <label className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
              
              <span className="text-sm font-medium text-slate-700">
                Photos are valid
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-100 flex gap-3 z-20">
        <button
          onClick={() => navigate(`/moderator/reject/${id}`)}
          className="flex-1 py-4 bg-red-50 text-red-600 rounded-xl font-bold text-lg active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
          
          <XCircle className="w-5 h-5" /> Reject
        </button>
        <button
          onClick={() => navigate(`/moderator/approve/${id}`)}
          className="flex-1 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
          
          <CheckCircle2 className="w-5 h-5" /> Approve
        </button>
      </div>
    </div>);

}