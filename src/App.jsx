import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Login';
import PersonnelManagement from './components/PersonnelManagement';
import EscalationManagement from './components/Escalation';
import RealTimeMap from './components/RealTimeMap';
import Dashboard from './components/Dashboard';
import BarangayReportsPage from './components/BarangayReport';


function App() {
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Main Content */}
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path='/login' element= {<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/personnel-management" element={<PersonnelManagement />} />
            <Route path="/barangay/:barangayId" element={<BarangayReportsPage />} />
            <Route path='/view-escalations' element={<EscalationManagement />} />
            <Route path='/real-time-map' element={<RealTimeMap />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
