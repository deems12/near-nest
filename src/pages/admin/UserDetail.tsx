import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Star,
  AlertTriangle,
  Shield,
  Ban } from
'lucide-react';
export function UserDetail() {
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
            User Profile
          </h1>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col items-center text-center mb-6">
          <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold mb-3">
            A
          </div>
          <h2 className="text-2xl font-bold text-slate-900">Aarav S.</h2>
          <p className="text-slate-500 mb-3">aarav@example.com</p>
          <div className="flex items-center gap-1 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            Active User
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
            <MapPin className="w-5 h-5 text-blue-500 mb-1" />
            <span className="text-xl font-bold text-slate-900">14</span>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
              Places
            </span>
          </div>
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
            <Star className="w-5 h-5 text-amber-500 mb-1" />
            <span className="text-xl font-bold text-slate-900">32</span>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
              Reviews
            </span>
          </div>
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
            <AlertTriangle className="w-5 h-5 text-red-500 mb-1" />
            <span className="text-xl font-bold text-slate-900">2</span>
            <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">
              Reports
            </span>
          </div>
        </div>

        <h3 className="font-bold text-slate-900 mb-3 ml-1">Admin Actions</h3>
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <button className="w-full flex items-center gap-3 p-4 border-b border-slate-100 hover:bg-slate-50 text-left">
            <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <div className="font-bold text-slate-900">
                Promote to Moderator
              </div>
              <div className="text-xs text-slate-500">
                Grant verification privileges
              </div>
            </div>
          </button>
          <button className="w-full flex items-center gap-3 p-4 hover:bg-red-50 text-left group transition-colors">
            <div className="w-10 h-10 rounded-full bg-red-50 group-hover:bg-red-100 flex items-center justify-center shrink-0 transition-colors">
              <Ban className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <div className="font-bold text-red-600">Suspend Account</div>
              <div className="text-xs text-red-400">
                Temporarily block access
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>);

}