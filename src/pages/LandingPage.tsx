import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapPin,
  Shield,
  Navigation,
  Search,
  Phone,
  ArrowRight
} from 'lucide-react';
import MapComponent from '../components/MapComponent';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 py-5 shadow-sm">
        <h1 className="text-3xl font-black text-blue-600">
          NearNest
        </h1>

        <div className="flex items-center gap-6">
          <button className="text-slate-700 font-semibold hover:text-blue-600">
            Features
          </button>

          <button className="text-slate-700 font-semibold hover:text-blue-600">
            About
          </button>

          <button
            onClick={() => navigate('/welcome')}
            className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700"
          >
            Open App
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 items-center px-10 py-20 gap-10">

        <div>
          <h1 className="text-6xl font-black leading-tight text-slate-900">
            Find Essential
            Resources
            Near You
          </h1>

          <p className="text-slate-600 text-xl mt-6 leading-relaxed">
            NearNest helps users discover nearby hospitals,
            drinking water, shelters, public restrooms,
            charging stations and emergency services instantly.
          </p>

          <div className="flex gap-4 mt-8">
              
            <button
              onClick={() => navigate('/user/home')}
              className="bg-blue-600 text-white px-6 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700"
            >
              Explore Map
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => navigate('/emergency')}
              className="bg-red-100 text-red-600 px-6 py-4 rounded-2xl font-bold hover:bg-red-200"
            >
              Emergency
            </button>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2070&auto=format&fit=crop"
            alt=""
            className="rounded-3xl shadow-2xl"
          />

          <div className="absolute top-5 left-5 bg-white px-4 py-3 rounded-2xl shadow-xl">
            <p className="font-bold text-slate-900">
              📍 Live Navigation
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-10 py-20 bg-slate-50">

        <h2 className="text-4xl font-black text-center mb-14">
          Why Choose NearNest?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <Search className="w-12 h-12 text-blue-600 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Smart Search
            </h3>

            <p className="text-slate-600">
              Instantly find nearby resources and services.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <Navigation className="w-12 h-12 text-green-600 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Real Navigation
            </h3>

            <p className="text-slate-600">
              Navigate easily using integrated maps.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <Shield className="w-12 h-12 text-red-600 mb-5" />

            <h3 className="text-2xl font-bold mb-3">
              Emergency Support
            </h3>

            <p className="text-slate-600">
              Quick access to emergency resources nearby.
            </p>
          </div>

        </div>
      </section>

      {/* STATS */}
      <section className="px-10 py-20">

        <div className="grid md:grid-cols-4 gap-6 text-center">

          <div className="bg-blue-50 p-8 rounded-3xl">
            <h1 className="text-5xl font-black text-blue-600">
              1000+
            </h1>
            <p className="mt-2 text-slate-600">
              Places Added
            </p>
          </div>

          <div className="bg-green-50 p-8 rounded-3xl">
            <h1 className="text-5xl font-black text-green-600">
              500+
            </h1>
            <p className="mt-2 text-slate-600">
              Verified Locations
            </p>
          </div>

          <div className="bg-red-50 p-8 rounded-3xl">
            <h1 className="text-5xl font-black text-red-600">
              24/7
            </h1>
            <p className="mt-2 text-slate-600">
              Emergency Access
            </p>
          </div>

          <div className="bg-yellow-50 p-8 rounded-3xl">
            <h1 className="text-5xl font-black text-yellow-600">
              Live
            </h1>
            <p className="mt-2 text-slate-600">
              Navigation
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white px-10 py-10">

        <div className="flex flex-col md:flex-row justify-between items-center gap-5">

          <div>
            <h1 className="text-3xl font-black text-blue-400">
              NearNest
            </h1>

            <p className="text-slate-400 mt-2">
              Smart Resource Finder Platform
            </p>
          </div>

          <div className="flex gap-6">
            <button className="hover:text-blue-400">
              About
            </button>

            <button className="hover:text-blue-400">
              Contact
            </button>

            <button className="hover:text-blue-400">
              Support
            </button>
          </div>

        </div>

      </footer>
    </div>
  );
}