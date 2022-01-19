import React, {useState} from 'react';

import './App.css';
import { Header } from './components/header/header';
import { WeatherDetails } from "./components/weather-details/weather-details";




function App() {
  let [city, setCity] = useState('');

  const onSearch = (searchValue: string) => {
    setCity(searchValue)
  }
  const displayCity = (theCity: string) => {
    theCity = city
    return theCity
  }
  return (
      <div className="App container">
        <Header
          onSearch={onSearch}
          city={city}
        />
        <WeatherDetails
          city={city}
          displayCity={displayCity}
        />
      </div>
  );
}

export default App;
