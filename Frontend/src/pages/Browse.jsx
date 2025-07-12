import React from 'react';

const Browse = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Browse Skills</h2>
      <input placeholder="Search skills (e.g., Photoshop)" className="w-full p-2 mb-4 border" />
      <div className="space-y-4">
        {/* Mock cards */}
        <div className="p-4 border rounded shadow">
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p>Offered: Photoshop</p>
          <p>Wants: Excel</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Request Swap</button>
        </div>
        {/* Repeat for others */}
      </div>
    </div>
  );
};

export default Browse;