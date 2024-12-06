import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Add custom styles

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    navigate('/'); // Redirect to login page
  };

  return (
    <div className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/summary">Summary</Link>
      <Link to="/reports">Reports</Link>
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
