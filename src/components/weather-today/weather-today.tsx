import React, {useState, useEffect} from 'react';
import './weather-today.css'

export const WeatherToday = (props: { city: string; apiKey: string; }) => {
  const [isLoading, setIsLoading]: boolean | any = useState(true)
  const [dayData, setDayData]: null | any = useState(null)

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=${props.apiKey}`)
      .then(response => response.json())
      .then((data) => {
        setDayData(data)
        setIsLoading(false)
      });
  }, []);

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