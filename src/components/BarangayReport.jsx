import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams hook
import Modal from 'react-bootstrap/Modal'; // Import Modal from react-bootstrap
import Navigation from './Navigation';

function BarangayReportsPage() {
  const { barangayId } = useParams(); // Get the barangayId from the URL using useParams
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [currentVideoUrl, setCurrentVideoUrl] = useState(""); // State to store the video URL to display in the modal

  const reportsData = {
    "Barangay Commonwealth": [
      { user: "Elijah Sak", description: "Flood near the river", videoUrl: "https://www.example.com/video1.mp4", status: "Pending" },
      { user: "Big Mom", description: "Landslide in the area", videoUrl: "https://www.example.com/video2.mp4", status: "Verified" },
      { user: "Straw hats", description: "Misleading report", videoUrl: "https://www.example.com/video3.mp4", status: "Rejected" },
    ],
    "Barangay Silangan": [
      { user: "Alice Wonderland", description: "Roadblock reported", videoUrl: "https://www.example.com/video4.mp4", status: "Pending" },
      { user: "Deo Balbuena", description: "Tree fallen on the road", videoUrl: "https://www.example.com/video5.mp4", status: "Verified" },
      { user: "Glenn Pogi", description: "Not related to disaster", videoUrl: "https://www.example.com/video6.mp4", status: "Rejected" },
    ],
    // Add more barangays here...
  };

  const reports = reportsData[barangayId] || [];

  // Function to open the modal with the selected video URL
  const handleVideoClick = (videoUrl) => {
    setCurrentVideoUrl(videoUrl);
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentVideoUrl(""); // Clear the video URL when closing the modal
  };

  return (
    <div className="container mt-4">
      <Navigation />
      <h4>Reports for {barangayId}</h4>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Barangay</th>
            <th scope="col">Description</th>
            <th scope="col">Video</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report, index) => (
            <tr key={index}>
              <td>{report.user}</td>
              <td>{barangayId}</td>
              <td>{report.description}</td>
              <td>
                {/* Clickable video thumbnail/link */}
                <button onClick={() => handleVideoClick(report.videoUrl)} className="btn btn-link">
                  View Video
                </button>
              </td>
              <td>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for displaying the video */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Disaster Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <video width="100%" controls>
            <source src={currentVideoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default BarangayReportsPage;
