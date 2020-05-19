import React from 'react';
import { TileContainer } from './components/styles.css';
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
          </TileContainer>
        </main>
      </>
    </div>
  );
}

export default App;
