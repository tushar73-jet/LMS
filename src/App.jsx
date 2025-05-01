import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Feedback from './pages/Feedback';
import PaymentPage from './pages/PaymentPage';

import './App.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <nav className="navbar">
            <div className="logo">LearnX</div>
            <ul className="nav-links">
              <li><Link to="/dashboard" className="nav-btn">Dashboard</Link></li>
              <li><Link to="/courses" className="nav-btn">Courses</Link></li>
              <li><Link to="/profile" className="nav-btn">Profile</Link></li>
              <li><Link to="/feedback" className="nav-btn">Feedback</Link></li>
              <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/login" element={<Navigate to="/dashboard" />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="*" element={<Login onLogin={handleLogin} />} />
        </Routes>
      )}
    </Router>
  );
}

