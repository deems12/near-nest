import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Lock, Eye, EyeOff } from 'lucide-react';
export function ChangePassword() {
  const navigate = useNavigate();
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-slate-900 ml-2">
          Change Password
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-6">
          <p className="text-sm text-slate-500 mb-4">
            Your password must be at least 8 characters long and include a mix
            of letters, numbers, and symbols.
          </p>

          <form className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Current Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type={showCurrent ? 'text' : 'password'}
                  className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Enter current password" />
                
                <button
                  type="button"
                  onClick={() => setShowCurrent(!showCurrent)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600">
                  
                  {showCurrent ?
                  <EyeOff className="h-5 w-5" /> :

                  <Eye className="h-5 w-5" />
                  }
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type={showNew ? 'text' : 'password'}
                  className="w-full pl-11 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Enter new password" />
                
                <button
                  type="button"
                  onClick={() => setShowNew(!showNew)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600">
                  
                  {showNew ?
                  <EyeOff className="h-5 w-5" /> :

                  <Eye className="h-5 w-5" />
                  }
                </button>
              </div>

              {/* Password Strength Indicator */}
              <div className="flex gap-1 mt-2">
                <div className="h-1.5 flex-1 bg-green-500 rounded-full"></div>
                <div className="h-1.5 flex-1 bg-green-500 rounded-full"></div>
                <div className="h-1.5 flex-1 bg-slate-200 rounded-full"></div>
                <div className="h-1.5 flex-1 bg-slate-200 rounded-full"></div>
              </div>
              <p className="text-xs text-slate-500 mt-1 text-right">Fair</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Confirm New Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type={showNew ? 'text' : 'password'}
                  className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Confirm new password" />
                
              </div>
            </div>
          </form>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
          
          Update Password
        </button>
      </div>
    </div>);

}