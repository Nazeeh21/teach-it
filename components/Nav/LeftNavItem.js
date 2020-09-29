import React from 'react'
import { Icon } from '../Images/Icon'

const LeftNavItem = ({ icon, label }) => {
  return (
    <div className='flex flex-row items-center m-2'>
      <Icon src={icon} alt={label} />
      <p className='cursor-pointer hover:text-learner ml-1'>{label}</p>
    </div>
  )
};

export default LeftNavItem;
