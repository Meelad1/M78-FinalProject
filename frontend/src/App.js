import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Summary from './pages/Summary';
import Reports from './pages/Reports';
import Navbar from './components/Navbar'; // Import the new Navbar component

const App = () => {
  const isLoggedIn = !!localStorage.getItem('token'); // Check if the user is logged in

  return (
    <div>
      {isLoggedIn && <Navbar />} {/* Show Navbar only if the user is logged in */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </div>
  );
};

export default App;
