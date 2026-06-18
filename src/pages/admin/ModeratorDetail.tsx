import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Shield,
  CheckCircle2,
  XCircle,
  Clock,
  Ban } from
'lucide-react';
export function ModeratorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-slate-900 ml-2">
            Moderator Profile
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center mb-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-16 bg-indigo-600"></div>
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-indigo-600 text-3xl font-bold mb-3 border-4 border-white shadow-md relative z-10 mt-4">
            S
          </div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 justify-center">
            Sarah Jenkins <Shield className="w-5 h-5 text-indigo-500" />
          </h2>
          <p className="text-slate-500 mb-3">sarah@nearnest.app</p>
          <div className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
            Joined Oct 2023
          </div>
        </div>

        <h3 className="font-bold text-slate-900 mb-3 ml-1">
          Verification Stats
        </h3>
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
            <CheckCircle2 className="w-5 h-5 text-green-500 mb-1" />
            <span className="text-xl font-bold text-slate-900">145</span>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
              Approved
            </span>
          </div>
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
            <XCircle className="w-5 h-5 text-red-500 mb-1" />
            <span className="text-xl font-bold text-slate-900">12</span>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
              Rejected
            </span>
          </div>
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
            <Clock className="w-5 h-5 text-amber-500 mb-1" />
            <span className="text-xl font-bold text-slate-900">4</span>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
              Pending
            </span>
          </div>
        </div>

        <button className="w-full py-4 bg-white border border-red-200 text-red-600 rounded-xl font-bold text-sm shadow-sm active:scale-[0.98] transition-transform flex items-center justify-center gap-2 hover:bg-red-50">
          <Ban className="w-4 h-4" /> Revoke Moderator Access
        </button>
      </div>
    </div>);

}