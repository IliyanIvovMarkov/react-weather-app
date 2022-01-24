import './search.css';
import React, {useState} from 'react';
import EveryComponentsProps from "../../models/every-components-props";

export const Search: React.FC<EveryComponentsProps> = ({onSearch, city}) => {

  const [input, setInput] = useState('')

  return (
    <input
      value={input}
      type="text"
      id="cityName"
      name="cityName"
      className='search-input'
      onChange={event => {
        if(onSearch) {
          setInput(event.target.value)
        }
      }}
      onKeyPress={(event) => {
        if (event.key === "Enter" && onSearch) {
          onSearch(input);
        }
      }}
    />
  )
}
