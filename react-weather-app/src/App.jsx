import './App.css';
import React from 'react';
import { InfoSide, WeatherSide } from './components';
import { WeatherProvider } from './contexts/WeatherContext';

function App() {
  return (
    <WeatherProvider>
      <div className="weapper">
        <div className="container">
          <WeatherSide/>
          <InfoSide/>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
