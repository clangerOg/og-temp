import React from 'react';

export const TWIndicator: React.FC = () => {
  return (
    <div className="fixed left-4 bottom-4 z-50 text-white">
      <div className="bg-slate-900 rounded-full p-1 text-sm block sm:hidden ">
        SM
      </div>
      <div className="bg-slate-900 rounded-full p-1 text-sm hidden sm:block md:hidden">
        MD
      </div>
      <div className="bg-slate-900 rounded-full p-1 text-sm hidden md:block lg:hidden">
        LG
      </div>
      <div className="bg-slate-900 rounded-full p-1 text-sm hidden lg:block xl:hidden">
        XL
      </div>
      <div className="bg-slate-900 rounded-full p-1 text-sm hidden xl:block">
        2XL
      </div>
    </div>
  );
};
