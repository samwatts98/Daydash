import React from 'react';
import { TileContainer, TimeOfDayTile, TileTheme } from './components/styles.css';
import SunriseTile from './components/SunriseTile';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <>
        <Header />
        <main>
          <TileContainer>
            <SunriseTile />
            {/* <TimeOfDayTile theme={TileTheme.daytime} />
            <TimeOfDayTile theme={TileTheme.sunset} />
            <TimeOfDayTile theme={TileTheme.night} />
            <TimeOfDayTile theme={TileTheme.daytime} />
            <TimeOfDayTile theme={TileTheme.sunset} />
            <TimeOfDayTile theme={TileTheme.night} /> */}
          </TileContainer>
        </main>
      </>
    </div>
  );
}

export default App;
