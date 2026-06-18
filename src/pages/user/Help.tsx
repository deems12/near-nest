import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  User,
  MapPin,
  ShieldCheck,
  AlertTriangle,
  MessageSquare,
  ChevronRight } from
'lucide-react';
export function Help() {
  const navigate = useNavigate();
  const topics = [
  {
    icon: User,
    label: 'Account & Profile',
    color: 'text-blue-600',
    bg: 'bg-blue-50'
  },
  {
    icon: MapPin,
    label: 'Adding Places',
    color: 'text-green-600',
    bg: 'bg-green-50'
  },
  {
    icon: ShieldCheck,
    label: 'Verification',
    color: 'text-indigo-600',
    bg: 'bg-indigo-50'
  },
  {
    icon: AlertTriangle,
    label: 'Emergency Mode',
    color: 'text-red-600',
    bg: 'bg-red-50'
  },
  {
    icon: MessageSquare,
    label: 'Reports & Reviews',
    color: 'text-amber-600',
    bg: 'bg-amber-50'
  }];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10">
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold ml-2">Help & Support</h1>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-sm"
            placeholder="Search for help..." />
          
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 ml-1">
          Help Topics
        </h2>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-6">
          {topics.map((topic, i) => {
            const Icon = topic.icon;
            return (
              <button
                key={i}
                onClick={() => navigate('/user/faq')}
                className="w-full flex items-center justify-between p-4 border-b border-slate-100 last:border-0 active:bg-slate-50">
                
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-xl ${topic.bg} ${topic.color} flex items-center justify-center`}>
                    
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold text-slate-700">
                    {topic.label}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-400" />
              </button>);

          })}
        </div>

        <div className="bg-blue-600 rounded-2xl p-6 text-white text-center shadow-lg shadow-blue-200">
          <h3 className="font-bold text-lg mb-2">Still need help?</h3>
          <p className="text-blue-100 text-sm mb-4">
            Our support team is ready to assist you with any issues.
          </p>
          <button
            onClick={() => navigate('/user/contact')}
            className="px-6 py-3 bg-white text-blue-600 rounded-xl font-bold text-sm active:scale-95 transition-transform">
            
            Contact Support
          </button>
        </div>
      </div>
    </div>);

}