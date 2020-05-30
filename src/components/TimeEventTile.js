/* eslint-disable react/forbid-prop-types */
import React from 'react';
import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import { Tile } from './styles.css';
import { formatTimeEvent, timeNow } from '../utils/time-utils';


const TimeEventTile = ({
  event, time, theme, Icon,
}) => (
  <Tile theme={theme}>
    <p>{formatTimeEvent(event, time, { justRelative: true })}</p>
    <Icon className="tile-icon" />
  </Tile>
);

TimeEventTile.propTypes = {
  event: PropTypes.string.isRequired,
  time: MomentPropTypes.momentObj,
  theme: PropTypes.any.isRequired,
  Icon: PropTypes.elementType.isRequired,
};

TimeEventTile.defaultProps = {
  time: timeNow(),
};

export default TimeEventTile;
