import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, Camera } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function AddReview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const [rating, setRating] = useState(0);
  const place = places.find((p) => p.id === id) || places[0];
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-slate-900 ml-2">
          Write a Review
        </h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="text-center mb-8 mt-4">
          <h2 className="font-bold text-slate-900 text-lg mb-1">
            {place.name}
          </h2>
          <p className="text-sm text-slate-500 mb-6">
            How was your experience?
          </p>

          <div className="flex justify-center gap-2">
            {[1, 2, 3, 4, 5].map((star) =>
            <button
              key={star}
              onClick={() => setRating(star)}
              className="p-1 active:scale-90 transition-transform">
              
                <Star
                className={`w-10 h-10 ${star <= rating ? 'fill-amber-500 text-amber-500' : 'text-slate-300'}`} />
              
              </button>
            )}
          </div>
        </div>

        <form className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Your Review
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Share details of your experience at this place...">
            </textarea>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Add Photos (Optional)
            </label>
            <button
              type="button"
              className="w-full h-24 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-colors bg-white">
              
              <Camera className="w-6 h-6 mb-1" />
              <span className="text-sm font-medium">Tap to upload photos</span>
            </button>
          </div>
        </form>
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <button
          disabled={rating === 0}
          onClick={() => navigate(-1)}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform disabled:opacity-50 disabled:active:scale-100">
          
          Submit Review
        </button>
      </div>
    </div>);

}