import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Bell,
  MapPin,
  AlertTriangle,
  Star,
  Megaphone } from
'lucide-react';
export function NotificationSettings() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    verification: true,
    nearby: true,
    emergency: true,
    reviews: false,
    promo: false
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
        <h1 className="text-xl font-bold text-slate-900 ml-2">Notifications</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-blue-500" />
              <div>
                <div className="font-medium text-slate-700">
                  Verification Updates
                </div>
                <div className="text-xs text-slate-500">
                  When your added places are approved
                </div>
              </div>
            </div>
            <button
              onClick={() => toggle('verification')}
              className={`w-11 h-6 rounded-full relative transition-colors ${settings.verification ? 'bg-blue-600' : 'bg-slate-200'}`}>
              
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.verification ? 'right-1' : 'left-1 shadow-sm'}`}>
              </div>
            </button>
          </div>

          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-green-500" />
              <div>
                <div className="font-medium text-slate-700">Nearby Alerts</div>
                <div className="text-xs text-slate-500">
                  New resources added near you
                </div>
              </div>
            </div>
            <button
              onClick={() => toggle('nearby')}
              className={`w-11 h-6 rounded-full relative transition-colors ${settings.nearby ? 'bg-blue-600' : 'bg-slate-200'}`}>
              
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.nearby ? 'right-1' : 'left-1 shadow-sm'}`}>
              </div>
            </button>
          </div>

          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <div>
                <div className="font-medium text-slate-700">
                  Emergency Alerts
                </div>
                <div className="text-xs text-slate-500">
                  Critical updates in your area
                </div>
              </div>
            </div>
            <button
              onClick={() => toggle('emergency')}
              className={`w-11 h-6 rounded-full relative transition-colors ${settings.emergency ? 'bg-blue-600' : 'bg-slate-200'}`}>
              
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.emergency ? 'right-1' : 'left-1 shadow-sm'}`}>
              </div>
            </button>
          </div>

          <div className="p-4 border-b border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-amber-500" />
              <div>
                <div className="font-medium text-slate-700">New Reviews</div>
                <div className="text-xs text-slate-500">
                  When someone reviews your places
                </div>
              </div>
            </div>
            <button
              onClick={() => toggle('reviews')}
              className={`w-11 h-6 rounded-full relative transition-colors ${settings.reviews ? 'bg-blue-600' : 'bg-slate-200'}`}>
              
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.reviews ? 'right-1' : 'left-1 shadow-sm'}`}>
              </div>
            </button>
          </div>

          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Megaphone className="w-5 h-5 text-purple-500" />
              <div>
                <div className="font-medium text-slate-700">Promotional</div>
                <div className="text-xs text-slate-500">
                  App updates and community news
                </div>
              </div>
            </div>
            <button
              onClick={() => toggle('promo')}
              className={`w-11 h-6 rounded-full relative transition-colors ${settings.promo ? 'bg-blue-600' : 'bg-slate-200'}`}>
              
              <div
                className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${settings.promo ? 'right-1' : 'left-1 shadow-sm'}`}>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>);

}