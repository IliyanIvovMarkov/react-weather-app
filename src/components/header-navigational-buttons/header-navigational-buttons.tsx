import './header-navigational-buttons.css'
import React from 'react';


export const HeaderNavigationalButtons = (props: any) => {

  const changeClassName = (): string => {

    if(props.city === "") {
      return 'not-active-nav-btns'
    } else {
      return 'active-nav-btns'
    }
  };

  return (
    <>
      <a className={changeClassName()} href='/weather-today'>
        One Day
      </a>
      <a className={changeClassName()} href='/weather-five-days'>
        Five Days
      </a>
    </>
  )
}