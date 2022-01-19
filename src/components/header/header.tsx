import './header.css'
import React from 'react';
import {HeaderNavigationalButtons} from '../header-navigational-buttons/header-navigational-buttons';
import { Search } from '../search/search';

export const Header = (props: any) =>
  <header className='header-container'>
    <HeaderNavigationalButtons
      city={props.city}
    />
    <Search
      onSearch={props.onSearch}
    />
  </header>
