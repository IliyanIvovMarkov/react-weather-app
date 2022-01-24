import React, {useState, useEffect} from 'react';
import './weather-today.css'
import EveryComponentsProps from "../../models/every-components-props";
import TodayDataResponse from "../../models/today-data-response";

const apiKey = 'e316f8024bffa51bf25f2009765e67b5';

const getTodayAPI = (city: string) =>
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);

export const WeatherToday: React.FC<EveryComponentsProps> = ({city}) => {
  const [isLoading, setIsLoading] = useState(true)
  const [dayData, setDayData] = useState(null as TodayDataResponse | null)

  useEffect(() => {
      getTodayAPI(city)
        .then(response => response.json())
        .then((data) => {
          setDayData(data)
          setIsLoading(false)
        });
  }, [city]);

  return (
    <>
      {isLoading && <div className={'weather-is-loading'}>Loading...</div>}
      {dayData &&
          <div className={'weather-today-container'}>
              <div className={'weather-today-numbers-container'}>
                  <p className={'weather-today-cur-temp'}>{dayData.name}: {dayData.main.temp.toFixed()}°C</p>
                  <p className={'weather-today-other'}>Feels like: {dayData.main.feels_like.toFixed()}°C</p>
                  <p className={'weather-today-other'}>Humidity: {dayData.main.humidity.toFixed()}%</p>
              </div>
              <div className={'weather-today-icon-container'}>
                  <img className={'weather-today-icon'} src={`http://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`}/>
              </div>
          </div>
      }
    </>
  )
}