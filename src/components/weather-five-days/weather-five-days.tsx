import React, {useEffect, useState} from 'react';
import {DayForecast} from "../day-forecast/day-forecast";


export const WeatherFiveDays = (props: any) => {
  let today = new Date();
  const getTemp = (temp: number) => {
    return temp
  };
  const fiveDayData = {
    day: {
      one: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
      two: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate() + 1),
      three: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate() + 2),
      four: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate() + 3),
      five: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+(today.getDate() + 4)
    },
    temp: {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5
    },
    rain: {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5
    }
  }

//Fetches the the average temperature of each of the next five days
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${props.apiKey}`)
      .then(response => response.json())
      .then(data => data.list.map((everyThreeHourData: any) => Number(everyThreeHourData.main.temp.toFixed())))
      .then(listOfTemp => {
        let dayOneTemp = Number(
          (listOfTemp.slice(0, 8).reduce((prevValue: number, curValue: number) => prevValue + curValue) / 5).toFixed()
        )
        let dayTwoTemp = Number(
          (listOfTemp.slice(8, 16).reduce((prevValue: number, curValue: number) => prevValue + curValue) / 5).toFixed()
        )
        let dayThreeTemp = Number(
          (listOfTemp.slice(16, 24).reduce((prevValue: number, curValue: number) => prevValue + curValue) / 5).toFixed()
        )
        let dayFourTemp = Number(
          (listOfTemp.slice(24, 32).reduce((prevValue: number, curValue: number) => prevValue + curValue) / 5).toFixed()
        )
        let dayFiveTemp = Number(
          (listOfTemp.slice(32).reduce((prevValue: number, curValue: number) => prevValue + curValue) / 5).toFixed()
        )
        console.log(dayOneTemp, dayTwoTemp, dayThreeTemp, dayFourTemp, dayFiveTemp)
      })
  }, []);
//Fetches the the weather parameters AKA if it will rain or snow etc.
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&units=metric&appid=${props.apiKey}`)
      .then(response => response.json())
      //for the next 3 hours for now
      .then(data => console.log(data.list[0].weather[0].main))
  }, []);



  return (
    <>
      <DayForecast
        temperature={fiveDayData.temp.one}
        date={fiveDayData.day.one}
        apiKey={props.apiKey}
      />
      <DayForecast
        temperature={fiveDayData.temp.two}
        date={fiveDayData.day.two}
        apiKey={props.apiKey}
      />
      <DayForecast
        temperature={fiveDayData.temp.three}
        date={fiveDayData.day.three}
        apiKey={props.apiKey}
      />
      <DayForecast
        temperature={fiveDayData.temp.four}
        date={fiveDayData.day.four}
        apiKey={props.apiKey}
      />
      <DayForecast
        temperature={fiveDayData.temp.five}
        date={fiveDayData.day.five}
        apiKey={props.apiKey}
      />
    </>
  )
}

