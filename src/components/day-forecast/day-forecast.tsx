import React, {useEffect, useState} from 'react';

export const DayForecast = (props: any) => {

/*  const [fiveDayData, setFiveDayData]: any = useState({
    list: [
      {
        main: {
          temp: 0
        }
      }
    ]
  });*/



  return (
    <>
      <div className={'day-forecast-container'}>
        <p className={'day-forecast-title'}>{props.date}</p>
        <p className={'day-forecast-temp'}>Temp is {props.temperature}°C</p>
        <p className={'day-forecast-rain-chance'}>Rain chance %</p>
      </div>
    </>
  )
}
