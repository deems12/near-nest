import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Star, ThumbsUp, MessageSquarePlus } from 'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function Reviews() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { places } = useResource();
  const place = places.find((p) => p.id === id) || places[0];
  const mockReviews = [
  {
    id: 1,
    user: 'Aarav S.',
    avatar: 'A',
    rating: 5,
    date: '2 days ago',
    text: 'Very clean and well maintained. Easy to find.',
    helpful: 12
  },
  {
    id: 2,
    user: 'Priya M.',
    avatar: 'P',
    rating: 4,
    date: '1 week ago',
    text: 'Good facility but sometimes crowded during peak hours.',
    helpful: 5
  },
  {
    id: 3,
    user: 'John D.',
    avatar: 'J',
    rating: 5,
    date: '2 weeks ago',
    text: 'Lifesaver! Exactly where the map said it would be.',
    helpful: 8
  }];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full relative">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 border-b border-slate-100">
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-slate-900 ml-2">Reviews</h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-4xl font-black text-slate-900">
            {place.rating > 0 ? place.rating : '0.0'}
          </div>
          <div>
            <div className="flex gap-1 text-amber-500 mb-1">
              {[1, 2, 3, 4, 5].map((star) =>
              <Star
                key={star}
                className={`w-5 h-5 ${star <= Math.round(place.rating) ? 'fill-current' : 'text-slate-200'}`} />

              )}
            </div>
            <p className="text-sm text-slate-500">
              Based on {place.reviewCount} reviews
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="flex flex-col gap-4">
          {mockReviews.map((review) =>
          <div
            key={review.id}
            className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">
                      {review.user}
                    </h4>
                    <span className="text-xs text-slate-500">
                      {review.date}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-sm text-slate-700">
                    {review.rating}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 text-sm mb-3">{review.text}</p>
              <button className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-600 transition-colors">
                <ThumbsUp className="w-4 h-4" />
                Helpful ({review.helpful})
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Add Review Button */}
      <div className="absolute bottom-6 right-4 z-20">
        <button
          onClick={() => navigate(`/user/place/${place.id}/add-review`)}
          className="flex items-center gap-2 px-5 py-3 bg-blue-600 rounded-full shadow-lg shadow-blue-200 text-white font-bold text-sm active:scale-95 transition-transform">
          
          <MessageSquarePlus className="w-5 h-5" />
          Write a Review
        </button>
      </div>
    </div>);

}