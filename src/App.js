import React, { useState, useEffect } from 'react';
import { FiSunset, FiSunrise, FiMoon } from 'react-icons/fi';
import moment from 'moment';
import { TileContainer, TileTheme } from './components/styles.css';
import { timeNow, convertMetaWeather } from './utils/time-utils';
import TimeEventTile from './components/TimeEventTile';
import WeatherTile from './components/WeatherTile';
import Header from './components/Header';

import('dotenv').then((dotenv) => dotenv.config());

const LOCATION_URL = 'http://localhost:3001/location/';
const WEATHER_URL = 'http://localhost:3001/weather/';

const App = () => {
  const [coordinates, setCoordinates] = useState({});
  const [solarSchedule, setSolarSchedule] = useState({});
  const [weatherForecasts, setWeatherForecasts] = useState([]);
  const [location, setLocation] = useState({});

  useEffect(() => {
    import('./utils/location-utils')
      .then((module) => module.default((position) => {
        setCoordinates({
          lattlong: `${position.coords.latitude},${position.coords.longitude}`,
          readyToLoad: true,
        });
      }, () => setCoordinates({ readyToLoad: true })));
  }, []);


  useEffect(() => {
    if (coordinates.readyToLoad) {
      fetch(`${LOCATION_URL}${coordinates.lattlong ? `?lattlong=${coordinates.lattlong}` : ''}`)
        .then((response) => response.json())
        .then((data) => {
          const result = data[0];
          setLocation({
            city: result.title,
            woeID: result.woeid,
            readyToLoad: true,
          });
        });
    }
  }, [coordinates]);

  useEffect(() => {
    if (location.readyToLoad) {
      fetch(`${WEATHER_URL}${location.woeID ? `?woeid=${location.woeID}` : ''}`)
        .then((response) => response.json())
        .then((data) => {
          setSolarSchedule({
            sunrise: convertMetaWeather(data.sun_rise),
            sunset: convertMetaWeather(data.sun_set),
          });
          setWeatherForecasts(data.consolidated_weather.map((forecast) => ({
            id: forecast.id,
            date: moment(forecast.applicable_date),
            temp: parseInt(forecast.the_temp, 10),
            state: forecast.weather_state_name,
          })));
        });
    }
  }, [location]);
  return (
    <div className="App">
      <>
        <Header solarSchedule={solarSchedule} location={location.city} />
        <main>
          <TileContainer>
            <TimeEventTile event="Sunrise" time={solarSchedule.sunrise} theme={TileTheme.daytime} Icon={FiSunrise} />
            <TimeEventTile event="Sunset" time={solarSchedule.sunset} theme={TileTheme.sunset} Icon={FiSunset} />
            <TimeEventTile event="Midnight" time={timeNow().endOf('day')} theme={TileTheme.night} Icon={FiMoon} />
          </TileContainer>
          <TileContainer>
            {weatherForecasts.map((itm) => (
              <WeatherTile key={itm.id} date={itm.date} temp={itm.temp} weatherState={itm.state} />
            ))}
          </TileContainer>
        </main>
      </>
    </div>
  );
};

export default App;
