import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";
import icon from "../../assets/log.png";
import L from "leaflet";

const LocationsContainer = ({ location }) => {
  const isOpen = useSelector((state) => state.menu.isOpen);
  const mapLink = `https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`;
  const customIcon = L.icon({
    iconUrl: icon,
    iconSize: [38, 38], // Adjust the size as needed
    iconAnchor: [19, 38], // Adjust the anchor point as needed
    popupAnchor: [0, -38], // Adjust the popup anchor point as needed
  });

  return (
    <div>
      <div className=" overflow-hidden">
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
      </div>
      <div className="">
        {!isOpen && (
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={13}
            scrollWheelZoom={false}
            className="h-80"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[location.lat, location.lng]} icon={customIcon}>
              <Popup>
                <a href={mapLink} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </Popup>
            </Marker>
          </MapContainer>
        )}
      </div>
    </div>
  );
};

export default LocationsContainer;
