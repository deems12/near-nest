import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Settings,
  MapPin,
  Star,
  Shield,
  ChevronRight,
  LogOut } from
'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function Profile() {
  const navigate = useNavigate();
  const { currentUser, places } = useResource();
  const userPlaces = places.filter(
    (p) => p.addedBy === currentUser?.name || p.addedBy === 'Demo User'
  );
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 pb-6 shadow-sm z-10 border-b border-slate-100">
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-xl font-bold text-slate-900">Profile</h1>
          <button
            onClick={() => navigate('/user/settings')}
            className="p-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <Settings className="w-6 h-6" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-bold border-4 border-white shadow-sm">
            {currentUser?.name?.charAt(0) || 'U'}
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {currentUser?.name || 'Demo User'}
            </h2>
            <p className="text-sm text-slate-500 mb-1">demo@nearnest.app</p>
            <div className="flex items-center gap-1 text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md inline-flex">
              <Shield className="w-3 h-3" />
              Community Member
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
            <MapPin className="w-6 h-6 text-blue-500 mb-2" />
            <span className="text-2xl font-bold text-slate-900">
              {userPlaces.length}
            </span>
            <span className="text-xs font-medium text-slate-500">
              Places Added
            </span>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center">
            <Star className="w-6 h-6 text-amber-500 mb-2" />
            <span className="text-2xl font-bold text-slate-900">12</span>
            <span className="text-xs font-medium text-slate-500">
              Reviews Given
            </span>
          </div>
        </div>

        {/* Menu */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
          <button
            onClick={() => navigate('/user/my-places')}
            className="w-full flex items-center justify-between p-4 border-b border-slate-100 active:bg-slate-50">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-semibold text-slate-700">
                My Added Places
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>
          <button
            onClick={() => navigate('/user/favorites')}
            className="w-full flex items-center justify-between p-4 border-b border-slate-100 active:bg-slate-50">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center">
                <Star className="w-4 h-4" />
              </div>
              <span className="font-semibold text-slate-700">
                Favorites & Saved
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>
          <button
            onClick={() => navigate('/user/help')}
            className="w-full flex items-center justify-between p-4 active:bg-slate-50">
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-semibold text-slate-700">
                Help & Support
              </span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        <button
          onClick={() => navigate('/welcome')}
          className="w-full flex items-center justify-center gap-2 p-4 bg-red-50 text-red-600 rounded-2xl font-bold active:scale-[0.98] transition-transform">
          
          <LogOut className="w-5 h-5" />
          Log Out
        </button>
      </div>
    </div>);

}