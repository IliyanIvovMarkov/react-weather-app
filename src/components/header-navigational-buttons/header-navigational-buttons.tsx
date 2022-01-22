import './header-navigational-buttons.css'
import React from 'react';
import EveryComponentsProps from "../../models/every-components-props";

const changeClassName = (cityName: string): string => {

  if(cityName === "") {
    return 'not-active-nav-btns'
  } else {
    return 'active-nav-btns'
  }
};

export const HeaderNavigationalButtons = ({city}: EveryComponentsProps) => {

  return (
    <>
      <a className={changeClassName(city)} href={`/weather-today/${city}`}>
        One Day
      </a>
      <a className={changeClassName(city)} href={`/weather-five-days/${city}`}>
        Five Days
      </a>
    </>
  )
}