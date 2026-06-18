import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
export function LogoutConfirm() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-slate-900/40 backdrop-blur-sm flex flex-col h-full items-center justify-center p-4">
      <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mb-4 mx-auto">
          <LogOut className="w-8 h-8 text-red-600 ml-1" />
        </div>

        <h2 className="text-xl font-bold text-slate-900 text-center mb-2">
          Log Out?
        </h2>
        <p className="text-slate-500 text-center text-sm mb-8">
          Are you sure you want to log out? You will need to sign in again to
          add or verify places.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={() => navigate('/welcome')}
            className="w-full py-3.5 bg-red-600 text-white rounded-xl font-bold shadow-lg shadow-red-200 active:scale-[0.98] transition-transform">
            
            Yes, Log Out
          </button>
          <button
            onClick={() => navigate(-1)}
            className="w-full py-3.5 bg-slate-100 text-slate-700 rounded-xl font-bold active:scale-[0.98] transition-transform">
            
            Cancel
          </button>
        </div>
      </div>
    </div>);

}