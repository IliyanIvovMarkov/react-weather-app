import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import './weather-details.css';
import {WeatherToday} from "../weather-today/weather-today";
import {WeatherFiveDays} from "../weather-five-days/weather-five-days";

export const WeatherDetails= (props: { city: string; apiKey: string; }) => {

  return (
    <>
      <div className="container details-container">
        <BrowserRouter>
          <Switch>
            <Route exact path={`/weather-today/${props.city}`}>
              <WeatherToday
                apiKey={props.apiKey}
                city={props.city}
              />
            </Route>
            <Route exact path={`/weather-five-days/${props.city}`}>
              <WeatherFiveDays
                apiKey={props.apiKey}
                city={props.city}
              />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}