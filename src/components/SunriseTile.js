import React, { useState, useEffect } from 'react';
import { TimeOfDayTile, TileTheme } from './styles.css';
import {
  convertToMoment, formatTimeEvent, timeNow,
} from '../utils/time-utils';
import fetchCoords from '../utils/location-utils';


const SunriseTile = () => {
  const [location, setLocation] = useState({
    set: false,
  });

  const [sunriseData, setSunriseData] = useState({});

  // TODO
  // Change background based on before or after sunset/sunrise
  // Show time and date in top left or right
  // Do temperature and weather
  const pickCardStyle = () => {
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

  const refresh = () => {
    fetchCoords((pos) => {
      setLocation({
        lat: pos.coords.longitude,
        long: pos.coords.latitude,
        set: true,
      });

      fetch(`https://api.sunrise-sunset.org/json?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}`)
        .then((response) => response.json())
        .then((data) => setSunriseData({
          sunset: convertToMoment(data.results.sunset),
          sunrise: convertToMoment(data.results.sunrise),
          midday: convertToMoment(data.results.midday),
        }))
        .catch((err) => console.error(err));

      fetch(`https://api.sunrise-sunset.org/json?lat=${pos.coords.latitude}&lng=${pos.coords.longitude}&date=tomorrow`)
        .then((response) => response.json())
        .then((data) => setSunriseData((prevState) => ({
          ...prevState,
          sunset_tomorrow: convertToMoment(data.results.sunset),
          sunrise_tomorrow: convertToMoment(data.results.sunrise),
          midday_tomorrow: convertToMoment(data.results.midday),
        })))
        .catch((err) => console.error(err));
      console.log('refreshed!');
      window.onload = null;
    });
  };

  useEffect(() => refresh(), []);

  return (
    <TimeOfDayTile theme={pickCardStyle()}>
      <p>{location.set ? `Your location is ${location.lat.toFixed(4)}, ${location.long.toFixed(4)}.` : ''}</p>
      <p>
        Time now is
        {' '}
        {timeNow(true)}
      </p>
      <p>{formatTimeEvent('Sunset', sunriseData.sunset, sunriseData.sunset_tomorrow)}</p>
      <p>{formatTimeEvent('Sunrise', sunriseData.sunrise, sunriseData.sunrise_tomorrow)}</p>
    </TimeOfDayTile>
  );
};

export default SunriseTile;
