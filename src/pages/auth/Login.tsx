import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function Login() {
  const navigate = useNavigate();
  const { setCurrentRole } = useResource();
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentRole('User');
    navigate('/user/home');
  };
  return (
    <div className="flex-1 bg-white flex flex-col h-full">
      <div className="p-4 flex items-center">
        <button
          onClick={() => navigate('/welcome')}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 px-6 pt-4 pb-8 overflow-y-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome Back</h1>
        <p className="text-slate-500 mb-8">Sign in to continue to NEAR NEST.</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              User ID or Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="Enter your email"
                defaultValue="demo@nearnest.app" />
              
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
                className="w-full pl-11 pr-12 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="Enter your password"
                defaultValue="password123" />
              
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
              className="text-sm font-semibold text-blue-600">
              
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform mt-4">
            
            Log In
          </button>
        </form>

        <div className="mt-8">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-500">Demo Access</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/admin-login')}
              className="py-3 border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 text-sm">
              
              Admin Login
            </button>
            <button
              onClick={() => navigate('/moderator-login')}
              className="py-3 border border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 text-sm">
              
              Moderator Login
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/register')}
              className="font-semibold text-blue-600">
              
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>);

}