import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import Navigation from './Navigation';

const verifiedVideos = [
  {
    id: 1,
    title: 'Flood in Barangay 1',
    description: 'Heavy flooding reported.',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    coordinates: [14.6507, 121.0496], // Replace with actual GPS coordinates
  },
  {
    id: 2,
    title: 'Landslide in Barangay 2',
    description: 'Landslide blocking main road.',
    videoUrl: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4',
    coordinates: [14.6575, 121.0359], // Replace with actual GPS coordinates
  },
];

function RealTimeMap() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoIcon = new Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/1160/1160358.png', // Replace with custom icon if needed
    iconSize: [32, 32],
  });

  return (
    <div>
      <Navigation />
      <h2>Real-Time Map</h2>

      {/* Map Container */}
      <MapContainer
        center={[14.6507, 121.0496]} // Centered on Quezon City
        zoom={13}
        style={{ height: '500px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Video Markers */}
        {verifiedVideos.map((video) => (
          <Marker
            key={video.id}
            position={video.coordinates}
            icon={videoIcon}
            eventHandlers={{
              click: () => setSelectedVideo(video),
            }}
          >
            <Popup>
              <strong>{video.title}</strong>
              <p>{video.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
          tabIndex="-1"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="modal-dialog modal-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedVideo.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setSelectedVideo(null)}
                ></button>
              </div>
              <div className="modal-body">
                <p>{selectedVideo.description}</p>
                <video controls style={{ width: '100%' }}>
                  <source src={selectedVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RealTimeMap;
