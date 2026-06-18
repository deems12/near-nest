import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowLeft, KeyRound } from 'lucide-react';
export function ForgotPassword() {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
        {!isSubmitted ?
        <>
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
              <KeyRound className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">
              Reset Password
            </h1>
            <p className="text-slate-500 mb-8">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
                  required
                  className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your email" />
                
                </div>
              </div>

              <button
              type="submit"
              className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform mt-2">
              
                Send Reset Link
              </button>
            </form>
          </> :

        <div className="flex flex-col items-center justify-center h-full text-center pb-20">
            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              Check your email
            </h2>
            <p className="text-slate-500 mb-8 max-w-xs">
              We've sent password reset instructions to your email address.
            </p>
            <button
            onClick={() => navigate('/reset-password')}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
            
              Simulate Email Click
            </button>
            <button
            onClick={() => navigate('/login')}
            className="mt-4 font-semibold text-slate-500">
            
              Back to Login
            </button>
          </div>
        }
      </div>
    </div>);

}