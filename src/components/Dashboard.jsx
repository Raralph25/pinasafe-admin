import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 
import Navigation from './Navigation';

function Dashboard() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New escalation from Barangay 1" },
    { id: 2, message: "Flood report verified in Barangay 5" },
  ]);
  const [showNotifs, setShowNotifs] = useState(false);

  // Dummy data for metrics
  const [metrics] = useState({
    totalReports: 245,
    resolvedReports: 200,
    pendingReports: 45,
    escalations: 12,
  });

  // Dummy data for barangay reports
  const [barangayReports] = useState([
    { barangay: "Barangay Commonwealth", reports: 30 },
    { barangay: "Barangay Silangan", reports: 50 },
    { barangay: "Barangay Payatas", reports: 40 },
    { barangay: "Barangay Holy Spirit", reports: 25 },
    { barangay: "Barangay Bagbag", reports: 100 },
  ]);

  // State for selected barangay to view its detailed reports
  const navigate = useNavigate(); 

  const pendingCount = notifications.length;

  const handleBarangayClick = (barangay) => {
    navigate(`/barangay/${barangay}`); 
  };

  return (
    <div className="container mt-4">
    <Navigation /> 
      {/* Notification Bell */}
      <div className="d-flex justify-content-end mb-4">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle position-relative"
            id="notificationDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaBell size={24} />
            {pendingCount > 0 && (
              <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                {pendingCount}
              </span>
            )}
          </button>

          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="notificationDropdown">
            <li className="dropdown-header">Notifications</li>
            {notifications.length > 0 ? (
              notifications.map((notif) => (
                <li key={notif.id} className="dropdown-item">
                  {notif.message}
                </li>
              ))
            ) : (
              <li className="dropdown-item text-muted">No new notifications.</li>
            )}
          </ul>
        </div>
      </div>

      {/* Metrics Section */}
      <h2>Dashboard</h2>
      <div className="row my-4">
        <div className="col-md-3">
          <div className="card custom-card text-center">
            <div className="card-body">
              <h5 className="card-title">Total Reports</h5>
              <p className="card-text display-6">{metrics.totalReports}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card custom-card text-center">
            <div className="card-body">
              <h5 className="card-title">Resolved Reports</h5>
              <p className="card-text display-6">{metrics.resolvedReports}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card custom-card text-center">
            <div className="card-body">
              <h5 className="card-title">Pending Reports</h5>
              <p className="card-text display-6">{metrics.pendingReports}</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card custom-card text-center">
            <div className="card-body">
              <h5 className="card-title">Escalations</h5>
              <p className="card-text display-6">{metrics.escalations}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Barangay Breakdown Section */}
      <div className="mt-4">
        <h4>Reports by Barangay</h4>
        <table className="table custom-table mt-3">
          <thead>
            <tr>
              <th scope="col">Barangay</th>
              <th scope="col">Reports</th>
            </tr>
          </thead>
          <tbody>
            {barangayReports.map((barangay, index) => (
              <tr
                key={index}
                onClick={() => handleBarangayClick(barangay.barangay)}
                style={{ cursor: "pointer" }}
              >
                <td>{barangay.barangay}</td>
                <td>{barangay.reports}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
