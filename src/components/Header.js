import React from 'react';
import styled from 'styled-components';
import { dateNow, timeNow } from '../utils/time-utils';

const DateTimeWrapper = styled.div`
display: inline-flex;
justify-content: space-around;
width: 100%;
`;

const Header = () => (
  <header>
    <h1>Daydash</h1>
    <DateTimeWrapper>
      <p>{dateNow(true)}</p>
      <p>{timeNow(true)}</p>
    </DateTimeWrapper>
  </header>
);

export default Header;
