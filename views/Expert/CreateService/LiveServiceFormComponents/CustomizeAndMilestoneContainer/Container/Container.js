import React, { useState } from 'react'
import Checkbox from './Checkbox/Checkbox'

export default ({label}) => {
  const [active, setActive] = useState(true)

  const checkboxClickHandler = () => (
    setActive(presentState => !presentState)
  )

 return ( <div className={`flex w-full p-4 pb-10 rounded-lg border-2 border-${
    active ? 'secondary' : 'lightGrey'
  } border-l-${active ? 4 : 2} ${!active && 'text-darkGrey font-normal'}`}>
    <div id='checkbox' className='w-1/12' ><Checkbox active={active} clicked={checkboxClickHandler} /></div>
    <div className='w-11/12 mt-1'>{label}</div>
  </div>)
}