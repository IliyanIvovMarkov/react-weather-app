import './header.css'
import React from 'react';
import { HeaderNavigationalButtons } from '../header-navigational-buttons/header-navigational-buttons';
import { Search } from '../search/search';

export const Header = () => {
    return (
        <>
            <header className='header-container'>
                <HeaderNavigationalButtons/>
                <Search/>
            </header>
        </>
    )
};