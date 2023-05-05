import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import './curent.css';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
const Controller = (props) => {
  const map = useMap();
  setTimeout(() => {
    map.invalidateSize();
    map.setView(props?.center, props?.zoom);
  }, 1000);
};
const CurrentNodeMap = (props) => {
  const nodes = props.nodes;
  const center = [35.732668, 51.344894];
  return (
    <MapContainer
      style={{
        position: 'absolute',
        top: '0',
        bottom: '0',
        width: '89%',
        height: '100%',
        margin: '0',
        borderRadius: '4px',
      }}
      center={[35.732668, 51.344894]}
      zoom={15}
      scrollWheelZoom={true}
      zoomControl={false}
      attributionControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {nodes
        ?.filter((node) => node.lat && node.lng)
        .map((node) => {
          return (
            <Marker
              key={node.node_id}
              position={[node.lat, node.lng]}
              icon={
                new Icon({
                  iconUrl: markerIconPng,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                })
              }
            >
              <Popup>{node.node_id}</Popup>
              {/* <Tooltip direction='top' offset={[-10,-40]} opacity={1} permanent>{node.node_id}</Tooltip>  */}
            </Marker>
          );
        })}
      {console.log(nodes[0].lat)}
      <Controller
        center={
          nodes[0].lat && nodes[0].lng ? [nodes[0].lat, nodes[0].lng] : center
        }
        zoom={nodes[0].lat && nodes[0].lng ? 16 : 13}
      />
    </MapContainer>
  );
};

export default CurrentNodeMap;
