import React, { useState } from 'react';
import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Tooltip,
  useMapEvent,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { DivIcon } from 'leaflet';
import { useSelector } from 'react-redux';

const markerMaker = (
  outerColor,
  innerColor
) => `<svg width="36px" height="36px" viewBox="-4 0 36 36" version="1.1">
<title>map-marker</title>
<desc>Created with Sketch.</desc>
<defs></defs>
<g
  id="Vivid.JS"
  stroke="none"
  stroke-width="1"
  fill="none"
  fill-rule="evenodd"
>
  <g id="Vivid-Icons" transform="translate(-125.000000, -643.000000)">
    <g id="Icons" transform="translate(37.000000, 169.000000)">
      <g id="map-marker" transform="translate(78.000000, 468.000000)">
        <g transform="translate(10.000000, 6.000000)">
          <path
            d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"
            id="Shape"
            fill=${outerColor}
          ></path>
          <circle
            id="Oval"
            fill=${innerColor}
            fill-rule="nonzero"
            cx="14"
            cy="14"
            r="7"
          ></circle>
        </g>
      </g>
    </g>
  </g>
</g>
</svg>`;

const Controller = (props) => {
  const map = useMap();
  setTimeout(() => {
    map.invalidateSize();
    map.setView(props?.center, props?.zoom);
  }, 1000);
};
const Map = (props) => {
  const state = useSelector((state) => state.homePageMap);
  const showOnMap = state?.showOnMap;
  const allNodes = state?.data?.filter((node) => node.lat && node.lng);
  const nodes = showOnMap
    ? allNodes?.filter((node) => node.node_id === showOnMap)
    : allNodes;

  const center = showOnMap
    ? [nodes[0]?.lat, nodes[0]?.lng]
    : [35.732668, 51.344894];
  return (
    <div className={props.className}>
      <MapContainer
        style={{
          position: 'absolute',
          top: '0',
          bottom: '0',
          width: '100%',
          borderRadius: '8px',
          margin: '0',
          height: '100%',
        }}
        center={[35.732668, 51.344894]}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
        attributionControl={false}
      >
        {/* {!state.loading && ( */}
        <TileLayer
          attribution="© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>
            "
          url="https://api.mapbox.com/styles/v1/alilesani/cl4xp4fm0002x14llprn1814d/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWxpbGVzYW5pIiwiYSI6ImNsNHd3M3I0MTFjcGEzcnBoMmJibWRqcGcifQ.kOydH_HF7pJHkehjAoCTXg"
          // '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* )} */}
        {nodes?.map((node) => {
          const icon = new DivIcon({
            className: 'my-custom-pin',
            iconSize: [30, 30],
            // iconAnchor: [12, 41],
            popupAnchor: [0, -25],
            html: markerMaker(node?.color, ''),
          });
          return (
            <Marker
              key={node.node_id}
              position={[node.lat, node.lng]}
              icon={icon}
            >
              <Popup>{node.node_id}</Popup>
            </Marker>
          );
        })}

        <Controller center={center} zoom={showOnMap ? 19 : 5} />
      </MapContainer>
      {/* {state.loading && <LoadingSpinner />} */}
    </div>
  );
};

export default Map;

/* <Tooltip direction='top' offset={[-10,-40]} opacity={1} permanent>{node.node_id}</Tooltip>  */
