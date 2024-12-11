import React, { useState } from 'react';
import Navigation from './Navigation';
import { FaBell } from 'react-icons/fa';

function EscalationManagement() {
  const [escalations, setEscalations] = useState([
    { id: 1, barangay: 'Barangay 1', description: 'Flooding in area', status: 'Pending' },
    { id: 2, barangay: 'Barangay 2', description: 'Landslide reported', status: 'Pending' },
  ]);

  const pendingCount = escalations.filter((e) => e.status === 'Pending').length;

  const resolveEscalation = (id) => {
    const updatedEscalations = escalations.map((e) =>
      e.id === id ? { ...e, status: 'Resolved' } : e
    );
    setEscalations(updatedEscalations);
    alert(`Escalation #${id} marked as resolved.`);
  };

  return (
    <div>
      <h2>Escalation Management</h2>
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
            <li className="dropdown-header">Pending Escalations</li>
            {escalations.filter((e) => e.status === 'Pending').length > 0 ? (
              escalations
                .filter((e) => e.status === 'Pending')
                .map((e) => (
                  <li key={e.id} className="dropdown-item">
                    <strong>{e.barangay}:</strong> {e.description}
                  </li>
                ))
            ) : (
              <li className="dropdown-item text-muted">No pending escalations.</li>
            )}
          </ul>
        </div>
      </div>

      {/* Escalation Table */}
      <div>
        <h3>All Escalations</h3>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Barangay</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {escalations.map((escalation) => (
              <tr key={escalation.id}>
                <td>{escalation.id}</td>
                <td>{escalation.barangay}</td>
                <td>{escalation.description}</td>
                <td>
                  <span
                    className={`badge ${
                      escalation.status === 'Pending' ? 'bg-warning' : 'bg-success'
                    }`}
                  >
                    {escalation.status}
                  </span>
                </td>
                <td>
                  {escalation.status === 'Pending' && (
                    <button
                      className="btn btn-sm btn-primary"
                      onClick={() => resolveEscalation(escalation.id)}
                    >
                      Mark as Resolved
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EscalationManagement;
