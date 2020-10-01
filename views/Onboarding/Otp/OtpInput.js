import React from 'react'
import { useRouter } from 'next/router'

const OtpInput = ({ index, value, changeHandler, isIncorrect, showStatus, handleSubmit }) => {
  const router = useRouter()

  const baseStyles = 'bg-highlight rounded-full w-2/12 pl-3 pr-3 p-3 text-center text-xl m-2 mt-6'

  return (
    <input
      id={`otp-${index}`}
      style={{outline: 'none'}}
      maxLength={1}
      type='text'
      className={isIncorrect && showStatus ? `border-2 border-red ${baseStyles}` : baseStyles}
      value={value}
      onChange={e => changeHandler(e.target.value)}
      onKeyUp={e => {
        if (e.key === 'Enter') {
          handleSubmit()
        }
      }}
    />
  )
};

export default OtpInput;
