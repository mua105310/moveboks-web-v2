import React from 'react';

export default function LoadingCard() {
  return (
    <div
      className={`shadow-lg
        border border-white/20
        text-white
        transform h-[200px]
        overflow-hidden rounded-lg
        relative
        animate-pulse`}
    >
      <div className="relative h-full flex flex-col p-4 bg-[#151515]/80">
        {/* Title skeleton */}
        <div className="h-6 w-3/4 bg-gray-600/50 rounded mb-2"></div>
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-600/50 rounded"></div>
          <div className="h-3 w-5/6 bg-gray-600/50 rounded"></div>
        </div>
        
        {/* Features skeleton */}
        <div className="flex flex-wrap gap-2 mt-4">
          <div className="h-6 w-16 bg-blue-500/30 rounded-full"></div>
          <div className="h-6 w-20 bg-blue-500/30 rounded-full"></div>
          <div className="h-6 w-14 bg-blue-500/30 rounded-full"></div>
        </div>
        
        {/* Price skeleton */}
        <div className="mt-auto">
          <div className="h-4 w-24 bg-gray-600/50 rounded"></div>
        </div>
      </div>
    </div>
  );
} 