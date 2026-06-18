import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  Filter,
  Shield,
  User,
  MoreVertical } from
'lucide-react';
export function ManageUsers() {
  const navigate = useNavigate();
  const mockUsers = [
  {
    id: 'u1',
    name: 'Aarav S.',
    email: 'aarav@example.com',
    role: 'User',
    placesAdded: 12,
    status: 'Active'
  },
  {
    id: 'u2',
    name: 'Priya M.',
    email: 'priya@example.com',
    role: 'User',
    placesAdded: 5,
    status: 'Active'
  },
  {
    id: 'u3',
    name: 'John D.',
    email: 'john@example.com',
    role: 'Moderator',
    placesAdded: 45,
    status: 'Active'
  },
  {
    id: 'u4',
    name: 'SpamBot',
    email: 'spam@example.com',
    role: 'User',
    placesAdded: 0,
    status: 'Suspended'
  }];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10">
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-slate-900 ml-2">
            Manage Users
          </h1>
        </div>

        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            
          </div>
          <button className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 flex items-center gap-2">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="flex flex-col gap-3">
          {mockUsers.map((user) =>
          <div
            key={user.id}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
            
              <div className="flex items-center gap-3">
                <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${user.role === 'Moderator' ? 'bg-indigo-500' : 'bg-blue-500'}`}>
                
                  {user.name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-slate-900 text-sm">
                      {user.name}
                    </h3>
                    {user.role === 'Moderator' &&
                  <Shield className="w-3 h-3 text-indigo-500" />
                  }
                    {user.status === 'Suspended' &&
                  <span className="text-[10px] bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold">
                        Suspended
                      </span>
                  }
                  </div>
                  <p className="text-xs text-slate-500">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <div className="text-xs font-bold text-slate-900">
                    {user.placesAdded}
                  </div>
                  <div className="text-[10px] text-slate-500">Places</div>
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

}