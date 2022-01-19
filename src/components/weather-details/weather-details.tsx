import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { WeatherToday } from "../weather-today/weather-today";
import { WeatherFiveDays } from "../weather-five-days/weather-five-days";

export const WeatherDetails = () => {
    return (
        <>
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/weather-today'>
                            <WeatherToday/>
                        </Route>
                        <Route exact path='/weather-five-days'>
                            <WeatherFiveDays/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    )
}