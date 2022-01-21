import './search.css';
import React from 'react';
import PropsModel from "../../models/props.model";

export const Search = ({onSearch}: PropsModel) => {

  const getValue = (event: any) => {
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