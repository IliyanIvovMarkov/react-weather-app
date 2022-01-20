import React, {useEffect, useState} from 'react';

import './weather-five-days.css';
import {DayForecast} from "../day-forecast/day-forecast";

let today = new Date();

const getTemp = (tempList: any) => {
  return (tempList.reduce((prevValue: number, curValue: number) => prevValue + curValue) / 5).toFixed();
}

const mapApiData = (apiData: any) => {
  let listOfTemp = apiData.list.map((everyThreeHourData: any) => Number(everyThreeHourData.main.temp.toFixed()));

  return {
    day: {
      one: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
      two: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate() + 1),
      three: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate() + 2),
      four: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate() + 3),
      five: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate() + 4)
    },
    temp: {
      one: getTemp(listOfTemp.slice(0, 8)),
      two: getTemp(listOfTemp.slice(8, 16)),
      three: getTemp(listOfTemp.slice(16, 24)),
      four: getTemp(listOfTemp.slice(24, 32)),
      five: getTemp(listOfTemp.slice(32))
    },
    weather: {
      one: apiData.list[2].weather[0].main,
      two: apiData.list[10].weather[0].main,
      three: apiData.list[18].weather[0].main,
      four: apiData.list[26].weather[0].main,
      five: apiData.list[34].weather[0].main
    }
  };
};

export const WeatherFiveDays = (props: any) => {
  const  [fiveDayData, setFiveDayData]: any   = useState(null)
  const  [isLoading, setIsLoading]: any   = useState(true)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${props.apiKey}`)
      .then(response => response.json())
      .then(mapApiData)
      .then(data => {
        setFiveDayData(data)
        setIsLoading(false)
      })
  }, []);


  return (
    <>
      <div className={'weather-five-days-container'}>
        {isLoading && <div className={'weather-five-days-is-pending'}>Loading...</div>}
        {fiveDayData && <DayForecast
            temperature={fiveDayData.temp.one}
            date={fiveDayData.day.one}
            weather={fiveDayData.weather.one}
        />}
        {fiveDayData &&
          <DayForecast
          temperature={fiveDayData.temp.two}
          date={fiveDayData.day.two}
          weather={fiveDayData.weather.two}
        />}
        {fiveDayData &&
          <DayForecast
          temperature={fiveDayData.temp.three}
          date={fiveDayData.day.three}
          weather={fiveDayData.weather.three}
        />}
        {fiveDayData &&
          <DayForecast
          temperature={fiveDayData.temp.four}
          date={fiveDayData.day.four}
          weather={fiveDayData.weather.four}
        />}
        {fiveDayData &&
          <DayForecast
          temperature={fiveDayData.temp.five}
          date={fiveDayData.day.five}
          weather={fiveDayData.weather.five}
        />}
      </div>
    </>
  )
}

