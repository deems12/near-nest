import React, { useState } from 'react';
import { useResource } from '../../context/ResourceContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { Settings } from 'lucide-react';
export function DevRoleSwitcher() {
  const { currentRole, setCurrentRole } = useResource();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  // Don't show on auth screens
  if (
  ['/splash', '/welcome', '/login', '/register'].includes(location.pathname))
  {
    return null;
  }
  const handleRoleChange = (role: 'User' | 'Admin' | 'Moderator') => {
    setCurrentRole(role);
    setIsOpen(false);
    if (role === 'User') navigate('/user/home');
    if (role === 'Admin') navigate('/admin/dashboard');
    if (role === 'Moderator') navigate('/moderator/dashboard');
  };
  return (
    <div className="fixed bottom-4 right-4 z-[100]">
      {isOpen ?
      <div className="bg-white p-3 rounded-xl shadow-2xl border border-gray-200 flex flex-col gap-2 min-w-[150px]">
          <div className="flex justify-between items-center mb-1">
            <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
              Switch Role
            </div>
            <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600">
            
              ×
            </button>
          </div>
          {(['User', 'Admin', 'Moderator'] as const).map((role) =>
        <button
          key={role}
          onClick={() => handleRoleChange(role)}
          className={`px-3 py-2 text-sm rounded-md font-medium text-left transition-colors ${currentRole === role ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'}`}>
          
              {role}
            </button>
        )}
        </div> :

      <button
        onClick={() => setIsOpen(true)}
        className="bg-slate-800 text-white p-3 rounded-full shadow-lg hover:bg-slate-700 transition-colors flex items-center justify-center">
        
          <Settings className="w-5 h-5" />
        </button>
      }
    </div>);

}