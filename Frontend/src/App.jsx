import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Browse from './pages/Browse';
import Navbar from './components/Navbar';
import Login from './pages/login';
import Signup from './pages/signup';
import Requestswap from './pages/RequestSwap';
import Swaprequest from './pages/Accept';
import Accept from './pages/Accept';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Requestswap" element={<Requestswap/>} />
        <Route path="/Accept" element={<Accept/>} />
      </Routes>
    </Router>
  );
};

export default App;