import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" flex justify-between bg-violet-700 text-white p-4 fixed w-full top-0 left-0">
      <div className="flex gap-6 ml-4">
        <Link to="/" className="hover:underline ">Home</Link>
        <Link to="/profile" className="hover:underline">Profile</Link>
        <Link to="/browse" className="hover:underline">Browse</Link>
      </div>
      <div className='flex gap-6 mr-4'>
        <Link to="/login" className="hover:underline">Login</Link>
        <Link to="/signup" className="hover:underline">SignUp</Link>
      </div>
    </nav>
  );
};

export default Navbar;