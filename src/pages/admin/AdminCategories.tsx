import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, Edit2, Trash2 } from 'lucide-react';
import { RESOURCE_CATEGORIES } from '../../constants/categories';
export function AdminCategories() {
  const navigate = useNavigate();
  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center">
            <button
              onClick={() => navigate('/admin/dashboard')}
              className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
              
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-slate-900 ml-2">
              Resource Categories
            </h1>
          </div>
          <button className="w-8 h-8 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-100">
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-slate-500 ml-10">
          Manage the strict list of allowed resource categories.
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 text-xs text-amber-800">
          <strong>System Constraint:</strong> These 11 categories are hardcoded
          requirements. Do not rename them to "Department".
        </div>

        <div className="flex flex-col gap-2">
          {RESOURCE_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="bg-white p-3 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between">
                
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg ${cat.bg} ${cat.color} flex items-center justify-center`}>
                    
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">
                      {cat.name}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {cat.id}
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                    <Edit2 className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>);

          })}
        </div>
      </div>
    </div>);

}