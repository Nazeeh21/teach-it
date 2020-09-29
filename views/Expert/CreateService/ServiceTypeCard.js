import React from 'react'
import { Icon } from '../../../components/Images/Icon'
import loremIpsum from '../../../utility/loremIpsum'

export default ({
  noIcon,
  iconSrc = 'live.svg',
  label,
  desc = loremIpsum,
  active,
  clickHandler,
}) => {
  return (
    <div
      onClick={clickHandler}
      className={`cursor-pointer w-full p-4 pb-20 flex flex-col rounded-lg border-2 border-${
        active ? 'secondary' : 'lightGrey'
      } border-l-${active ? 4 : 2}`}
    >
      <div className='flex items-center'>
        {!noIcon && <Icon src={iconSrc} />}
        <h3 className='text-primary text-xl'>{label}</h3>
      </div>
      <p className='text-sm text-darkGrey'>{desc}</p>
    </div>
  )
}
