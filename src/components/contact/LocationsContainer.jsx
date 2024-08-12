import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationsContainer = ({ location }) => {
  const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;

  return (
    <div className="p-6">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h2 className="font-semibold text-xl mb-2">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              {location.name}
            </a>
          </h2>
          <p>{location.address}</p>
          <p>{location.phone}</p>
          <p>{location.hours}</p>
        </div>
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={13}
          scrollWheelZoom={false}
          className="h-64"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[location.lat, location.lng]}>
            <Popup>{location.name}</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default LocationsContainer;
