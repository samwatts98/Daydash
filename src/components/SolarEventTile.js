/* eslint-disable react/forbid-prop-types */
import React from 'react';
import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import { Tile } from './styles.css';
import { formatTimeEvent, timeNow } from '../utils/time-utils';


const SolarEventTile = ({ event, time, theme }) => (
  <Tile theme={theme}>
    <p>{formatTimeEvent(event, time, { justRelative: true })}</p>
  </Tile>
);

SolarEventTile.propTypes = {
  event: PropTypes.string.isRequired,
  time: MomentPropTypes.momentObj,
  theme: PropTypes.any.isRequired,
};

SolarEventTile.defaultProps = {
  time: timeNow(),
};

export default SolarEventTile;
