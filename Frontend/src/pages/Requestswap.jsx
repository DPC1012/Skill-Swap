import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const RequestSwap = () => {
 const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user/demo`);
        setUser(res.data);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div className="text-center mt-12">Loading user...</div>;
  }

  return (
    <div className=" bg-white text-black p-6 mt-12">
      <div className="max-w-3xl mx-auto bg-white border border-gray-300 rounded-xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Skill Swap Platform</h1>
          <div className="flex items-center gap-4">
            <Link to="/Accept" className="text-blue-600">Swap Request</Link>
            <Link to="/" className="text-blue-600">Home</Link>
            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-400">
              <img src={user.photo} alt="Profile" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            {/* <button className="mb-4 bg-teal-600 text-white px-4 py-2 rounded">Request</button> */}
            <h2 className="text-xl font-semibold mb-2">{user.name}</h2>
            <div className="mb-4">
              <p className="font-medium">Skills Offered:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {user.offeredSkills.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-200 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="font-medium">Skills Wanted:</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {user.wantedSkills.map((skill, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-200 rounded-full text-sm">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-medium">Rating and Feedback:</p>
              <p className="mt-1 text-gray-700 italic">{user.feedback}</p>
            </div>
          </div>

          <div className="md:w-1/3 flex flex-col items-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border border-gray-400">
              <img src={user.photo} alt="Profile" className="w-full h-full object-cover" />
            </div>
            <p className="text-sm text-gray-500 mt-2">Profile Photo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestSwap;
