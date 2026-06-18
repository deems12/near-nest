import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, MapPin, BarChart2 } from 'lucide-react';
export function PrivacySettings() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    publicProfile: true,
    showAddedPlaces: true,
    shareLocation: false,
    dataAnalytics: true
  });
  const toggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-slate-900 ml-2">
          Privacy Settings
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 flex items-start gap-3">
          <Shield className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-blue-900 text-sm mb-1">
              Your Data, Your Control
            </h3>
            <p className="text-xs text-blue-700">
              Manage how your information is shared with the NEAR NEST
              community.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Eye className="w-5 h-5 text-slate-400" />
              <div>
                <div className="font-medium text-slate-700">Public Profile</div>
                <div className="text-xs text-slate-500">
                  Allow others to see your profile
                </div>
              </div>
            </div>
            <button
              onClick={() => toggle('publicProfile')}
              className={`w-11 h-6 rounded-full relative transition-colors ${settings.publicProfile ? 'bg-blue-600' : 'bg-slate-200'}`}>
              
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.publicProfile ? 'right-1' : 'left-1 shadow-sm'}`}>
              </div>
            </button>
          </div>

          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-slate-400" />
              <div>
                <div className="font-medium text-slate-700">
                  Show Added Places
                </div>
                <div className="text-xs text-slate-500">
                  Display places you've contributed
                </div>
              </div>
            </div>
            <button
              onClick={() => toggle('showAddedPlaces')}
              className={`w-11 h-6 rounded-full relative transition-colors ${settings.showAddedPlaces ? 'bg-blue-600' : 'bg-slate-200'}`}>
              
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.showAddedPlaces ? 'right-1' : 'left-1 shadow-sm'}`}>
              </div>
            </button>
          </div>

          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-slate-400" />
              <div>
                <div className="font-medium text-slate-700">Share Location</div>
                <div className="text-xs text-slate-500">
                  Share precise location with community
                </div>
              </div>
            </div>
            <button
              onClick={() => toggle('shareLocation')}
              className={`w-11 h-6 rounded-full relative transition-colors ${settings.shareLocation ? 'bg-blue-600' : 'bg-slate-200'}`}>
              
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.shareLocation ? 'right-1' : 'left-1 shadow-sm'}`}>
              </div>
            </button>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <BarChart2 className="w-5 h-5 text-slate-400" />
              <div>
                <div className="font-medium text-slate-700">Data Analytics</div>
                <div className="text-xs text-slate-500">
                  Help us improve by sharing usage data
                </div>
              </div>
            </div>
            <button
              onClick={() => toggle('dataAnalytics')}
              className={`w-11 h-6 rounded-full relative transition-colors ${settings.dataAnalytics ? 'bg-blue-600' : 'bg-slate-200'}`}>
              
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.dataAnalytics ? 'right-1' : 'left-1 shadow-sm'}`}>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>);

}