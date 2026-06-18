import {
  Droplets,
  Bath,
  Zap,
  Hospital,
  Pill,
  Fuel,
  UtensilsCrossed,
  Shield,
  Flame,
  Home,
  MoreHorizontal } from
'lucide-react';

export const RESOURCE_CATEGORIES = [
{
  id: 'drinking-water',
  name: 'Drinking Water',
  icon: Droplets,
  color: 'text-blue-500',
  bg: 'bg-blue-100',
  border: 'border-blue-200'
},
{
  id: 'public-restroom',
  name: 'Public Restroom',
  icon: Bath,
  color: 'text-teal-500',
  bg: 'bg-teal-100',
  border: 'border-teal-200'
},
{
  id: 'charging-station',
  name: 'Charging Station',
  icon: Zap,
  color: 'text-yellow-500',
  bg: 'bg-yellow-100',
  border: 'border-yellow-200'
},
{
  id: 'hospital-medical',
  name: 'Hospital / Medical',
  icon: Hospital,
  color: 'text-red-500',
  bg: 'bg-red-100',
  border: 'border-red-200'
},
{
  id: 'pharmacy',
  name: 'Pharmacy',
  icon: Pill,
  color: 'text-green-500',
  bg: 'bg-green-100',
  border: 'border-green-200'
},
{
  id: 'fuel-station',
  name: 'Fuel Station',
  icon: Fuel,
  color: 'text-orange-500',
  bg: 'bg-orange-100',
  border: 'border-orange-200'
},
{
  id: 'food-stall',
  name: 'Food Stall',
  icon: UtensilsCrossed,
  color: 'text-amber-500',
  bg: 'bg-amber-100',
  border: 'border-amber-200'
},
{
  id: 'police-station',
  name: 'Police Station',
  icon: Shield,
  color: 'text-indigo-500',
  bg: 'bg-indigo-100',
  border: 'border-indigo-200'
},
{
  id: 'fire-station',
  name: 'Fire Station',
  icon: Flame,
  color: 'text-rose-500',
  bg: 'bg-rose-100',
  border: 'border-rose-200'
},
{
  id: 'shelter',
  name: 'Shelter',
  icon: Home,
  color: 'text-purple-500',
  bg: 'bg-purple-100',
  border: 'border-purple-200'
},
{
  id: 'other',
  name: 'Other',
  icon: MoreHorizontal,
  color: 'text-gray-500',
  bg: 'bg-gray-100',
  border: 'border-gray-200'
}];