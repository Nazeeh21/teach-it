import React from 'react'
import Avatar from '../Images/Avatar'

export const ChatWindowContact = ({src, name, text, active = false, time, current = false, clickHandler}) => (
  <div style={{borderBottom: '2px solid #f3f4f8'}} className={`bg-${current ? 'lightCyan' : 'white'} cursor-pointer p-2 flex flex-row items-center w-full rounded-b-lg`}>
    <Avatar src={src} alt={name} purpose='isForChat' />
    <div onClick={() => clickHandler(name)}>
      <p className={`${current ? 'font-bold' : 'font-normal'} text-xl`}>{name}</p>
      <div className='grid grid-cols-2 items-center w-full'>
        <p className='text-lg text-darkGrey justify-start mr-4'>{text}</p>
        <p className='justify-self-end italic text-lightGrey text-xs justify-end'>{time} min ago</p>
      </div>
    </div>
  </div>
)