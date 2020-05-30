/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Tile } from './styles.css';

const WeatherTile = ({
  day, temp, theme, Icon,
}) => (
  <Tile theme={theme}>
    <p>{`${day} ${temp}`}</p>
    <Icon className="tile-icon" />
  </Tile>
);

WeatherTile.propTypes = {
  day: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  theme: PropTypes.any.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

export default WeatherTile;
