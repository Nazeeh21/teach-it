import React from 'react'

export default ({ value, changeHandler, isIncorrect }) => {
  const baseStyles = 'bg-highlight rounded-full w-2/12 pl-3 pr-3 p-3 text-center text-xl m-2 mt-6'

  return (
    <input
      style={{outline: 'none'}}
      maxLength={1}
      type='text'
      className={isIncorrect ? `border-2 border-red ${baseStyles}` : baseStyles}
      value={value}
      onChange={e => changeHandler(e.target.value)}
    />
  )
}
