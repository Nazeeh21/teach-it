import React, { useState } from 'react'

const WebsiteUrl = () => {
  const [inputValue, setInputValue] = useState('')
  const [touched, setTouched] = useState(false)

  const [isValid, setIsValid] = useState(true)

  const inputChangeHandler = (value) => {
    setInputValue(value)
    setTouched(true)

    let valid = true

    let pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // fragment locator

    valid = value.trim() !== '' && valid
    valid = pattern.test(value) && valid

    setIsValid(valid)
  }

  return (
    <div className="w-full">
      <p className="text-xl font-medium">Website URL</p>
      <input
        style={{ outline: 'none' }}
        className={`${
          touched && !isValid && 'border-red border-2'
        } rounded bg-lightGrey pl-2 py-2 mt-1 w-full`}
        type="url"
        value={inputValue}
        onChange={(e) => inputChangeHandler(e.target.value)}
      />
      {touched && !isValid && (
        <p className="text-red text-sm ml-1">Please enter a valid URL</p>
      )}
    </div>
  )
}

export default WebsiteUrl
