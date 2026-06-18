import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Mail,
  Lock,
  ArrowLeft,
  Eye,
  EyeOff,
  ClipboardCheck } from
'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function ModeratorLogin() {
  const navigate = useNavigate();
  const { setCurrentRole } = useResource();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentRole('Moderator');
    navigate('/moderator/dashboard');
  };
  return (
    <div className="flex-1 bg-white flex flex-col h-full">
      <div className="p-4 flex items-center">
        <button
          onClick={() => navigate('/login')}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 px-6 pt-4 pb-8 overflow-y-auto">
        <div className="w-16 h-16 bg-indigo-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
          <ClipboardCheck className="w-8 h-8 text-indigo-300" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Moderator Portal
        </h1>
        <p className="text-slate-500 mb-8">
          Sign in to review and verify community submissions.
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Moderator ID or Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-900 focus:border-transparent outline-none transition-all"
                placeholder="moderator@nearnest.app"
                defaultValue="moderator@nearnest.app" />
              
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-900 focus:border-transparent outline-none transition-all"
                placeholder="Enter your password"
                defaultValue="modpass" />
              
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600">
                
                {showPassword ?
                <EyeOff className="h-5 w-5" /> :

                <Eye className="h-5 w-5" />
                }
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate('/forgot-password')}
              className="text-sm font-semibold text-indigo-700">
              
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-indigo-900 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 active:scale-[0.98] transition-transform mt-4">
            
            Sign In as Moderator
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Not a moderator?{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-semibold text-blue-600">
              
              Back to User Login
            </button>
          </p>
        </div>
      </div>
    </div>);

}