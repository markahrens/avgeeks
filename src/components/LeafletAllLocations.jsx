import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';


export default function Leaflet(locations) {
  const center = [51.505, -0.09];

  function MultipleMarkers() {
    const locationCoords = new Array();
    locations.locations.forEach(loc => {
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
          iconSize: [31, 46]
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
      className='map-container'
      center={center}
      zoom={2}
      scrollWheelZoom={false}
    >
      <TileLayer
        url='https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.{ext}'
        attribution='&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        ext = 'png'
      />
      <MultipleMarkers />
    </MapContainer>
  );
}