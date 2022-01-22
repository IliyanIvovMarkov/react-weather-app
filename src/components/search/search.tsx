import './search.css';
import React from 'react';
import EveryComponentsProps from "../../models/every-components-props";

/*
interface SearchGetValueResponse {
  event: {
    charCode: number;
    target: {
      value: string;
    };
  }
}
*/

export const Search = ({onSearch}: EveryComponentsProps) => {

  const getValue = (event: any ) => {
    if (event.charCode === 13 && onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <>
      <input
        type="text"
        id="cityName"
        name="cityName"
        className='search-input'
        onKeyPress={getValue}
      />
    </>
  )
}