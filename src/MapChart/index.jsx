import React from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from 'react-simple-maps';

const MapChart = ({ location }) => {
  const { name, coord } = location;
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [360 - coord.lon, -1 * coord.lat, 0],
        center: [0, 0],
        scale: 500,
      }}
    >
      <Geographies
        geography="/features.json"
        fill="#D6D6DA"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[coord.lon, coord.lat]}
        dx={0}
        dy={0}
        connectorProps={{
          stroke: '#FF5533',
          strokeWidth: 3,
          strokeLinecap: 'round',
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {name}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
