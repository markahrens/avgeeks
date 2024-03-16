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
  function TripMarkers() {
    const locationCoords = new Array();
    stops.stops.forEach(loc => {
      var iconLabel = 'plane';
      if (loc.id.startsWith('port')) { iconLabel = 'ship'}
      if (loc.id.startsWith('station')) { iconLabel = 'train'}
      if (loc.id.startsWith('busstop')) { iconLabel = 'busstop'}
      locationCoords.push({
        'coords':[loc.data.lat,loc.data.lng],
        'name':loc.data.name,
        'code':loc.data.code,
        'icon': L.icon({
          iconUrl: '/pin-icons/'+iconLabel+'.png',
          iconSize: [31, 46],
          iconAnchor: [15, 40],
          popupAnchor:  [0, -30]
        })
      });
    });
    return locationCoords.map((loc, index) => {
      return(
        <Marker key={index} position={loc.coords} icon={loc.icon}>
           <Popup>
            {loc.name} ({loc.code})
          </Popup>
        </Marker>
      );
    });
  }

  return (
    <MapContainer
      className="map-container"
      bounds={bounds}
      zoom={2}
      scrollWheelZoom={false}
    >
      <TileLayer
        url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}'
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        ext = 'png'
      />
      <TripArc />
      <TripMarkers />
    </MapContainer>
  );
}
