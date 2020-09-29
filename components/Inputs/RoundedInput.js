import React, { useCallback, useEffect, useState } from 'react'
import { validate } from '../../utility/validation'

const labelClasses = 'block text-textBoxTitle p-1 text-darkGrey'

const RoundedInput = (
  {
    label,
    placeholder,
    value,
    changeHandler,
    type,
    required = false,
    bottomLabel,
    styles,
    isValid,
    setIsValid
  }
) => {
  const [touched, setTouched] = useState(false)

  const validateValue = useCallback(() => {
    if (validate(type, value)) {
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }, [type, value])

  useEffect(() => {
    if (touched) {
      validateValue()
    }
  }, [validateValue, touched])

  return (
    <div className={styles}>
      <label className={labelClasses} htmlFor={label}>
        {label} {!required ? '(optional)' : null}
      </label>
      <input
        style={{ outline: 'none' }}
        id={label}
        type={type}
        value={value}
        onChange={(e) => {
          changeHandler(e.target.value)
          if (!touched) {
            setTouched(true)
          }
        }}
        placeholder={placeholder}
        required={required}
        className={`border-${isValid ? 'learner' : 'red border-2' } w-full bg-highlight rounded-full p-4 text-${
          touched ? 'text-primary' : 'text-darkGrey'
        }`}
      />
      <br />
      {/* {isValid ? 'Valid' : 'Invalid'} */}
      <p className={labelClasses}>{bottomLabel}</p>
    </div>
  )
};

export default RoundedInput;
