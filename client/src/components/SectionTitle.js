import React from 'react';

function SectionTitle({ title }) {
  return (
    <div className="flex flex-col items-center py-6">
      <h1 className="text-3xl text-secondary font-bold text-center">{title}</h1>
      <div className="w-16 h-1 bg-secondary rounded-md mt-2"></div>
    </div>
  );
}

export default SectionTitle;
