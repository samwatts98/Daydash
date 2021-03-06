import styled from 'styled-components';

export const HeaderSummary = styled.div`
display: inline-flex;
justify-content: space-around;
width: 100%;
font-size: 0.8rem;
`;

export const HeaderComponent = styled.header`
background : ${(props) => props.theme.background};
margin-bottom: 2rem;
padding-top: 1rem;
`;


export const TileContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;

  width: 80%;
  margin: 1rem auto;
  padding: 1rem;
  border-radius: 10px;

  background: #eee;

  -webkit-box-shadow: 0px 0px 20px 10px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 20px 10px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 20px 10px rgba(204, 204, 204, 1);
`;

export const Tile = styled.div`
  border-radius: 10px;
  padding: 0 1rem;
  margin: 1rem;
  overflow: hidden;

  display: flex;
  flex-flow: column;
  flex-grow: 1;

  -webkit-box-shadow: 0px 0px 20px 10px rgba(170, 170, 170, 1);
  -moz-box-shadow: 0px 0px 20px 10px rgba(170, 170, 170, 1);
  box-shadow: 0px 0px 20px 10px rgba(170, 170, 170, 1);

  background : ${(props) => props.theme.background};

  .tile-icon {
    font-size: 2rem;
    margin: auto;
    padding-bottom: 1rem;
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
  sunshine: {
    background: 'linear-gradient(0deg, rgba(210,162,0,1) 0%, rgba(245,255,0,1) 100%)',
  },
  cloudy: {
    background: 'linear-gradient(0deg, rgba(218,218,218,1) 0%, rgba(117,117,117,1) 100%)',
  },
  rain: {
    background: 'linear-gradient(0deg, rgba(12,91,172,1) 0%, rgba(2,0,40,1) 100%)',
  },
  snow: {
    background: 'linear-gradient(0deg, rgba(219,219,219,1) 0%, rgba(255,255,255,1) 100%)',
  },
};
