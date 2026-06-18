import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipboardList, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function ModeratorDashboard() {
  const navigate = useNavigate();
  const { places } = useResource();
  const pendingCount = places.filter(
    (p) => p.verificationStatus === 'Pending'
  ).length;
  const reportedCount = places.reduce((acc, p) => acc + p.reportCount, 0);
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="p-4 pt-6 pb-4 bg-white shadow-sm z-10">
        <h1 className="text-xl font-bold text-slate-900">Moderator Hub</h1>
        <p className="text-sm text-slate-500">Your verification tasks</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {/* Action Cards */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => navigate('/moderator/tasks')}
            className="bg-indigo-600 p-4 rounded-2xl shadow-lg shadow-indigo-200 flex flex-col items-start text-white active:scale-95 transition-transform relative overflow-hidden">
            
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <ClipboardList className="w-8 h-8 mb-3" />
            <span className="text-3xl font-bold mb-1">{pendingCount}</span>
            <span className="text-sm font-medium text-indigo-100">
              Pending Tasks
            </span>
          </button>

          <button
            onClick={() => navigate('/moderator/reports')}
            className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start active:scale-95 transition-transform">
            
            <AlertTriangle className="w-8 h-8 text-amber-500 mb-3" />
            <span className="text-3xl font-bold text-slate-900 mb-1">
              {reportedCount}
            </span>
            <span className="text-sm font-medium text-slate-500">
              Active Reports
            </span>
          </button>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-slate-900">Recent Activity</h3>
            <button
              onClick={() => navigate('/moderator/history')}
              className="text-xs font-bold text-indigo-600">
              
              View All
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-slate-900">
                  <span className="font-semibold">You</span> verified{' '}
                  <span className="font-semibold">City Center Hospital</span>
                </p>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3" /> 2 hours ago
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-1">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="text-sm text-slate-900">
                  <span className="font-semibold">You</span> verified{' '}
                  <span className="font-semibold">Highway Fuel & EV</span>
                </p>
                <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                  <Clock className="w-3 h-3" /> 5 hours ago
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);

}