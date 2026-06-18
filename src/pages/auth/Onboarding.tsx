import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, PlusCircle, AlertTriangle, ChevronRight } from 'lucide-react';
const ONBOARDING_STEPS = [
{
  id: 1,
  icon: Search,
  title: 'Find Resources',
  description:
  'Locate verified drinking water, restrooms, hospitals, and more with real-time accuracy.',
  color: 'text-blue-600',
  bg: 'bg-blue-100',
  nextPath: '/onboarding/2'
},
{
  id: 2,
  icon: PlusCircle,
  title: 'Add & Verify',
  description:
  'Help the community by adding new places. Moderators verify them to ensure reliability.',
  color: 'text-green-600',
  bg: 'bg-green-100',
  nextPath: '/onboarding/3'
},
{
  id: 3,
  icon: AlertTriangle,
  title: 'Emergency Mode',
  description:
  'Quickly find and navigate to the nearest critical resources during emergencies.',
  color: 'text-red-600',
  bg: 'bg-red-100',
  nextPath: '/welcome'
}];

export function Onboarding() {
  const navigate = useNavigate();
  const location = useLocation();
  const stepId = parseInt(location.pathname.split('/').pop() || '1');
  const step =
  ONBOARDING_STEPS.find((s) => s.id === stepId) || ONBOARDING_STEPS[0];
  const Icon = step.icon;
  return (
    <div className="flex-1 bg-white flex flex-col h-full">
      <div className="flex justify-end p-6">
        <button
          onClick={() => navigate('/welcome')}
          className="text-slate-400 font-medium text-sm">
          
          Skip
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
        <div
          className={`w-32 h-32 rounded-full ${step.bg} flex items-center justify-center mb-10`}>
          
          <Icon className={`w-16 h-16 ${step.color}`} />
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h2>
        <p className="text-slate-500 text-lg leading-relaxed max-w-xs">
          {step.description}
        </p>
      </div>

      <div className="p-8 flex flex-col items-center gap-8 pb-12">
        <div className="flex gap-2">
          {[1, 2, 3].map((i) =>
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${i === stepId ? 'w-8 bg-blue-600' : 'w-2 bg-slate-200'}`} />

          )}
        </div>

        <button
          onClick={() => navigate(step.nextPath)}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-lg shadow-blue-200 active:scale-[0.98] transition-transform flex items-center justify-center gap-2">
          
          {stepId === 3 ? 'Get Started' : 'Next'}
          {stepId !== 3 && <ChevronRight className="w-5 h-5" />}
        </button>
      </div>
    </div>);

}