import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Skill Swap Platform</h1>
      <p className="mb-4">Connect and exchange skills with others in your community.</p>
      <div className="flex gap-4">
        <Link to="/profile" className="bg-blue-500 text-white px-4 py-2 rounded">My Profile</Link>
        <Link to="/browse" className="bg-green-500 text-white px-4 py-2 rounded">Browse Skills</Link>
      </div>
    </div>
  );
};

export default Home;