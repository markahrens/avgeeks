import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';


export default function Leaflet(locations) {
  const center = [51.505, -0.09];

  function MultipleMarkers() {
    const locationCoords = new Array();
    locations.locations.forEach(loc => {
      locationCoords.push({
        'coords':[loc.data.lat,loc.data.lng],
        'name':loc.data.name
      });
    });
    console.log(locationCoords);
    return locationCoords.map((loc, index) => {
      return(
        <Marker key={index} position={loc.coords}>
           <Popup>
            {loc.name}
          </Popup>
        </Marker>
      );
    });
  }

  return (
    <MapContainer
      className='map-container'
      center={center}
      zoom={2}
      style={{ height: 400, width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MultipleMarkers />
    </MapContainer>
  );
}