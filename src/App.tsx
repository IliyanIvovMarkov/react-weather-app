import React, {useState, useCallback} from 'react';

import './App.css';
import {Header} from './components/header/header';
import {WeatherDetails} from "./components/weather-details/weather-details";


function App() {
  const [city, setCity] = useState<string>('');

  const onSearch = (searchValue: string)  => {
    window.history.replaceState(null, searchValue, '/weather-today/'+ searchValue)
    setCity(searchValue);
  };

  return (
    <div className="App container">
      <Header
        onSearch={onSearch}
        city={city}
      />
      <WeatherDetails
        city={city}
      />
    </div>
  );
}
export default App;
