import React from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import { Header } from './components/header/header';
import { WeatherDetails } from "./components/weather-details/weather-details";

const apiKey = 'e316f8024bffa51bf25f2009765e67b5';
const city = 'London';
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;


const getWeatherDataByCityName = () => {
    return fetch(url).then(response => response.json())
}

fetch(url).then(response => response.json()).then(response => console.log(response.city) )

function App() {

  return (
    <div className="App container">
      <Header/>
      <WeatherDetails/>
    </div>
  );
}

export default App;
