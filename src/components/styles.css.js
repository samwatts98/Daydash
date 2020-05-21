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
  margin: 0 auto;
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
