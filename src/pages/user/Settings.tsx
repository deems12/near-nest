import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Bell, Lock, MapPin, ChevronRight, Moon } from 'lucide-react';
export function Settings() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-slate-900 ml-2">Settings</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-2">
            Account
          </h3>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <button className="w-full flex items-center justify-between p-4 border-b border-slate-100 active:bg-slate-50">
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-slate-400" />
                <span className="font-medium text-slate-700">
                  Change Password
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
            <button className="w-full flex items-center justify-between p-4 active:bg-slate-50">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-slate-400" />
                <span className="font-medium text-slate-700">
                  Privacy Settings
                </span>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-2">
            Preferences
          </h3>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="w-full flex items-center justify-between p-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-slate-400" />
                <span className="font-medium text-slate-700">
                  Push Notifications
                </span>
              </div>
              <div className="w-11 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between p-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-slate-400" />
                <span className="font-medium text-slate-700">
                  Location Services
                </span>
              </div>
              <div className="w-11 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="w-full flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Moon className="w-5 h-5 text-slate-400" />
                <span className="font-medium text-slate-700">Dark Mode</span>
              </div>
              <div className="w-11 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-2">
            About
          </h3>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <button
              onClick={() => navigate('/terms')}
              className="w-full flex items-center justify-between p-4 border-b border-slate-100 active:bg-slate-50">
              
              <span className="font-medium text-slate-700">
                Terms & Privacy Policy
              </span>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </button>
            <div className="w-full flex items-center justify-between p-4">
              <span className="font-medium text-slate-700">App Version</span>
              <span className="text-sm text-slate-400">v1.0.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>);

}
// Quick mock for Shield icon used above
function Shield(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>);

}