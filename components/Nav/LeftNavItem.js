import React, { useState } from 'react'
import { Icon } from '../Images/Icon'
import { LEARNER } from '../../constants'

const LeftNavItem = ({ icon, label, clickHandler, isActive, userType }) => {
  const [hovered, setHovered] = useState(false)

  const color = userType === LEARNER ? 'learner' : 'expert'
  const iconColor = userType === LEARNER ? 'red' : 'blue'

  const inactiveSuffix = hovered ? iconColor : 'grey'

  const textColor = hovered ? color : 'primary'

  if (isActive) {
    return (
      <div onClick={clickHandler} className="flex flex-row items-center m-2">
        <Icon src={`${icon}_${iconColor}.svg`} alt={label} />
        <p className={`cursor-pointer text-${color} ml-1`}>{label}</p>
      </div>
    )
  }

  return (
    <div onClick={clickHandler} className="flex flex-row items-center m-2">
      <div
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        <Icon src={`${icon}_${inactiveSuffix}.svg`} alt={label} />
      </div>
      <p
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        className={`cursor-pointer ml-1 text-${textColor}`}
      >
        {label}
      </p>
    </div>
  )
}

export default LeftNavItem
