import React from 'react'

const Input = ({
  type = 'text',
  value = '',
  changeHandler,
  valid = false,
  touched = false,
  inValidMessage = '',
}) => {
  return (
    <div>
      <input
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
        type={type}
        className={`${
          !valid && touched && 'border-red border-solid border-2'
        } p-4 w-full rounded bg-highlight`}
        placeholder=''
      />
      {!valid && touched && <p className='text-red text-sm'>{inValidMessage}</p>}
    </div>
  )
}

export default Input
