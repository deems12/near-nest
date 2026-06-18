import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Search,
  Filter,
  CheckCircle2,
  XCircle,
  Clock,
  ArrowLeft } from
'lucide-react';
import { useResource } from '../../context/ResourceContext';
import { CategoryChip } from '../../components/common/CategoryChip';
import { VerificationBadge } from '../../components/common/VerificationBadge';
export function AdminPlaces() {
  const navigate = useNavigate();
  const location = useLocation();
  const { places } = useResource();
  const [activeTab, setActiveTab] = useState<
    'All' | 'Pending' | 'Verified' | 'Reported'>(
    'All');
  // Determine initial tab from route
  useEffect(() => {
    if (location.pathname.includes('pending')) setActiveTab('Pending');else
    if (location.pathname.includes('verified')) setActiveTab('Verified');else
    if (location.pathname.includes('reported')) setActiveTab('Reported');
  }, [location]);
  const filteredPlaces = places.filter((p) => {
    if (activeTab === 'Pending') return p.verificationStatus === 'Pending';
    if (activeTab === 'Verified') return p.verificationStatus === 'Verified';
    if (activeTab === 'Reported') return p.reportCount > 0;
    return true;
  });
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10">
        <div className="flex items-center mb-4">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-slate-900 ml-2">
            Manage Places
          </h1>
        </div>

        <div className="flex gap-2 mb-4">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search places..."
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
            
          </div>
          <button className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-600 flex items-center gap-2">
            <Filter className="w-4 h-4" />
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {['All', 'Pending', 'Verified', 'Reported'].map((tab) =>
          <button
            key={tab}
            onClick={() => setActiveTab(tab as any)}
            className={`px-4 py-1.5 rounded-full text-sm font-bold whitespace-nowrap transition-colors ${activeTab === tab ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>
            
              {tab}
            </button>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="flex flex-col gap-3">
          {filteredPlaces.map((place) =>
          <div
            key={place.id}
            className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
            
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-slate-900">{place.name}</h3>
                <VerificationBadge status={place.verificationStatus} />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <CategoryChip categoryId={place.categoryId} />
                {place.reportCount > 0 &&
              <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-1 rounded-lg">
                    {place.reportCount} Reports
                  </span>
              }
              </div>

              <div className="text-xs text-slate-500 mb-4">
                Added by{' '}
                <span className="font-semibold text-slate-700">
                  {place.addedBy}
                </span>{' '}
                • {place.distance}
              </div>

              <div className="flex gap-2 pt-3 border-t border-slate-100">
                {place.verificationStatus === 'Pending' ?
              <>
                    <button className="flex-1 py-2 bg-green-50 text-green-700 rounded-lg text-xs font-bold flex items-center justify-center gap-1 hover:bg-green-100">
                      <CheckCircle2 className="w-4 h-4" /> Approve
                    </button>
                    <button className="flex-1 py-2 bg-red-50 text-red-700 rounded-lg text-xs font-bold flex items-center justify-center gap-1 hover:bg-red-100">
                      <XCircle className="w-4 h-4" /> Reject
                    </button>
                  </> :

              <button className="flex-1 py-2 bg-slate-50 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-100">
                    View Details
                  </button>
              }
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

}