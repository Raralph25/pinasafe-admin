import React, { useState } from 'react';
import Navigation from './Navigation';

function PersonnelManagement() {
  const [personnel, setPersonnel] = useState([]);
  const [name, setName] = useState('');
  const [barangay, setBarangay] = useState('');
  const [removeId, setRemoveId] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    const newPersonnel = { id: personnel.length + 1, name, barangay };
    setPersonnel([...personnel, newPersonnel]);
    setName('');
    setBarangay('');
    alert('Personnel added successfully.');
  };

  const handleRemove = (e) => {
    e.preventDefault();
    setPersonnel(personnel.filter((p) => p.id !== parseInt(removeId)));
    setRemoveId('');
    alert('Personnel removed successfully.');
  };

  return (
    <div>
      <Navigation />
      <h2>Personnel Management</h2>

      <div className="row">
        {/* Add Personnel */}
        <div className="col-md-6">
          <h3>Add Personnel</h3>
          <form onSubmit={handleAdd}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Barangay</label>
              <input
                type="text"
                className="form-control"
                value={barangay}
                onChange={(e) => setBarangay(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-success">
              Add Personnel
            </button>
          </form>
        </div>

        {/* Remove Personnel */}
        <div className="col-md-6">
          <h3>Remove Personnel</h3>
          <form onSubmit={handleRemove}>
            <div className="mb-3">
              <label className="form-label">Personnel ID</label>
              <input
                type="number"
                className="form-control"
                value={removeId}
                onChange={(e) => setRemoveId(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Remove Personnel
            </button>
          </form>
        </div>
      </div>

      {/* List of Personnel */}
      <h3 className="mt-4">Current Personnel</h3>
      <ul className="list-group">
        {personnel.map((p) => (
          <li key={p.id} className="list-group-item">
            {p.id}. {p.name} - {p.barangay}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PersonnelManagement;
