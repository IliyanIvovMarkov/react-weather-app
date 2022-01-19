import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { WeatherToday } from "../weather-today/weather-today";
import { WeatherFiveDays } from "../weather-five-days/weather-five-days";

export const WeatherDetails = (props: any) => {
    const apiKey = 'e316f8024bffa51bf25f2009765e67b5';
    const city = 'London'

    return (
        <>
            <div className="container">
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/weather-today'>
                            <WeatherToday
                              apiKey={apiKey}
                              city={city}
                            />
                        </Route>
                        <Route exact path='/weather-five-days'>
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