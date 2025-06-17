import React from 'react'
import { Form } from 'react-bootstrap'
import "./FilterByName.css"
const FilterByName = ({inputSearch,setInputSearch}) => {
  return (
    <div className='filtre'>
      <Form.Control 
      onChange={(e) => setInputSearch(e.target.value)}
      value={inputSearch}
      type="text" 
      placeholder="Readonly input here..."  />
    </div>
  )
}

export default FilterByName
