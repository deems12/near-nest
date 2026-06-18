import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Bell,
  CheckCircle2,
  AlertTriangle,
  Shield } from
'lucide-react';
export function Notifications() {
  const navigate = useNavigate();
  const notifications = [
  {
    id: 1,
    type: 'success',
    title: 'Place Verified!',
    message:
    'Your submission for "City Public Restroom" has been verified by a moderator.',
    time: '2 hours ago',
    icon: CheckCircle2,
    color: 'text-green-600',
    bg: 'bg-green-100'
  },
  {
    id: 2,
    type: 'alert',
    title: 'Emergency Alert',
    message:
    'Heavy rainfall reported in your area. Nearest shelters are open.',
    time: '5 hours ago',
    icon: AlertTriangle,
    color: 'text-red-600',
    bg: 'bg-red-100'
  },
  {
    id: 3,
    type: 'info',
    title: 'Community Update',
    message:
    'You earned the "Helpful Explorer" badge for adding 5 verified places!',
    time: '1 day ago',
    icon: Shield,
    color: 'text-blue-600',
    bg: 'bg-blue-100'
  }];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold ml-2">Notifications</h1>
        </div>
        <button className="text-sm font-semibold text-blue-600">
          Mark all read
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="flex flex-col gap-3">
          {notifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div
                key={notif.id}
                className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4 active:scale-[0.98] transition-transform cursor-pointer">
                
                <div
                  className={`w-12 h-12 rounded-full ${notif.bg} ${notif.color} flex items-center justify-center shrink-0`}>
                  
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 text-sm mb-1">
                    {notif.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-snug mb-2">
                    {notif.message}
                  </p>
                  <span className="text-xs font-medium text-slate-400">
                    {notif.time}
                  </span>
                </div>
              </div>);

          })}
        </div>
      </div>
    </div>);

}