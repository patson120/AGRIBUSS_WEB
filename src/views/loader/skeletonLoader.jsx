// SkeletonLoader.js
import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="bg-gray-200 animate-pulse m-4 p-4 rounded-lg w-64">
          <div className="h-64 bg-gray-300 rounded-md mb-4"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;