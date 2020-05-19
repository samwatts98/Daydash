import styled from 'styled-components';

export const TileContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 80vw;
  height: 60vh;
  min-height: fit-content;


  background: #eee;
  border-radius: 10px;

  -webkit-box-shadow: 0px 0px 20px 10px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 20px 10px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 20px 10px rgba(204, 204, 204, 1);
`;

export const TimeOfDayTile = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  color: white;
  display: flex;
  flex-flow: column;
  padding: 0 1rem;
  overflow: hidden;

  -webkit-box-shadow: 0px 0px 20px 10px rgba(170, 170, 170, 1);
  -moz-box-shadow: 0px 0px 20px 10px rgba(170, 170, 170, 1);
  box-shadow: 0px 0px 20px 10px rgba(170, 170, 170, 1);

  background : ${(props) => props.theme.background}

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
