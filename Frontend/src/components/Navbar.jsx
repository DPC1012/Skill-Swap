import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex gap-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
        <Link to="/browse" className="hover:underline">Browse</Link>
      </div>
    </nav>
  );
};

export default Navbar;