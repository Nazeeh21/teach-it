import React from 'react'
import Avatar from '../Images/Avatar'

export const ChatWindowContact = ({src, name, text, active = false, time, current = false}) => (
  <div style={{borderBottom: '2px solid #f3f4f8'}} className={`bg-${current ? 'lightCyan' : 'white'} p-2 flex flex-row items-center w-full`}>
    <Avatar src={src} alt={name} purpose='isForChat' />
    <div >
      <p className={active ? `font-bold` : `font-normal` `text-2xl`}>{name}</p>
      <div className='flex flex-row items-center'>
        <p className='text-lg text-darkGrey justify-start mr-4'>{text}</p>
        <p className='italic text-lightGrey text-xs justify-end'>{time} min ago</p>
      </div>
    </div>
  </div>
)