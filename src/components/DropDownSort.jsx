import React from 'react'
import {useDispatch} from 'react-redux'
import Dropdown from 'react-bootstrap/Dropdown'
import {sortPyPrice,sortByCount} from '../store/pizzaReducer'
const DropDownSort = ({products}) => {
  const dispatch = useDispatch()
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          SortBy
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick ={()=>dispatch(sortPyPrice(products))} >Price</Dropdown.Item>
          <Dropdown.Item onClick = {()=>dispatch(sortByCount(products))}>Count</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default DropDownSort
