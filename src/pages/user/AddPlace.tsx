import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Camera,
  ChevronRight,
  CheckCircle2 } from
'lucide-react';
import { RESOURCE_CATEGORIES } from '../../constants/categories';
export function AddPlace() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('');
  // Mock flow for Add Place
  if (step === 1) {
    return (
      <div className="flex-1 bg-slate-50 flex flex-col h-full">
        <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
          <button
            onClick={() => navigate(-1)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold ml-2">Add New Resource</h1>
        </div>

        <div className="flex-1 overflow-y-auto p-4 pb-24">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                1
              </div>
              <h2 className="font-bold text-slate-900">Select Category</h2>
            </div>
            <p className="text-sm text-slate-500 ml-8">
              Choose the type of resource you are adding.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {RESOURCE_CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl border-2 transition-all ${isSelected ? 'border-blue-600 bg-blue-50' : 'border-slate-100 bg-white hover:border-blue-200'}`}>
                  
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${isSelected ? 'bg-blue-600 text-white' : cat.bg + ' ' + cat.color}`}>
                    
                    <Icon className="w-6 h-6" />
                  </div>
                  <span
                    className={`text-sm font-semibold text-center ${isSelected ? 'text-blue-700' : 'text-slate-700'}`}>
                    
                    {cat.name}
                  </span>
                </button>);

            })}
          </div>
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
          <button
            disabled={!selectedCategory}
            onClick={() => setStep(2)}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform disabled:opacity-50 disabled:active:scale-100 flex justify-center items-center gap-2">
            
            Next Step
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>);

  }
  if (step === 2) {
    return (
      <div className="flex-1 bg-slate-50 flex flex-col h-full">
        <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
          <button
            onClick={() => setStep(1)}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-bold ml-2">Location & Details</h1>
        </div>

        <div className="flex-1 overflow-y-auto p-4 pb-24">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                2
              </div>
              <h2 className="font-bold text-slate-900">Resource Details</h2>
            </div>
          </div>

          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Place Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                placeholder="e.g. City Public Restroom" />
              
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Location
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                  placeholder="Fetching current location..."
                  defaultValue="123 Main St, City Center" />
                
              </div>
              <div className="h-32 bg-slate-200 rounded-xl mt-2 relative overflow-hidden border border-slate-200">
                {/* Mini map mock */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
                  <MapPin className="w-8 h-8 text-blue-600 fill-blue-100" />
                </div>
                <button
                  type="button"
                  className="absolute bottom-2 right-2 bg-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm border border-slate-100">
                  
                  Adjust Pin
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Description (Optional)
              </label>
              <textarea
                rows={3}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Add helpful details like 'Located behind the main building'...">
              </textarea>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Photo (Optional)
              </label>
              <button
                type="button"
                className="w-full h-24 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-500 hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-colors">
                
                <Camera className="w-6 h-6 mb-1" />
                <span className="text-sm font-medium">Tap to upload photo</span>
              </button>
            </div>
          </form>
        </div>

        <div className="p-4 bg-white border-t border-slate-100">
          <button
            onClick={() => setStep(3)}
            className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform flex justify-center items-center gap-2">
            
            Submit for Verification
          </button>
        </div>
      </div>);

  }
  // Step 3: Success
  return (
    <div className="flex-1 bg-white flex flex-col h-full items-center justify-center p-6 text-center">
      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6">
        <CheckCircle2 className="w-12 h-12 text-green-500" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900 mb-2">
        Place Submitted!
      </h2>
      <p className="text-slate-500 mb-8 max-w-xs">
        Thank you for helping the community. Your submission is now pending
        verification by our moderators.
      </p>

      <div className="w-full bg-slate-50 rounded-2xl p-4 mb-8 text-left border border-slate-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-amber-500"></div>
          <span className="text-sm font-bold text-slate-700">
            Status: Pending Review
          </span>
        </div>
        <p className="text-xs text-slate-500 pl-5">Usually takes 2-4 hours.</p>
      </div>

      <button
        onClick={() => navigate('/user/home')}
        className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
        
        Back to Home
      </button>
      <button
        onClick={() => setStep(1)}
        className="mt-4 font-semibold text-slate-500">
        
        Add Another Place
      </button>
    </div>);

}