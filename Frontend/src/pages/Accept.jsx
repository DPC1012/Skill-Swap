import React from 'react';
import { Link } from 'react-router-dom';

const dummyRequests = [
  {
    id: 1,
    name: 'Marc Demo',
    status: 'Pending',
    rating: 3.8,
    offeredSkills: ['JavaScript'],
    wantedSkills: ['Photoshop'],
    photo: 'https://via.placeholder.com/100'
  },
  {
    id: 2,
    name: 'John Doe',
    status: 'Rejected',
    rating: 3.8,
    offeredSkills: [],
    wantedSkills: [],
    photo: 'https://via.placeholder.com/100'
  }
];

const Accept = () => {
  return (
    <div className="min-h-screen bg-white text-black p-6 mt-12">
      <div className="max-w-4xl mx-auto border border-gray-300 rounded-xl p-6 shadow-lg bg-white">

        {/* Header */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-4">
          <h1 className="text-xl font-semibold">Skill Swap Platform</h1>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-violet-600">Home</Link>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-400">
              <img src="https://via.placeholder.com/150" alt="User" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="flex items-center gap-4 mb-6">
          <select className="border border-gray-300 px-2 py-1 rounded">
            <option value="Pending">Pending</option>
            <option value="Accepted">Accepted</option>
            <option value="Rejected">Rejected</option>
          </select>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 border border-gray-300 px-3 py-1 rounded cursor-pointer"
          />
          <button className="bg-violet-700 text-white px-4 py-1 rounded cursor-pointer">Search</button>
        </div>

        {/* Request Cards */}
        {dummyRequests.map((req) => (
          <div key={req.id} className="border border-gray-300 rounded-lg p-4 mb-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border border-gray-400">
                <img src={req.photo} alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-lg font-semibold">{req.name}</h2>
                <p className="text-sm text-gray-600">Rating: {req.rating}/5</p>
                <p className="text-sm mt-1">Skills Offered → {req.offeredSkills.join(', ') || 'None'}</p>
                <p className="text-sm">Skill Wanted → {req.wantedSkills.join(', ') || 'None'}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium">Status: <span className={`font-semibold ${req.status === 'Pending' ? 'text-yellow-400' : req.status === 'Rejected' ? 'text-red-500' : 'text-green-600'}`}>{req.status}</span></p>
              {req.status === 'Pending' && (
                <div className="mt-2 flex gap-2">
                  <button className="text-violet-600 font-medium cursor-pointer">Accept</button>
                  <button className="text-violet-600 font-medium cursor-pointer">Reject</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accept;
