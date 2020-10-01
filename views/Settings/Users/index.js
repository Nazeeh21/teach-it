import React from 'react'
import Avatar from '../../../components/Images/Avatar'

const Option = () => (
  <div className='flex'>
    <div className='bg-darkGrey w-3 h-3 '
  </div>
)

const User = ({ src, name, text }) => (
  <div className='w-full bg-lightGrey text-darkGrey grid grid-cols-2 grid-rows-1'>
    <div className='flex'>
      <Avatar src={src} alt={name} purpose='isForChat' />
      <p className='text-lg'>{name}</p>
    </div>
    <div className='flex justify-end'>
      <div>{text}</div>
    </div>
  </div>
)

export default User