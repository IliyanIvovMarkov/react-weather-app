import React from 'react';

import './day-forecast.css';

export const DayForecast = (props: any) => {

  return (
    <>
      <div className={'day-forecast-container'}>
        <p className={'day-forecast-weather-icon'}>{props.weather}</p>
        <p className={'day-forecast-title'}>{props.date}</p>
        <p className={'day-forecast-temp'}>{props.temperature}°C</p>
      </div>
    </>
  )
}
