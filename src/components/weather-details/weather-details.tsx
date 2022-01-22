import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './weather-details.css';
import {WeatherToday} from "../weather-today/weather-today";
import {WeatherFiveDays} from "../weather-five-days/weather-five-days";
import EveryComponentsProps from "../../models/every-components-props";

export const WeatherDetails= ({city, apiKey}: EveryComponentsProps) => {

  return (
    <>
      <div className="container details-container">
        <BrowserRouter>
          <Switch>
            <Route exact path={`/weather-today/${city}`}>
              <WeatherToday
                apiKey={apiKey}
                city={city}
              />
            </Route>
            <Route exact path={`/weather-five-days/${city}`}>
              <WeatherFiveDays
                apiKey={apiKey}
                city={city}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}