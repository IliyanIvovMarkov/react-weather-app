import React, {useState} from 'react';

import './App.css';
import {Header} from './components/header/header';
import {WeatherDetails} from "./components/weather-details/weather-details";

function App() {
  const apiKey = 'e316f8024bffa51bf25f2009765e67b5';
  let [city, setCity] = useState('London');

  const onSearch = (searchValue: string) => {
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
        apiKey={apiKey}
      />
    </div>
  );
}
export default App;
