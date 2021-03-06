import React, {useEffect, useState} from 'react';

import './weather-five-days.css';
import {DayForecast} from "../day-forecast/day-forecast";

const today = new Date();
const getExactDate = (num: number) => (today.getDate() + num)+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

const getTemp = (tempList: any) => {
  return (tempList.reduce((prevValue: number, curValue: number) => prevValue + curValue) / 5).toFixed();
};

const mapApiData = (apiData: any) => {
  let listOfTemp = apiData.list.map((everyThreeHourData: any) => Number(everyThreeHourData.main.temp.toFixed()));

  return {
    day: {
      one: getExactDate(0),
      two: getExactDate(1),
      three: getExactDate(2),
      four: getExactDate(3),
      five: getExactDate(4)
    },
    temp: {
      one: getTemp(listOfTemp.slice(0, 8)),
      two: getTemp(listOfTemp.slice(8, 16)),
      three: getTemp(listOfTemp.slice(16, 24)),
      four: getTemp(listOfTemp.slice(24, 32)),
      five: getTemp(listOfTemp.slice(32))
    },
    weather: {
      one: apiData.list[2].weather[0].icon,
      two: apiData.list[10].weather[0].icon,
      three: apiData.list[18].weather[0].icon,
      four: apiData.list[26].weather[0].icon,
      five: apiData.list[34].weather[0].icon
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
      {isLoading && <div className={'weather-five-days-is-loading'}>Loading...</div>}
      {fiveDayData &&
        <div className={'weather-five-days-container'}>
           <DayForecast
              temperature={fiveDayData.temp.one}
              date={fiveDayData.day.one}
              icon={fiveDayData.weather.one}
          />
            <DayForecast
            temperature={fiveDayData.temp.two}
            date={fiveDayData.day.two}
            icon={fiveDayData.weather.two}
          />
            <DayForecast
            temperature={fiveDayData.temp.three}
            date={fiveDayData.day.three}
            icon={fiveDayData.weather.three}
          />
            <DayForecast
            temperature={fiveDayData.temp.four}
            date={fiveDayData.day.four}
            icon={fiveDayData.weather.four}
          />
            <DayForecast
            temperature={fiveDayData.temp.five}
            date={fiveDayData.day.five}
            icon={fiveDayData.weather.five}
          />
        </div>
      }
    </>
  )
}

