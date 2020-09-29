import React from 'react'

const OtpInput = ({ value, changeHandler, isIncorrect, showStatus }) => {
  const baseStyles = 'bg-highlight rounded-full w-2/12 pl-3 pr-3 p-3 text-center text-xl m-2 mt-6'

  return (
    <input
      style={{outline: 'none'}}
      maxLength={1}
      type='text'
      className={isIncorrect && showStatus ? `border-2 border-red ${baseStyles}` : baseStyles}
      value={value}
      onChange={e => changeHandler(e.target.value)}
    />
  )
};

export default OtpInput;
