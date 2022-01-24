import React from 'react';
import { Route, Routes} from "react-router-dom";

import './weather-details.css';
import {WeatherToday} from "../weather-today/weather-today";
import {WeatherFiveDays} from "../weather-five-days/weather-five-days";
import EveryComponentsProps from "../../models/every-components-props";

export const WeatherDetails: React.FC<EveryComponentsProps> = ({city}) => {

  return (
    <>
      <div className="container details-container">
          <Routes>
            <Route path={`/weather-today/:city`} element={
              <WeatherToday
                city={city}
              />
            }/>
            <Route path={`/weather-five-days/:city`} element={
              <WeatherFiveDays
                city={city}
              />
            }/>
          </Routes>
      </div>
    </>
  )
}