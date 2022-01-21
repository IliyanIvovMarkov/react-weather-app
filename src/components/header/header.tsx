import './header.css'
import React from 'react';
import {HeaderNavigationalButtons} from '../header-navigational-buttons/header-navigational-buttons';
import { Search } from '../search/search';
import PropsModel from "../../models/props.model";

export const Header = ({city, onSearch}: PropsModel) =>
  <header className='header-container'>
    <HeaderNavigationalButtons
      city={city}
    />
    <Search
      city={city}
      onSearch={onSearch}
    />
  </header>
