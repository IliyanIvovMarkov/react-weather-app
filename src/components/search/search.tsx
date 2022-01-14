import './search.css';
import React from 'react';

export const Search = () => {
    return (
        <>
            <input
                type="text"
                id="cityName"
                name="cityName"
                className='search-input'
                onKeyPress={(elem) => {
                    if (elem.key === 'Enter') {
                        console.log("enter was pressed")
                    }
                }}
            />
        </>
    )
}