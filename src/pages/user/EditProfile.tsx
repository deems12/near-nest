import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, User, Mail, FileText } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function EditProfile() {
  const navigate = useNavigate();
  const { currentUser } = useResource();
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Edit Profile</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="flex flex-col items-center mb-8 mt-4">
          <div className="relative">
            <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-3xl font-bold border-4 border-white shadow-sm">
              {currentUser?.name?.charAt(0) || 'U'}
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white border-2 border-white shadow-sm hover:bg-blue-700 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
        </div>

        <form className="flex flex-col gap-5">
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
                defaultValue={currentUser?.name || 'Demo User'}
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
              
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
                defaultValue="demo@nearnest.app"
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
              
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Bio
            </label>
            <div className="relative">
              <div className="absolute top-3.5 left-0 pl-4 pointer-events-none">
                <FileText className="h-5 w-5 text-slate-400" />
              </div>
              <textarea
                rows={4}
                placeholder="Tell the community a bit about yourself..."
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none">
              </textarea>
            </div>
          </div>
        </form>
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <button
          onClick={() => navigate('/system/success')}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
          
          Save Profile
        </button>
      </div>
    </div>);

}