import { MapContainer, Marker, TileLayer } from 'react-leaflet';

type MapProps = {
  places?: PlaceType[];
};

export function Map({ places = [] }: MapProps) {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map(({ id, name, location }) => (
        <Marker
          key={id}
          position={[location.latitude, location.longitude]}
          title={name}
        />
      ))}
    </MapContainer>
  );
}

export default Map;
