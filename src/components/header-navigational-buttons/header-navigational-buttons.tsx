import './header-navigational-buttons.css'
import React from 'react';

let myClass = 'not-active-nav-btns';
//let inputValue: string = (document.getElementById("cityName") as HTMLInputElement).value;

export const HeaderNavigationalButtons = () => {

    /*if (inputValue !== "") {
        myClass = 'active-nav-btns'
    } else {
        myClass = 'not-active-nav-btns'
    }*/

    return (
        <>
            <a className={'active-nav-btns'} href='/weather-today'>
                One Day
            </a>
            <a className={'active-nav-btns'} href='/weather-five-days'>
                Five Days
            </a>
        </>
    )
}