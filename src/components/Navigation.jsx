import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);  // State to control popup visibility
  const navigate = useNavigate();  // Navigate hook

  // Function to trigger sign-out popup
  const handleSignOut = () => {
    setIsPopupVisible(true); // Show the popup
  };

  // Confirm the sign out and navigate to login page
  const confirmSignOut = () => {
    navigate('/login');
  };

  // Cancel sign-out and close the popup
  const cancelSignOut = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <nav className="col-md-3 col-lg-2 d-md-block bg-dark text-white sidebar p-3 fixed-sidebar">
        {/* Logo */}
        <div className="text-center mb-4">
          <img
            src="src/assets/img/map.png" // Replace this with the actual path to your logo
            alt="PinaSafe Logo"
            className="img-fluid" // Makes the logo responsive
            style={{ maxWidth: '200px' }} // Adjust the logo size if necessary
          />
        </div>
        <h2 className="text-center text-light mb-4">PinaSafe Admin</h2>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard">
              <i className="fa fa-tachometer fa-lg me-2"></i> Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/personnel-management">
              <i className="fa fa-users fa-lg me-2"></i> Account Management
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/view-escalations">
              <i className="fa fa-exclamation-triangle fa-lg me-2"></i> Escalated Reports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/real-time-map">
              <i className="fa fa-map-marker fa-lg me-2"></i> Real-Time Map
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-link text-white" onClick={handleSignOut}>
              <i className="fa fa-sign-out fa-lg me-2"></i> Sign Out
            </button>
          </li>
        </ul>
      </nav>

      {/* Custom Popup for Sign Out Confirmation */}
      {isPopupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h5>Confirm Sign Out</h5>
            <p>Are you sure you want to sign out?</p>
            <div className="popup-buttons">
              <button className="btn btn-secondary" onClick={cancelSignOut}>Cancel</button>
              <button className="btn btn-danger" onClick={confirmSignOut}>Sign Out</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
