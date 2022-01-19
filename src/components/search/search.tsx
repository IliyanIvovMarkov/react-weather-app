import './search.css';
import React from 'react';

export const Search = (props: any) => {


   const getValue = (event: any) => {
      if(event.charCode === 13) {
        props.onSearch(event.target.value);
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