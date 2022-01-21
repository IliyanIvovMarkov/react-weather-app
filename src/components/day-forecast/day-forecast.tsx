import React from 'react';

import './day-forecast.css';
import DayForecastModel from "../../models/day-forecast.model";

export const DayForecast = ({date, temperature, icon}: DayForecastModel) => {

  return (
    <>
      <div className={'day-forecast-container'}>
        <img className={'icon-forecast'} src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/>
        <p className={'day-forecast'}>{date}</p>
        <p className={'day-forecast'}>{temperature}°C</p>
      </div>
    </>
  )
}
