/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { HeaderComponent, HeaderSummary, TileTheme } from './styles.css';
import { dateNow, timeNow } from '../utils/time-utils';


const determineHeaderTheme = (solarState) => {
  if (solarState && solarState.sunrise) {
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

const Header = ({ solarSchedule, location }) => (
  <HeaderComponent theme={determineHeaderTheme(solarSchedule)}>
    <div>
      <h1>Daydash</h1>
      <p>{timeNow(true)}</p>
    </div>
    <HeaderSummary>
      <p>{dateNow(true)}</p>
      <p>{location}</p>
    </HeaderSummary>
  </HeaderComponent>
);

Header.propTypes = {
  solarSchedule: PropTypes.object.isRequired,
  location: PropTypes.string,
};

Header.defaultProps = {
  location: '',
};

export default Header;
