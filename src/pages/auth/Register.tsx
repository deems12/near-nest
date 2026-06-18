import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, User, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function Register() {
  const navigate = useNavigate();
  const { setCurrentRole } = useResource();
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e: React.FormEvent) => {
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

      <div className="flex-1 px-6 pt-2 pb-8 overflow-y-auto no-scrollbar">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Create Account
        </h1>
        <p className="text-slate-500 mb-8">
          Join the community and help others find resources.
        </p>

        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="Enter your name" />
              
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="email"
                className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="Enter your email" />
              
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
                placeholder="Create a password" />
              
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

          <div className="flex items-start gap-3 mt-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
            
            <label
              htmlFor="terms"
              className="text-sm text-slate-600 leading-tight">
              
              I agree to the{' '}
              <button
                type="button"
                onClick={() => navigate('/terms')}
                className="text-blue-600 font-semibold">
                
                Terms of Service
              </button>{' '}
              and{' '}
              <button
                type="button"
                onClick={() => navigate('/terms')}
                className="text-blue-600 font-semibold">
                
                Privacy Policy
              </button>
              .
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform mt-4">
            
            Sign Up
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-semibold text-blue-600">
              
              Log In
            </button>
          </p>
        </div>
      </div>
    </div>);

}