import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronDown } from 'lucide-react';
export function FAQ() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
  {
    q: 'How do I add a new place?',
    a: "Tap the 'Add' button in the bottom navigation bar. Select the appropriate Resource Category, set the location on the map, add details, and submit. The place will be marked as 'Pending' until a moderator verifies it."
  },
  {
    q: "What does the 'Verified' badge mean?",
    a: 'A Verified badge means one of our community moderators has reviewed the submission and confirmed that the resource exists and is accurate.'
  },
  {
    q: 'How does Emergency Mode work?',
    a: 'Emergency Mode provides high-contrast, quick access to critical resources like Hospitals, Police Stations, and Fire Stations. It automatically finds the nearest option and provides immediate routing.'
  },
  {
    q: 'Can I edit a place I added?',
    a: 'Yes, go to Profile > My Added Places, select the place, and tap Edit. Note that significant changes may require re-verification.'
  },
  {
    q: 'How do I report incorrect information?',
    a: 'On any place details screen, tap the warning/alert icon to submit a report. You can flag places as fake, closed, or having wrong locations.'
  },
  {
    q: "Why isn't my location updating?",
    a: "Ensure you have granted location permissions to the app and that your device's GPS is turned on. You can check this in Settings > Location Services."
  }];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center border-b border-slate-100">
        <button
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
          
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-bold ml-2">Frequently Asked Questions</h1>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) =>
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden transition-all">
            
              <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-4 flex items-center justify-between text-left">
              
                <span className="font-bold text-slate-900 pr-4">{faq.q}</span>
                <ChevronDown
                className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
              
              </button>
              {openIndex === i &&
            <div className="p-4 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-50 mt-2">
                  {faq.a}
                </div>
            }
            </div>
          )}
        </div>
      </div>
    </div>);

}