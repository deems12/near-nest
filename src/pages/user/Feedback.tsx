import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MessageSquare } from 'lucide-react';
export function Feedback() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [category, setCategory] = useState('');
  const categories = ['App Feedback', 'Bug Report', 'Feature Request', 'Other'];
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Send Feedback</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-6 flex items-start gap-3">
          <MessageSquare className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-blue-900 text-sm mb-1">
              Help us improve
            </h3>
            <p className="text-xs text-blue-700">
              Your feedback helps us make NEAR NEST better for everyone in the
              community.
            </p>
          </div>
        </div>

        <form className="flex flex-col gap-6">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-3 text-center">
              How would you rate your experience?
            </label>
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) =>
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="p-2 hover:scale-110 transition-transform">
                
                  <Star
                  className={`w-10 h-10 ${star <= rating ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                
                </button>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Feedback Category
            </label>
            <div className="grid grid-cols-2 gap-2">
              {categories.map((cat) =>
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`p-3 rounded-xl border text-sm font-medium transition-all ${category === cat ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200'}`}>
                
                  {cat}
                </button>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Tell us more
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
              placeholder="What do you like? What could be better?">
            </textarea>
          </div>
        </form>
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <button
          disabled={!rating || !category}
          onClick={() => navigate('/system/success')}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform disabled:opacity-50 disabled:active:scale-100">
          
          Submit Feedback
        </button>
      </div>
    </div>);

}