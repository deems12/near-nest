import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function ReportPlace() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const [step, setStep] = useState(1);
  const [reportType, setReportType] = useState('');
  const place = places.find((p) => p.id === id) || places[0];
  const reportTypes = [
  "Fake / Doesn't Exist",
  'Wrong Location',
  'Permanently Closed',
  'Duplicate Place',
  'Inappropriate Content',
  'Other'];

  if (step === 1) {
    return (
      <div className="flex-1 bg-slate-50 flex flex-col h-full">
        <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold ml-2">Report Place</h1>
        </div>

        <div className="flex-1 overflow-y-auto p-4 pb-24">
          <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-red-900 text-sm mb-1">
                Reporting: {place.name}
              </h3>
              <p className="text-xs text-red-700">
                Your report will be reviewed by our moderators. False reporting
                may lead to account suspension.
              </p>
            </div>
          </div>

          <h2 className="font-bold text-slate-900 mb-3">
            What's wrong with this place?
          </h2>

          <div className="flex flex-col gap-2">
            {reportTypes.map((type) =>
            <button
              key={type}
              onClick={() => setReportType(type)}
              className={`p-4 rounded-xl border text-left font-medium transition-all ${reportType === type ? 'border-red-600 bg-red-50 text-red-700' : 'border-slate-200 bg-white text-slate-700 hover:border-red-200'}`}>
              
                {type}
              </button>
            )}
          </div>

          {reportType &&
          <div className="mt-6">
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Additional Details (Optional)
              </label>
              <textarea
              rows={4}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-600 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Please provide any additional context to help our moderators...">
            </textarea>
            </div>
          }
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
          <button
            disabled={!reportType}
            onClick={() => setStep(2)}
            className="w-full py-4 bg-red-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-red-200 active:scale-[0.98] transition-transform disabled:opacity-50 disabled:active:scale-100">
            
            Submit Report
          </button>
        </div>
      </div>);

  }
  return (
    <div className="flex-1 bg-white flex flex-col h-full items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="w-12 h-12 text-green-500" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Report Submitted
      </h2>
      <p className="text-slate-500 mb-8 max-w-xs">
        Thank you for keeping the community safe. Our moderators will review
        this place shortly.
      </p>

      <button
        onClick={() => navigate(-1)}
        className="w-full py-4 bg-slate-100 text-slate-700 rounded-xl font-bold text-lg active:scale-[0.98] transition-transform">
        
        Done
      </button>
    </div>);

}