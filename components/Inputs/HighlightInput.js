import React from 'react'

const Input = ({ type = 'text', value = '', changeHandler, valid = false, touched = false }) => {
  return (
    <input value={value} onChange={e => changeHandler(e.target.value)} type={type} className={`${!valid && touched && 'border-red border-solid border-2'} p-4 w-full rounded bg-highlight`} placeholder='' />
  )
}

export default Input