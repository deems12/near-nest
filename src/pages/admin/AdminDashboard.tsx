import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  MapPin,
  AlertTriangle,
  CheckCircle2,
  Clock,
  BarChart3 } from
'lucide-react';
import { useResource } from '../../context/ResourceContext';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer } from
'recharts';
export function AdminDashboard() {
  const navigate = useNavigate();
  const { places } = useResource();
  const stats = [
  {
    label: 'Total Places',
    value: places.length,
    icon: MapPin,
    color: 'text-blue-600',
    bg: 'bg-blue-100'
  },
  {
    label: 'Pending',
    value: places.filter((p) => p.verificationStatus === 'Pending').length,
    icon: Clock,
    color: 'text-amber-600',
    bg: 'bg-amber-100'
  },
  {
    label: 'Verified',
    value: places.filter((p) => p.verificationStatus === 'Verified').length,
    icon: CheckCircle2,
    color: 'text-green-600',
    bg: 'bg-green-100'
  },
  {
    label: 'Reports',
    value: places.reduce((acc, p) => acc + p.reportCount, 0),
    icon: AlertTriangle,
    color: 'text-red-600',
    bg: 'bg-red-100'
  }];

  const pieData = [
  {
    name: 'Verified',
    value: places.filter((p) => p.verificationStatus === 'Verified').length,
    color: '#22c55e'
  },
  {
    name: 'Pending',
    value: places.filter((p) => p.verificationStatus === 'Pending').length,
    color: '#f59e0b'
  },
  {
    name: 'Removed',
    value: places.filter((p) => p.verificationStatus === 'Removed').length,
    color: '#94a3b8'
  }];

  const barData = [
  {
    name: 'Mon',
    searches: 400
  },
  {
    name: 'Tue',
    searches: 300
  },
  {
    name: 'Wed',
    searches: 550
  },
  {
    name: 'Thu',
    searches: 450
  },
  {
    name: 'Fri',
    searches: 700
  },
  {
    name: 'Sat',
    searches: 850
  },
  {
    name: 'Sun',
    searches: 600
  }];

  return (
    <div className="flex-1 bg-slate-50 flex flex-col h-full">
      <div className="p-4 pt-6 pb-4 bg-white shadow-sm z-10">
        <h1 className="text-xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-sm text-slate-500">Welcome back, Admin</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-24">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                
                <div
                  className={`w-10 h-10 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center mb-3`}>
                  
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-medium text-slate-500">
                  {stat.label}
                </div>
              </div>);

          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-6">
          <h3 className="font-bold text-slate-900 mb-3">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => navigate('/admin/places/pending')}
              className="flex flex-col items-center gap-2 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              
              <Clock className="w-5 h-5 text-amber-500" />
              <span className="text-[10px] font-bold text-slate-700 text-center">
                Review
                <br />
                Pending
              </span>
            </button>
            <button
              onClick={() => navigate('/admin/categories')}
              className="flex flex-col items-center gap-2 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              
              <BarChart3 className="w-5 h-5 text-blue-500" />
              <span className="text-[10px] font-bold text-slate-700 text-center">
                Manage
                <br />
                Categories
              </span>
            </button>
            <button
              onClick={() => navigate('/admin/users')}
              className="flex flex-col items-center gap-2 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
              
              <Users className="w-5 h-5 text-indigo-500" />
              <span className="text-[10px] font-bold text-slate-700 text-center">
                Manage
                <br />
                Users
              </span>
            </button>
          </div>
        </div>

        {/* Charts */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mb-6">
          <h3 className="font-bold text-slate-900 mb-4">Verification Status</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={70}
                  paddingAngle={5}
                  dataKey="value">
                  
                  {pieData.map((entry, index) =>
                  <Cell key={`cell-${index}`} fill={entry.color} />
                  )}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {pieData.map((entry, i) =>
            <div
              key={i}
              className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
              
                <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: entry.color
                }}>
              </div>
                {entry.name}
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          <h3 className="font-bold text-slate-900 mb-4">Weekly Searches</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
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
                
                <Bar dataKey="searches" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>);

}