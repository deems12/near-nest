import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
export function ApprovePlace() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-slate-900 ml-2">
          Confirm Approval
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="bg-green-50 border border-green-100 rounded-xl p-4 mb-6 flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-green-900 text-sm mb-1">
              You are approving this place
            </h3>
            <p className="text-xs text-green-700">
              Once approved, this resource will be visible to all users on the
              map.
            </p>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2">
            Verification Notes (Optional)
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all resize-none"
            placeholder="Add any notes about how you verified this (e.g., 'Called the number to confirm')...">
          </textarea>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <button
          onClick={() => navigate('/moderator/tasks')}
          className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 active:scale-[0.98] transition-transform">
          
          Confirm & Approve
        </button>
      </div>
    </div>);

}