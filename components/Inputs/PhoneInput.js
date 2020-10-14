import React, { useCallback, useEffect, useState } from 'react'

const phoneRegex = /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*\d\W*(\d{1,2})$/

const PhoneInput = ({ changeHandler, isValid, setIsValid }) => {
  const [countryCode, setCountry] = useState('+91')
  const [number, setNumber] = useState('')

  const concat = useCallback(() => {
    changeHandler(countryCode + number)
  }, [countryCode, number])

  const validate = useCallback(() => {
    const val = countryCode + number

    // console.log('Value', val)
    // console.log('Regex result', phoneRegex.test(val))

    if (!phoneRegex.test(val)) {
      setIsValid(false)
    } else {
      setIsValid(true)
    }
  }, [countryCode, number])

  useEffect(() => {
    concat()
    validate()
  }, [concat, validate])

  return (
    <div className={`text-lg flex rounded-full w-full bg-highlight p-4 border-2 ${isValid ? 'border-highlight' : 'border-red'}`}>
      <div className='w-3/12 border-r-2 border-medGrey'>
        <select className='bg-highlight cursor-pointer' value={countryCode} onChange={e => setCountry(e.target.value)}>
          <option value='+91'>+91</option>
          <option value='+92'>+92</option>
          <option value='+93'>+93</option>
          <option value='+94'>+94</option>
        </select>
      </div>
      <div className='w-9/12'>
        <input required maxLength={10} className='bg-highlight' type='number' value={number} onChange={e => setNumber(e.target.value)} />
      </div>
    </div>
  )
}

export default PhoneInput