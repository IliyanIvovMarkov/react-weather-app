import './search.css';
import React, {useState} from 'react';
import EveryComponentsProps from "../../models/every-components-props";

export const Search = ({onSearch}: EveryComponentsProps) => {
  const [input, setInput] = useState('')

  return (
    <>
      <input
        type="text"
        id="cityName"
        name="cityName"
        className='search-input'
        onChange={event => {
          setInput(event.target.value)
        }}
        onKeyPress={(event) => {
          if(event.key === "Enter" && onSearch) {
            onSearch(input);
          }
        }}
      />
    </>
  )
}