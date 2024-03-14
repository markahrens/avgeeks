import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';


export default function Leaflet(locations) {
  const center = [51.505, -0.09];

  function MultipleMarkers() {
    const locationCoords = new Array();
    var planeIcon = L.icon({
      iconUrl: '/pin-icons/plane.png',
      iconSize: [31, 46]
    });
    var trainIcon = L.icon({
      iconUrl: '/pin-icons/train.png',
      iconSize: [31, 46]
    });
    var shipIcon = L.icon({
      iconUrl: '/pin-icons/ship.png',
      iconSize: [31, 46]
    });
    locations.locations.forEach(loc => {
      var iconLabel = 'plane';
      if (loc.id.startsWith('port')) { iconLabel = 'ship'}
      if (loc.id.startsWith('station')) { iconLabel = 'train'}
      locationCoords.push({
        'coords':[loc.data.lat,loc.data.lng],
        'name':loc.data.name,
        'icon': L.icon({
          iconUrl: '/pin-icons/'+iconLabel+'.png',
          iconSize: [31, 46]
        })
      });
    });
    return locationCoords.map((loc, index) => {
      return(
        <Marker key={index} position={loc.coords} icon={loc.icon}>
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