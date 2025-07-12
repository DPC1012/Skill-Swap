import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
        <div className='h-screen'>
            <div className="p-6 grid">
            <h1 className="text-5xl font-bold mb-4 justify-center flex align-center mt-50">Skill Swap Platform</h1>
            <p className="mb-4 text-md justify-center flex align-center">Connect and exchange skills with others in your community.</p>
            <div className="flex gap-4 justify-center flex align-center">
                <Link to="/profile" className="bg-violet-700 text-white px-4 py-2 rounded">My Profile</Link>
                <Link to="/browse" className="bg-violet-700 text-white px-4 py-2 rounded">Browse Skills</Link>
                <Link to="/Accept" className="bg-violet-700 text-white px-4 py-2 rounded">Requests</Link>
            </div>
            </div>
        </div>
        
        
    
  );
};

export default Home;