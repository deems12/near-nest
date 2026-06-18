import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Shield, Plus, MoreVertical } from 'lucide-react';
export function ManageModerators() {
  const navigate = useNavigate();
  const moderators = [
  {
    id: 'm1',
    name: 'Sarah Jenkins',
    email: 'sarah@nearnest.app',
    approved: 145,
    rejected: 12
  },
  {
    id: 'm2',
    name: 'Mike Chen',
    email: 'mike@nearnest.app',
    approved: 89,
    rejected: 5
  },
  {
    id: 'm3',
    name: 'Priya Patel',
    email: 'priya@nearnest.app',
    approved: 234,
    rejected: 41
  }];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
              
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-slate-900 ml-2">
              Moderators
            </h1>
          </div>
          <button className="bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold flex items-center gap-1 shadow-sm">
            <Plus className="w-4 h-4" /> Invite
          </button>
        </div>

        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search moderators..."
            className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none" />
          
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="flex flex-col gap-3">
          {moderators.map((mod) =>
          <div
            key={mod.id}
            onClick={() => navigate(`/admin/moderator/${mod.id}`)}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3 cursor-pointer active:scale-[0.98] transition-transform">
            
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold shrink-0">
                {mod.name.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="font-bold text-slate-900 truncate">
                    {mod.name}
                  </h3>
                  <Shield className="w-3 h-3 text-indigo-500 shrink-0" />
                </div>
                <p className="text-xs text-slate-500 truncate mb-1.5">
                  {mod.email}
                </p>
                <div className="flex gap-3 text-[10px] font-bold">
                  <span className="text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                    {mod.approved} Approved
                  </span>
                  <span className="text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
                    {mod.rejected} Rejected
                  </span>
                </div>
              </div>
              <button
              className="p-2 text-slate-400 hover:bg-slate-50 rounded-full"
              onClick={(e) => e.stopPropagation()}>
              
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>);

}