/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { HeaderComponent, HeaderSummary } from './styles.css';
import { dateNow, timeNow } from '../utils/time-utils';

const Header = ({ theme, location }) => (
  <HeaderComponent theme={theme}>
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
  theme: PropTypes.any.isRequired,
  location: PropTypes.string.isRequired,
};

export default Header;
