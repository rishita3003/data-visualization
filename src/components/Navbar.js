import React from 'react';
import '../styles/Dashboard.css';

function Navbar() {
  return (
    <nav className="sidebar">
      <div className="sidebar-header">Dashboard</div>
      <ul className="sidebar-menu">
        <li className="sidebar-item active">Home</li>
        <li className="sidebar-item">Analytics</li>
        <li className="sidebar-item">Reports</li>
        <li className="sidebar-item">Settings</li>
      </ul>
    </nav>
  );
}

export default Navbar;