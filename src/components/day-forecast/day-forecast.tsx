import React from 'react';

import './day-forecast.css';

export const DayForecast = (props: any) => {

  return (
    <>
      <div className={'day-forecast-container'}>
        <img className={'icon-forecast'} src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}/>
        <p className={'day-forecast'}>{props.date}</p>
        <p className={'day-forecast'}>{props.temperature}°C</p>
      </div>
    </>
  )
}
