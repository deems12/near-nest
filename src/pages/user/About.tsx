import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Globe, Twitter, Github } from 'lucide-react';
export function About() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">About NEAR NEST</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="flex flex-col items-center mb-8 mt-4">
          <div className="w-20 h-20 bg-blue-600 rounded-3xl flex items-center justify-center shadow-xl mb-4">
            <MapPin className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900">NEAR NEST</h2>
          <p className="text-slate-500 font-medium">Version 1.0.0</p>
        </div>

        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 mb-6">
          <h3 className="font-bold text-slate-900 mb-2">Our Mission</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            NEAR NEST is a community-driven platform designed to help people
            find, verify, and navigate to essential resources nearby. Whether
            it's finding clean drinking water, a public restroom, or emergency
            services, our goal is to provide accurate, real-time information
            when you need it most.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold text-slate-900 mb-3 px-1">Core Team</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
            {
              name: 'Aarav S.',
              role: 'Founder'
            },
            {
              name: 'Priya M.',
              role: 'Lead Developer'
            },
            {
              name: 'John D.',
              role: 'Design'
            },
            {
              name: 'Maria K.',
              role: 'Community'
            }].
            map((member, i) =>
            <div
              key={i}
              className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center gap-3">
              
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold text-sm">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">
                    {member.name}
                  </div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                    {member.role}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-600 transition-colors">
            <Globe className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-blue-400 transition-colors">
            <Twitter className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors">
            <Github className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>);

}