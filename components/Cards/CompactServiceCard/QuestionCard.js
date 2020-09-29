import React from 'react'
import loremIpsum from '../../../utility/loremIpsum'
import Avatar from '../../Images/Avatar'

export default () => (
  <div className='flex flex-col border-2 border-lightGrey rounded p-2 mb-4'>
    <div className='grid grid-cols-2 items-center w-full'>
      <div className='flex flex-row items-center'>
      <Avatar purpose='isForChat' src='nazeeh_profile.jpg' alt='Nazeeh Vahora' />
      <p className='text-md justify-self-start'>Nazeeh Vahora</p>
      </div>
      <p className='text-darkGrey justify-self-end'>10 mins ago</p>
    </div>
    <p className='pl-2'>{loremIpsum}</p>
  </div>
)
