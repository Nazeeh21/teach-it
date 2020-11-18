import React, { useState } from 'react'
import { Icon } from '../Images/Icon'
import { LEARNER } from '../../constants'

const LeftNavItem = ({ icon, label, clickHandler, isActive, userType }) => {
  const [hovered, setHovered] = useState(false)

  const color = userType === LEARNER ? 'learner' : 'expert'
  const iconColor = userType === LEARNER ? 'red' : 'blue'

  const inactiveSuffix = hovered ? iconColor : 'grey'

  if (isActive) {
    return (
      <div onClick={clickHandler} className="flex flex-row items-center m-2">
        <Icon src={`${icon}_${iconColor}.svg`} alt={label} />
        <p className={`cursor-pointer text-${color} ml-1`}>{label}</p>
      </div>
    )
  }

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      onClick={clickHandler}
      className="flex flex-row items-center m-2"
    >
      <Icon src={`${icon}_${inactiveSuffix}.svg`} alt={label} />
      <p className={`cursor-pointer hover:text-${color} ml-1`}>{label}</p>
    </div>
  )
}

export default LeftNavItem
