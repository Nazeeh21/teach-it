import React from 'react'

const Dropdown = ({ changeHandler }) => {
  return (
    <select className='bg-highlight p-2 rounded' onChange={e => changeHandler(e.target.value)}>
      <option>Test1</option>
      <option>Test2</option>
      <option>Test3</option>
      <option>Test4</option>
      <option>Test5</option>
    </select>
  )
}

export default Dropdown