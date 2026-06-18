import React from 'react';
import {
  Home,
  Search,
  PlusCircle,
  AlertTriangle,
  User as UserIcon } from
'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
export function UserBottomNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const tabs = [
  {
    id: 'home',
    icon: Home,
    label: 'Home',
    path: '/user/home'
  },
  {
    id: 'search',
    icon: Search,
    label: 'Search',
    path: '/user/search'
  },
  {
    id: 'add',
    icon: PlusCircle,
    label: 'Add',
    path: '/user/add-place'
  },
  {
    id: 'emergency',
    icon: AlertTriangle,
    label: 'Emergency',
    path: '/emergency',
    isEmergency: true
  },
  {
    id: 'profile',
    icon: UserIcon,
    label: 'Profile',
    path: '/user/profile'
  }];

  return (
    <div className="bg-white border-t border-gray-100 px-6 py-2 flex justify-between items-center shrink-0 pb-8 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] z-40 relative">
      {tabs.map((tab) => {
        const isActive =
        location.pathname.startsWith(tab.path) ||
        tab.id === 'home' && location.pathname === '/user/home/list';
        return (
          <button
            key={tab.id}
            onClick={() => navigate(tab.path)}
            className={`flex flex-col items-center gap-1 transition-colors ${tab.isEmergency ? 'text-red-500' : isActive ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'}`}>
            
            <div
              className={`p-1.5 rounded-xl transition-all ${tab.isEmergency ? 'bg-red-50 shadow-sm' : isActive ? 'bg-blue-50' : ''}`}>
              
              <tab.icon
                className={`w-6 h-6 ${tab.isEmergency && isActive ? 'fill-red-100' : isActive && !tab.isEmergency ? 'fill-blue-100' : ''}`}
                strokeWidth={isActive ? 2.5 : 2} />
              
            </div>
            <span
              className={`text-[10px] ${isActive ? 'font-semibold' : 'font-medium'}`}>
              
              {tab.label}
            </span>
          </button>);

      })}
    </div>);

}