import React, { useState, useEffect } from 'react';
import { TileContainer, TileTheme } from './components/styles.css';
import { timeNow, convertToMoment } from './utils/time-utils';
import SolarEventTile from './components/SolarEventTile';
import Header from './components/Header';
import fetchCoords from './utils/location-utils';


const App = () => {
  const [location, setLocation] = useState({ set: false });

  const [sunriseData, setSunriseData] = useState({});

  useEffect(() => {
    fetchCoords((pos) => setLocation({
      lat: pos.coords.latitude,
      long: pos.coords.longitude,
      set: true,
    }),
    () => setLocation({
      lat: 51.5074,
      long: 0.1278,
      set: true,
    }));
  }, []);

  useEffect(() => {
    fetch(`https://api.sunrise-sunset.org/json?lat=${location.lat}&lng=${location.long}`)
      .then((response) => response.json())
      .then((data) => setSunriseData({
        sunset: convertToMoment(data.results.sunset),
        sunrise: convertToMoment(data.results.sunrise),
        midday: convertToMoment(data.results.midday),
      }));
  }, [location]);

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
        <Header theme={pickHeaderTheme()} />
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
