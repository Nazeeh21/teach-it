import React from 'react'
import { Icon } from '../Images/Icon'
import { LEARNER } from '../../constants'

const LeftNavItem = ({ icon, label, clickHandler, isActive, userType }) => {
  const color = userType === LEARNER ? 'learner' : 'expert'

  if (isActive) {
    return (
      <div onClick={clickHandler} className='flex flex-row items-center m-2'>
        <Icon src={icon} alt={label} />
        <p className={`cursor-pointer text-${color} ml-1`}>{label}</p>
      </div>
    )
  }

  return (
    <div onClick={clickHandler} className='flex flex-row items-center m-2'>
      <Icon src={icon} alt={label} />
      <p className={`cursor-pointer hover:text-${color} ml-1`}>{label}</p>
    </div>
  )
}

export default LeftNavItem
