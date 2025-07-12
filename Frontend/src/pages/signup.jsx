import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/signup`,
        {
          name: formData.name,
          email: formData.email,
          password: formData.password
        }
      );

      console.log("Signup successful:", res.data);
      alert("Account created successfully!");
      // localStorage.setItem("token", res.data.token); // Optional

    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
      alert("Signup failed.");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center bg-white">
      <div className="flex border border-black bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />

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
            className="bg-violet-700 text-white px-6 py-2 rounded"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
