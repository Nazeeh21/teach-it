import React, { useCallback, useEffect, useState } from 'react'

const PhoneInput = ({ changeHandler }) => {
  const [countryCode, setCountry] = useState('+91')
  const [number, setNumber] = useState('')

  const concat = useCallback(() => {
    changeHandler(countryCode + number)
  }, [countryCode, number])

  useEffect(() => { concat() }, [concat])

  return (
    <div className='flex rounded-full w-full bg-highlight p-4'>
      <div className='w-4/12 border-r-2 border-medGrey'>
        <select className='bg-highlight cursor-pointer' value={countryCode} onChange={e => setCountry(e.target.value)}>
          <option value='+91'>+91</option>
          <option value='+92'>+92</option>
          <option value='+93'>+93</option>
          <option value='+94'>+94</option>
        </select>
      </div>
      <div className='w-8/12'>
        <input className='bg-highlight' type='number' value={number} onChange={e => setNumber(e.target.value)} />
      </div>
    </div>
  )
}

export default PhoneInput