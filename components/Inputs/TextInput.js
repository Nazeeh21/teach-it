import React, { useCallback, useEffect, useState } from 'react'
import { validate } from '../../utility/validation'

const labelClasses =
  'block text-textBoxTitle p-1 text-darkGrey text-left w-full'

const TextInput = (
  {
    label,
    placeholder = null,
    value,
    changeHandler,
    type = 'text',
    required = false,
    bottomLabel = null,
    styles = null,
  }
) => {
  const [isValid, setIsValid] = useState(true)
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
    <div className={`w-full m-auto mb-8 ${styles}`}>
      <label className={labelClasses} for={label}>
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
        className={`border-${
          isValid ? 'learner' : 'red border-b-2'
        } bg-highlight border-b-2 border-darkGrey p-1 w-full text-${
          touched ? 'textBoxValue' : 'textBoxEmpty'
        }`}
      />
      {/* {isValid ? 'Valid' : 'Invalid'} */}
      <p className={labelClasses}>{bottomLabel}</p>
    </div>
  )
};

export default TextInput;
