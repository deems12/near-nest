import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
export function RejectionReason() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reason, setReason] = useState('');
  const presetReasons = [
  "Wrong Location / Doesn't Exist",
  'Duplicate Entry',
  'Inappropriate Content',
  'Insufficient Information',
  'Wrong Category',
  'Other'];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-slate-900 ml-2">
          Reject Submission
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-red-900 text-sm mb-1">
              Rejection Notice
            </h3>
            <p className="text-xs text-red-700">
              The user will be notified of this rejection and the reason
              provided.
            </p>
          </div>
        </div>

        <h2 className="font-bold text-slate-900 mb-3">Select Reason</h2>

        <div className="flex flex-col gap-2 mb-6">
          {presetReasons.map((type) =>
          <button
            key={type}
            onClick={() => setReason(type)}
            className={`p-4 rounded-xl border text-left font-medium transition-all ${reason === type ? 'border-red-600 bg-red-50 text-red-700' : 'border-slate-200 bg-white text-slate-700 hover:border-red-200'}`}>
            
              {type}
            </button>
          )}
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-900 mb-2">
            Additional Details
          </label>
          <textarea
            rows={4}
            className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all resize-none"
            placeholder="Provide more context for the user...">
          </textarea>
        </div>
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <button
          disabled={!reason}
          onClick={() => navigate('/admin/places')}
          className="w-full py-4 bg-red-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-red-200 active:scale-[0.98] transition-transform disabled:opacity-50 disabled:active:scale-100">
          
          Confirm Rejection
        </button>
      </div>
    </div>);

}