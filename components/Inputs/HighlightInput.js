import React from 'react'

const Input = ({
  defaultValue = '',
  placeholder = '',
  type = 'text',
  value = '',
  changeHandler,
  valid = false,
  touched = false,
  inValidMessage = '',
  disabled = false,
  autoComplete = true,
}) => {
  // console.log('Default value', defaultValue)

  return (
    <div>
      <input
        autoComplete={autoComplete}
        defaultValue={`${defaultValue}`}
        value={value}
        onChange={(e) => changeHandler(e.target.value)}
        type={type}
        className={`${
          !valid && touched && 'border-red border-solid border-2'
        } p-4 w-full rounded bg-highlight`}
        placeholder={placeholder}
        disabled={disabled}
      />
      {!valid && touched && (
        <p className="text-red text-sm">{inValidMessage}</p>
      )}
    </div>
  )
}

export default Input
