import React from 'react';
import { TileContainer } from './components/styles.css';
import SunriseTile from './components/SunriseTile';


function App() {
  return (
    <div className="App">
      <>
        <h1>Daydash</h1>
        <TileContainer>
          <SunriseTile />
        </TileContainer>
      </>
    </div>
  );
}

export default App;
