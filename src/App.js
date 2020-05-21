import React, { useState, useEffect } from 'react';
import { TileContainer, TileTheme } from './components/styles.css';
import { timeNow, unixToMoment } from './utils/time-utils';
import SolarEventTile from './components/SolarEventTile';
import Header from './components/Header';
import fetchCoords from './utils/location-utils';

import('dotenv').then((dotenv) => dotenv.config());

const App = () => {
  const [coordinates, setCoordinates] = useState({ set: false });
  const [sunriseData, setSunriseData] = useState({});
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetchCoords((pos) => setCoordinates({
      lat: pos.coords.latitude,
      long: pos.coords.longitude,
      set: true,
    }),
    () => setCoordinates({
      lat: 51.5074,
      long: 0.1278,
      set: true,
    }));
  }, []);

  useEffect(() => {
    if (coordinates.set) {
      fetch(`https://api.opencagedata.com/geocode/v1/json?q=${coordinates.lat}+${coordinates.long}&key=${process.env.REACT_APP_OPENCAGE_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);
          const sunData = data.results[0].annotations.sun;
          setSunriseData({
            sunset: unixToMoment(sunData.set.apparent),
            sunrise: unixToMoment(sunData.rise.apparent),
          });

          const locationData = data.results[0].components;
          setLocation(`${locationData.county}, ${locationData.country}`);
        });
    }
  }, [coordinates]);

  const pickHeaderTheme = () => {
    if (sunriseData.sunrise) {
      const now = timeNow();
      if (sunriseData.sunrise.diff(now, 'minute') > 0 || sunriseData.sunset.diff(now, 'minute') <= 0) {
        return TileTheme.night;
      }
      if (sunriseData.sunset.diff(now, 'minute') <= 120) {
        return TileTheme.sunset;
      }
      return TileTheme.daytime;
    }
    return '';
  };

  return (
    <div className="App">
      <>
        <Header theme={pickHeaderTheme()} location={location} />
        <main>
          <TileContainer>
            <SolarEventTile event="Sunrise" time={sunriseData.sunrise} theme={TileTheme.daytime} />
            <SolarEventTile event="Sunset" time={sunriseData.sunset} theme={TileTheme.sunset} />
            <SolarEventTile event="Midnight" time={timeNow().endOf('day')} theme={TileTheme.night} />

          </TileContainer>
        </main>
      </>
    </div>
  );
};

export default App;
