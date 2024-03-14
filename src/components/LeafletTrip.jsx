import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { useMap } from 'react-leaflet/hooks'
import "leaflet-arc";

export default function Leaflet(stops) {
  const bounds = L.latLngBounds();
  stops.stops.forEach(s => {
    bounds.extend([s.data.lat, s.data.lng]);
  })
  function TripArc() {
    const map = useMap();
    if ( stops.stops.length > 1) {
      for (let i = 0; i < stops.stops.length - 1; i++) {
        L.Polyline.Arc([stops.stops[i].data.lat, stops.stops[i].data.lng], [stops.stops[i+1].data.lat, stops.stops[i+1].data.lng], {color: '#4A4DE7',
        vertices: 200}).addTo(map);
      }
    }
    return null;
  }

  return (
    <MapContainer
      className="map-container"
      bounds={bounds}
      zoom={2}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <TripArc />
    </MapContainer>
  );
}
