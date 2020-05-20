/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { HeaderComponent, DateTimeWrapper } from './styles.css';
import { dateNow, timeNow } from '../utils/time-utils';

const Header = ({ theme }) => (
  <HeaderComponent theme={theme}>
    <div>
      <h1>Daydash</h1>
    </div>
    <DateTimeWrapper>
      <p>{dateNow(true)}</p>
      <p>{timeNow(true)}</p>
    </DateTimeWrapper>
  </HeaderComponent>
);

Header.propTypes = {
  theme: PropTypes.any.isRequired,
};

export default Header;
