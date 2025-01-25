// components/Recent.tsx

import React from 'react';

// Define a type for the data that will be passed to the Recent component
interface LourdProps {
  data: any[];
}

const Lourd = ({ data }: LourdProps) => {
  return (
    <div className="grid-section">
      <div className="flex justify-between items-center p-4">
        <h2 className="text-xl font-bold">Lourd</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {data && data.length > 0 ? (
          data.map((item, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          ))
        ) : (
          <p>No lourd news available</p>
        )}
      </div>
    </div>
  );
};

export default Lourd;
