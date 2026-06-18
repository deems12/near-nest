import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AlertTriangle,
  Phone,
  Shield,
  Flame,
  Hospital,
  Home,
  Pill,
  ArrowLeft } from
'lucide-react';
import { useResource } from '../../context/ResourceContext';
export function EmergencyDashboard() {
  const navigate = useNavigate();
  const { places } = useResource();
  const emergencyCategories = [
  {
    id: 'hospital-medical',
    name: 'Hospital',
    icon: Hospital,
    color: 'bg-red-600',
    path: '/emergency/hospital'
  },
  {
    id: 'police-station',
    name: 'Police',
    icon: Shield,
    color: 'bg-blue-600',
    path: '/emergency/police'
  },
  {
    id: 'fire-station',
    name: 'Fire',
    icon: Flame,
    color: 'bg-orange-600',
    path: '/emergency/fire'
  },
  {
    id: 'shelter',
    name: 'Shelter',
    icon: Home,
    color: 'bg-purple-600',
    path: '/emergency/shelter'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy',
    icon: Pill,
    color: 'bg-green-600',
    path: '/emergency/pharmacy'
  }];

  return (
    <div className="flex-1 bg-red-50 flex flex-col h-full relative overflow-hidden">
      {/* Pulsing background effect */}
      <div className="absolute top-[-20%] left-[-20%] w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div
        className="absolute bottom-[-20%] right-[-20%] w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{
          animationDelay: '1s'
        }}>
      </div>

      <div className="p-4 pt-6 flex items-center z-10">
        <button
          onClick={() => navigate('/user/home')}
          className="p-2 -ml-2 text-red-900 hover:bg-red-100 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold text-red-900 ml-2">Emergency Mode</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-6 z-10 pb-24">
        {/* SOS Button */}
        <div className="flex justify-center mb-10 mt-4">
          <button
            onClick={() => navigate('/emergency/call/sos')}
            className="w-48 h-48 bg-red-600 rounded-full shadow-[0_0_40px_rgba(220,38,38,0.5)] flex flex-col items-center justify-center text-white border-8 border-red-200 active:scale-95 transition-transform relative group">
            
            <div className="absolute inset-0 rounded-full border-4 border-red-400 animate-ping opacity-20"></div>
            <AlertTriangle className="w-16 h-16 mb-2" />
            <span className="text-3xl font-black tracking-widest">SOS</span>
          </button>
        </div>

        <h2 className="text-lg font-bold text-red-950 mb-4 text-center">
          Quick Find Nearest
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {emergencyCategories.map((cat) => {
            const Icon = cat.icon;
            // Find nearest place of this category (mocking it by just finding any)
            const nearestPlace = places.find((p) => p.categoryId === cat.id);
            return (
              <button
                key={cat.id}
                onClick={() =>
                navigate(
                  nearestPlace ?
                  `/emergency/route/${nearestPlace.id}` :
                  cat.path
                )
                }
                className="bg-white p-4 rounded-2xl shadow-sm border border-red-100 flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform">
                
                <div
                  className={`w-14 h-14 rounded-full ${cat.color} text-white flex items-center justify-center shadow-md`}>
                  
                  <Icon className="w-7 h-7" />
                </div>
                <div className="text-center">
                  <span className="block font-bold text-slate-900">
                    {cat.name}
                  </span>
                  {nearestPlace ?
                  <span className="text-xs font-bold text-red-600">
                      {nearestPlace.distance}
                    </span> :

                  <span className="text-xs text-slate-400">Searching...</span>
                  }
                </div>
              </button>);

          })}
        </div>

        <div className="mt-8 bg-white rounded-2xl p-4 shadow-sm border border-red-100">
          <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Phone className="w-5 h-5 text-red-600" />
            Emergency Contacts
          </h3>
          <div className="space-y-3">
            <button
              onClick={() => navigate('/emergency/call/112')}
              className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-xl active:bg-slate-100">
              
              <span className="font-semibold text-slate-700">
                National Emergency
              </span>
              <span className="font-bold text-red-600 text-lg">112</span>
            </button>
            <button
              onClick={() => navigate('/emergency/call/108')}
              className="w-full flex items-center justify-between p-3 bg-slate-50 rounded-xl active:bg-slate-100">
              
              <span className="font-semibold text-slate-700">Ambulance</span>
              <span className="font-bold text-red-600 text-lg">108</span>
            </button>
          </div>
        </div>
      </div>
    </div>);

}