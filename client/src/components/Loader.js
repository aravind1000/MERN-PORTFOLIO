import React from 'react';

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-white dark:bg-darkBg z-[10000]">
      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-secondary dark:border-secondary"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-300">A</h1>
          </div>
        </div>
        <h1 className="text-2xl font-semibold text-gray-700 sm:text-xl dark:text-gray-300 animate-pulse">Loading...</h1>
      </div>
    </div>
  );
}

export default Loader;
