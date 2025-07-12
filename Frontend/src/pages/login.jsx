import axios from "axios";
import React, { useState } from "react";

const Login = () => {
   const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        credentials
      );

      console.log("Login successful:", res.data);
      alert("Login successful!");
      // localStorage.setItem("token", res.data.token); // Optional
      // redirect to dashboard or home page

    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert("Login failed. Please check your email or password.");
    }
  };

  return (
     <div className="flex h-screen justify-center items-center bg-white">
      <div className="flex border border-black bg-white shadow-md rounded-lg">
        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={credentials.email}
            onChange={handleChange}
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full p-2 mb-4 border rounded"
          />
          <a href="" className="flex mb-4">Forgot Password ?</a>
          <button
            type="submit"
            className="bg-violet-700 text-white px-6 py-2 rounded"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
