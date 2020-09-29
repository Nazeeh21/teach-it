import React from 'react'

export default ({ value, changeHandler }) => {
  return (
    <input
      style={{outline: 'none'}}
      value={value}
      onChange={(e) => changeHandler(e.target.value)}
      className='rounded-full bg-white pt-2 pb-2 pl-4 pr-4 w-full-'
    />
  )
}
