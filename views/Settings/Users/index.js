import React from 'react'
import Avatar from '../../../components/Images/Avatar'

const Option = () => (
  <div className='flex'>
    <div className='rounded-full bg-darkGrey w-1 h-1 mr-1' />
    <div className='rounded-full bg-darkGrey w-1 h-1 mr-1' />
    <div className='rounded-full bg-darkGrey w-1 h-1 mr1' />
  </div>
)

const User = ({ src, name, text }) => (
  <div className='w-full bg-lightGrey py-1 px-2 text-darkGrey grid grid-cols-2 grid-rows-1 items-center'>
    <div className='flex items-center'>
      <Avatar src={src} alt={name} purpose='isForChat' />
      <p className='text-lg ml-2'>{name}</p>
    </div>
    <div className='flex items-center justify-end'>
      <div>{text}</div>
      <div className='cursor-pointer mx-3'>{<Option />}</div>
    </div>
  </div>
)

export default User