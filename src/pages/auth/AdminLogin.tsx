import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowLeft, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function AdminLogin() {
  const navigate = useNavigate();
  const { setCurrentRole } = useResource();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentRole('Admin');
    navigate('/admin/dashboard');
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
        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
          <ShieldCheck className="w-8 h-8 text-blue-400" />
        </div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Portal</h1>
        <p className="text-slate-500 mb-8">
          Sign in with your administrator credentials.
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Admin ID or Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                placeholder="admin@nearnest.app"
                defaultValue="admin@nearnest.app" />
              
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
                className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all"
                placeholder="Enter your password"
                defaultValue="adminpass" />
              
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
              className="text-sm font-semibold text-slate-700">
              
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold text-lg shadow-lg shadow-slate-200 active:scale-[0.98] transition-transform mt-4">
            
            Sign In as Admin
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Not an admin?{' '}
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