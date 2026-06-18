import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';
export function Contact() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Contact Us</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 mb-6 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">
                Email
              </div>
              <div className="font-bold text-slate-900">
                support@nearnest.app
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">
                Phone
              </div>
              <div className="font-bold text-slate-900">+1 (800) 123-4567</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase">
                Office
              </div>
              <div className="font-bold text-slate-900">
                123 Tech Hub, Innovation City
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3 ml-1">
          Send a Message
        </h2>

        <form className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
            
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
            
          </div>
          <div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
            
          </div>
          <div>
            <textarea
              rows={5}
              placeholder="How can we help you?"
              className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none">
            </textarea>
          </div>
        </form>
      </div>

      <div className="p-4 bg-white border-t border-slate-100">
        <button
          onClick={() => navigate('/system/success')}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform">
          
          Send Message
        </button>
      </div>
    </div>);

}