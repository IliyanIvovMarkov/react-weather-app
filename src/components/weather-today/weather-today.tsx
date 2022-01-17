import React, { useState, useEffect } from 'react';
import './weather-today.css'

export const WeatherToday = (props: any) => {
    /*async function getData() {
      let urlToday = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${props.apiKey}`;
      let temp: any = await fetch(urlToday).then(response => response.json()).then(data => console.log(data)).catch((error) => {
        console.error('Error:', error);
        return temp.main.temp;
      });*/
  const [dayData, setDayData ] = useState({
    weather: [
      {
        main: ''
      }
    ],
    main: {
      temp: 0,
      feels_like: 0,
      humidity: 0
    },
    name: ''
  })

  useEffect( ()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${props.apiKey}`)
      .then(response => response.json())
      .then(setDayData);
  }, []);

    return (
      <>
        <div className={'weather-today-container'}>
          <div className={'weather-today-numbers-container'}>
            <p className={'weather-today-cur-temp'}>{dayData.name}: {dayData.main.temp.toFixed()}°C</p>
            <p className={'weather-today-other'}>Feels like: {dayData.main.feels_like.toFixed()}°C</p>
            <p className={'weather-today-other'}>Humidity: {dayData.main.humidity.toFixed()}%</p>
          </div>
          <div className={'weather-today-descr-container'}>
            <p className={'weather-today-descr'}>{dayData.weather[0].main} /*Some SVG*/</p>
          </div>
        </div>
      </>
    )
}