import { useState, useEffect } from 'react';
import './App.css';

import MapChart from './MapChart';

function App() {
  const locations = [
    {
      name: 'Melbourne',
      country: 'AU',
      coord: { lon: 144.9633, lat: -37.814 },
    },
    { name: 'Tokyo', country: 'JP', coord: { lon: 139.6917, lat: 35.6895 } },
    { name: 'New York', country: 'US', coord: { lon: -74.006, lat: 40.7143 } },
    { name: 'London', country: 'GB', coord: { lon: -0.1257, lat: 51.5085 } },
    { name: 'Paris', country: 'FR', coord: { lon: 2.3488, lat: 48.8534 } },
    { name: 'Munich', country: 'DE', coord: { lon: 11.5755, lat: 48.1374 } },
  ];

  let [location, setLocation] = useState(locations[0]);

  let handleCityChange = (e) => {
    setLocation(locations[e.target.value]);
  };

  useEffect(() => {}, [location]);

  return (
    <>
      <div>
        <select onChange={handleCityChange}>
          {locations.map((loc, ix) => (
            <option key={ix} value={ix}>
              {loc.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <MapChart location={location} />
      </div>
    </>
  );
}

export default App;
