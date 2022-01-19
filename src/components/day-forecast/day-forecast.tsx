import React from 'react';

export const DayForecast = (props: any) => {

    return (
        <>
            <div className={'day-forecast-container'}>
                <p className={'day-forecast-title'}>{props.city}</p>
                <p className={'day-forecast-temp'}>Temp</p>
                <p className={'day-forecast-rain-chance'}>Rain chance</p>
            </div>
        </>
    )
}
