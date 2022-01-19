import React, {useState} from 'react';

import './App.css';
import { Header } from './components/header/header';
import { WeatherDetails } from "./components/weather-details/weather-details";




function App() {
  let [city, setCity] = useState('');

  const onSearch = (searchValue: string) => {
    setCity(searchValue)
  }

  return (
      <div className="App container">
        <Header
          city={city}
          onSearch={onSearch}
        />
        <WeatherDetails
          city={city}
        />
      </div>
  );
}

export default App;
