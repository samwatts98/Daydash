import styled from 'styled-components';

export const TileContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;

  width: 80%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 10px;

  background: #eee;

  -webkit-box-shadow: 0px 0px 20px 10px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 20px 10px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 20px 10px rgba(204, 204, 204, 1);
`;

export const TimeOfDayTile = styled.div`
  border-radius: 10px;
  padding: 0 1rem;
  overflow: hidden;

  display: flex;
  flex-flow: column;

  -webkit-box-shadow: 0px 0px 20px 10px rgba(170, 170, 170, 1);
  -moz-box-shadow: 0px 0px 20px 10px rgba(170, 170, 170, 1);
  box-shadow: 0px 0px 20px 10px rgba(170, 170, 170, 1);

  color: white;
  background : ${(props) => props.theme.background};

  :not(:last-child) {
    margin-bottom: 1rem;
  }

`;

export const TileTheme = {
  daytime: {
    background: 'linear-gradient(0deg,rgba(34, 193, 195, 1) 0%,rgba(65, 45, 253, 1) 100%)',
  },
  sunset: {
    background: 'linear-gradient(0deg,rgba(253, 230, 45, 1) 0%,rgba(195, 34, 83, 1) 100%)',
  },
  night: {
    background: 'linear-gradient(0deg,rgba(55, 0, 106, 1) 0%,rgba(0, 3, 37, 1) 100%)',
  },
};
