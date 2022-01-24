import './header-navigational-buttons.css'
import React from 'react';
import EveryComponentsProps from "../../models/every-components-props";
import {Link, Outlet} from "react-router-dom";

const changeClassName = (cityName: string): string => {

  if(cityName === "") {
    return 'not-active-nav-btns'
  } else {
    return 'active-nav-btns'
  }
};

export const HeaderNavigationalButtons: React.FC<EveryComponentsProps> = ({city}) => {
  return (
    <>
    <nav>
      <Link className={changeClassName(city)} to={`/weather-today/${city}`}>
        One Day
      </Link>
      <Link className={changeClassName(city)} to={`/weather-five-days/${city}`}>
        Five Days
      </Link>
    </nav>
      <Outlet/>
    </>
  )
}