import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({ email: '', password: '', confirmPassword: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup:', formData);
  };

  return (
    <div className="flex h-screen justify-center items-center bg-white">
      <div className="flex border border-black bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
          />
          <button
            type="submit"
            className="bg-violet-700 text-white px-6 py-2 rounded "
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
