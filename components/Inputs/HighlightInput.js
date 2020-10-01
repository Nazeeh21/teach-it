import React from 'react'

const Input = ({ type = 'text' }) => {
  return (
    <input type={type} className='p-4 w-full rounded bg-highlight' placeholder='' />
  )
}

export default Input