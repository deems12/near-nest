import React from 'react';
import { DevRoleSwitcher } from '../common/DevRoleSwitcher';
export function PhoneFrame({ children }: {children: React.ReactNode;}) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center font-sans text-slate-900 md:p-6 lg:p-8">
      {/*
               Responsive App Shell:
               - Mobile: Full width/height, no borders.
               - Tablet/Desktop: Centered, max-width 480px, rounded corners, shadow, thick border to simulate device.
             */}
      <div className="w-full h-[100dvh] md:h-[90vh] md:max-w-[480px] bg-white md:rounded-[2.5rem] md:shadow-2xl overflow-hidden relative flex flex-col md:border-[8px] md:border-slate-900">
        <div className="flex-1 overflow-hidden relative bg-white flex flex-col">
          {children}
        </div>
      </div>
      <DevRoleSwitcher />
    </div>);

}