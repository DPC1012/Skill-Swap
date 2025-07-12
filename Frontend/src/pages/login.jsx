import React, { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", credentials);
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
