import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
export function Terms() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-white flex flex-col h-full">
      <div className="p-4 flex items-center border-b border-slate-100 shrink-0">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Terms & Privacy</h1>
      </div>

      <div className="flex-1 p-6 overflow-y-auto no-scrollbar text-slate-700">
        <div className="prose prose-sm prose-slate max-w-none">
          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h2>
          <p className="mb-4">Last updated: October 2023</p>

          <h3 className="font-bold text-slate-900 mt-6 mb-2">
            1. Acceptance of Terms
          </h3>
          <p className="mb-4">
            By accessing and using NEAR NEST, you accept and agree to be bound
            by the terms and provision of this agreement.
          </p>

          <h3 className="font-bold text-slate-900 mt-6 mb-2">
            2. User Contributions
          </h3>
          <p className="mb-4">
            Users may add locations to the map. You agree that any information
            you provide is accurate to the best of your knowledge. False
            reporting may result in account suspension.
          </p>

          <h3 className="font-bold text-slate-900 mt-6 mb-2">
            3. Verification System
          </h3>
          <p className="mb-4">
            Locations added by users are subject to verification by our
            moderators. We do not guarantee the absolute accuracy of unverified
            locations.
          </p>

          <div className="h-px bg-slate-200 my-8"></div>

          <h2 className="text-xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h2>

          <h3 className="font-bold text-slate-900 mt-6 mb-2">
            1. Information Collection
          </h3>
          <p className="mb-4">
            We collect your location data to provide nearby resource
            recommendations. This data is only used while the app is active
            unless you grant background permissions.
          </p>

          <h3 className="font-bold text-slate-900 mt-6 mb-2">2. Data Usage</h3>
          <p className="mb-8">
            Your profile information and added locations will be visible to
            other users of the platform to build community trust.
          </p>
        </div>
      </div>
    </div>);

}