import './header.css'
import React from 'react';
import {HeaderNavigationalButtons} from '../header-navigational-buttons/header-navigational-buttons';
import { Search } from '../search/search';
import EveryComponentsProps from "../../models/every-components-props";

export const Header = ({city, onSearch}: EveryComponentsProps) =>
  <header className='header-container'>

    <HeaderNavigationalButtons
      city={city}
    />
    <Search
      city={city}
      onSearch={onSearch}
    />
  </header>
