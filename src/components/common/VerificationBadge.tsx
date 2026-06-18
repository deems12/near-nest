import React from 'react';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';
import { VerificationStatus } from '../../types';
export function VerificationBadge({
  status,
  className = ''



}: {status: VerificationStatus;className?: string;}) {
  if (status === 'Verified') {
    return (
      <div
        className={`flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-[10px] font-bold border border-blue-100 ${className}`}>
        
        <CheckCircle2 className="w-3 h-3" />
        VERIFIED
      </div>);

  }
  if (status === 'Pending') {
    return (
      <div
        className={`flex items-center gap-1 px-2 py-0.5 bg-amber-50 text-amber-700 rounded-full text-[10px] font-bold border border-amber-100 ${className}`}>
        
        <Clock className="w-3 h-3" />
        PENDING
      </div>);

  }
  return (
    <div
      className={`flex items-center gap-1 px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full text-[10px] font-bold border border-gray-200 ${className}`}>
      
      <XCircle className="w-3 h-3" />
      REMOVED
    </div>);

}