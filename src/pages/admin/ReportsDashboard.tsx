import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, TrendingUp, Filter } from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell } from
'recharts';
export function ReportsDashboard() {
  const navigate = useNavigate();
  const categoryData = [
  {
    name: 'Hospital',
    value: 45,
    color: '#ef4444'
  },
  {
    name: 'Water',
    value: 30,
    color: '#3b82f6'
  },
  {
    name: 'Restroom',
    value: 25,
    color: '#14b8a6'
  },
  {
    name: 'Other',
    value: 15,
    color: '#94a3b8'
  }];

  const trendData = [
  {
    name: 'Mon',
    reports: 12
  },
  {
    name: 'Tue',
    reports: 19
  },
  {
    name: 'Wed',
    reports: 15
  },
  {
    name: 'Thu',
    reports: 22
  },
  {
    name: 'Fri',
    reports: 30
  },
  {
    name: 'Sat',
    reports: 25
  },
  {
    name: 'Sun',
    reports: 18
  }];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="bg-white p-4 pt-6 shadow-sm z-10 flex items-center justify-between border-b border-slate-100">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="p-2 -ml-2 text-slate-600 hover:bg-slate-50 rounded-full">
            
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-slate-900 ml-2">
            Reports Analytics
          </h1>
        </div>
        <button className="p-2 text-slate-600 hover:bg-slate-50 rounded-full">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {/* Summary Cards */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <span className="text-xs font-bold text-slate-500 uppercase">
                Total Reports
              </span>
            </div>
            <div className="text-3xl font-black text-slate-900">141</div>
            <div className="text-xs text-red-500 font-medium mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +12% this week
            </div>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span className="text-xs font-bold text-slate-500 uppercase">
                Unresolved
              </span>
            </div>
            <div className="text-3xl font-black text-slate-900">28</div>
            <div className="text-xs text-slate-500 font-medium mt-1">
              Requires action
            </div>
          </div>
        </div>

        {/* Reports by Category Pie Chart */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-6">
          <h3 className="font-bold text-slate-900 mb-4">Reports by Category</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value">
                  
                  {categoryData.map((entry, index) =>
                  <Cell key={`cell-${index}`} fill={entry.color} />
                  )}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {categoryData.map((entry, i) =>
            <div
              key={i}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
              
                <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: entry.color
                }}>
              </div>
                {entry.name} ({entry.value})
              </div>
            )}
          </div>
        </div>

        {/* Reports Trend Bar Chart */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4">
            Reports Trend (Last 7 Days)
          </h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trendData}>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 10,
                    fill: '#64748b'
                  }} />
                
                <Tooltip
                  cursor={{
                    fill: '#f1f5f9'
                  }} />
                
                <Bar dataKey="reports" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>);

}