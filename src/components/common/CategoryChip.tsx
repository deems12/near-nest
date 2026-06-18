import React from 'react';
import { RESOURCE_CATEGORIES } from '../../constants/categories';
export function CategoryChip({
  categoryId,
  className = ''



}: {categoryId: string;className?: string;}) {
  const category =
  RESOURCE_CATEGORIES.find((c) => c.id === categoryId) ||
  RESOURCE_CATEGORIES[RESOURCE_CATEGORIES.length - 1];
  const Icon = category.icon;
  return (
    <div
      className={`flex items-center gap-1.5 px-2.5 py-1 ${category.bg} ${category.color} rounded-lg text-xs font-semibold ${className}`}>
      
      <Icon className="w-3.5 h-3.5" />
      {category.name}
    </div>);

}