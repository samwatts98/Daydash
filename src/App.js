import React, { useState, useEffect } from 'react';
import {
  FiSunset, FiSunrise, FiMoon, FiCloud, FiCloudRain, FiSun, FiCloudSnow,
} from 'react-icons/fi';
import { TileContainer, TileTheme } from './components/styles.css';
import { timeNow, unixToMoment, formatDay } from './utils/time-utils';
import TimeEventTile from './components/TimeEventTile';
import WeatherTile from './components/WeatherTile';
import Header from './components/Header';

import('dotenv').then((dotenv) => dotenv.config());

const SOLAR_API_URL = (coords) => {
  const query = coords.set ? `${coords.lat}+${coords.long}` : process.env.REACT_APP_DEFAULT_LOCATION;
  return `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${process.env.REACT_APP_OPENCAGE_KEY}`;
};

const pickHeaderTheme = (solarState) => {
  if (solarState.sunrise) {
    const now = timeNow();
    if (solarState.sunrise.diff(now, 'minute') > 0 || solarState.sunset.diff(now, 'minute') <= 0) {
      return TileTheme.night;
    }
    if (solarState.sunset.diff(now, 'minute') <= 120) {
      return TileTheme.sunset;
    }
    return TileTheme.daytime;
  }
  return '';
};

const App = () => {
  const [coordinates, setCoordinates] = useState({});
  const [solarSchedule, setSolarSchedule] = useState({});
  const [location, setLocation] = useState('');

  useEffect(() => {
    import('./utils/location-utils')
      .then((module) => module.default((position) => setCoordinates({
        lat: position.coords.latitude,
        long: position.coords.longitude,
        valueSet: true,
        readyToLoad: true,
      }), () => setCoordinates({
        valueSet: false,
        readyToLoad: true,
      })));
  }, []);

  useEffect(() => {
    if (coordinates.readyToLoad) {
      fetch(SOLAR_API_URL(coordinates))
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          const sunData = data.results[0].annotations.sun;
          setSolarSchedule({
            sunset: unixToMoment(sunData.set.apparent),
            sunrise: unixToMoment(sunData.rise.apparent),
          });
          setLocation(data.results[0].formatted);
        });
    }
  }, [coordinates]);

  return (
    <div className="App">
      <>
        <Header theme={pickHeaderTheme(solarSchedule)} location={location} />
        <main>
          <TileContainer>
            <TimeEventTile event="Sunrise" time={solarSchedule.sunrise} theme={TileTheme.daytime} Icon={FiSunrise} />
            <TimeEventTile event="Sunset" time={solarSchedule.sunset} theme={TileTheme.sunset} Icon={FiSunset} />
            <TimeEventTile event="Midnight" time={timeNow().endOf('day')} theme={TileTheme.night} Icon={FiMoon} />
          </TileContainer>
          <p style={{ color: 'red' }}> Weather data retreval not yet implemented, only UI demonstration..</p>
          <TileContainer>
            <WeatherTile day="Today" temp="23°C" theme={TileTheme.sunshine} Icon={FiSun} />
            <WeatherTile day={formatDay(1)} temp="18°C" theme={TileTheme.cloudy} Icon={FiCloud} />
            <WeatherTile day={formatDay(2)} temp="6°C" theme={TileTheme.rain} Icon={FiCloudRain} />
            <WeatherTile day={formatDay(3)} temp="-3°C" theme={TileTheme.cloudy} Icon={FiCloudSnow} />
          </TileContainer>
        </main>
      </>
    </div>
  );
};

export default App;
