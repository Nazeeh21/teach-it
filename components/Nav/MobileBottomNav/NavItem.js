import React from 'react'
import { LEARNER } from '../../../constants'

const Icon = ({ src, alt, active }) => {
  return (
    <img
      className={`cursor-pointer w-4 h-auto align-middle`}
      src={src}
      alt={alt}
    />
  )
}

const LeftNavItem = ({ icon, label, clickHandler, isActive, userType }) => {
  const color = userType === LEARNER ? 'learner' : 'expert'

  if (isActive) {
    return (
      <div onClick={clickHandler} className="flex flex-row items-center">
        <Icon src={icon} alt={label} />
        <p className={`cursor-pointer text-${color} ml-1`}>{label}</p>
      </div>
    )
  }

  return (
    <div onClick={clickHandler} className="flex flex-row items-center">
      <Icon src={icon} alt={label} />
      <p className={`cursor-pointer hover:text-${color} ml-1`}>{label}</p>
    </div>
  )
}

export default LeftNavItem
