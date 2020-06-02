/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FiCloud, FiCloudDrizzle, FiCloudLightning, FiCloudRain, FiSun, FiCloudSnow,
} from 'react-icons/fi';
import MomentPropTypes from 'react-moment-proptypes';
import { Tile, TileTheme } from './styles.css';
import { formatDay } from '../utils/time-utils';


const determineIconAndTheme = (weatherState) => {
  if (['Snow', 'Sleet', 'Hail'].includes(weatherState)) {
    return [FiCloudSnow, TileTheme.cloudy];
  }
  if (['Light Cloud', 'Heavy Cloud'].includes(weatherState)) {
    return [FiCloud, TileTheme.cloudy];
  }
  if (['Showers', 'Light Rain'].includes(weatherState)) {
    return [FiCloudDrizzle, TileTheme.rain];
  }
  if (weatherState === 'Heavy Rain') {
    return [FiCloudRain, TileTheme.rain];
  }
  if (weatherState === 'Thunderstorm') {
    return [FiCloudLightning, TileTheme.rain];
  }
  return [FiSun, TileTheme.sunshine];
};

const WeatherTile = ({ date, temp, weatherState }) => {
  const [Icon, theme] = determineIconAndTheme(weatherState);
  return (
    <Tile theme={theme}>
      <p>{`${formatDay(date, 0)} ${temp}°C`}</p>
      <Icon className="tile-icon" />
    </Tile>
  );
};


WeatherTile.propTypes = {
  date: MomentPropTypes.momentObj.isRequired,
  temp: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired,
};

export default WeatherTile;
