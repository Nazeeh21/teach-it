import React from 'react'

export default () => (
  <div className='w-full rounded-lg'>
    <div className='h-64 w-full'>
      <div style={{position: 'relative', top: '6rem'}} className='px-2 flex items-center grid grid-cols-2 grid rows-1 '>
        <div className='flex items-center'>
          <img
            className='mr-3 w-5 justify-items-start'
            src='hamBurger.png'
            alt='hamBurger' />
          <div className=' '>
            <p className='font-bold'>Quarterly Review</p>
            <p className='text-xs'>1 of 9 in the call</p>
          </div>
        </div>
        <div className='items-end flex flex-row justify-self-end items-center'>
          <button className='mr-6'><img className='w-6 m-auto' src='setting.png' alt='setting' /></button>
          <button className='bg-darkGrey rounded-full w-16 h-16'><img className='w-8 m-auto' src='add-user.png' alt='add-user' /></button>
        </div>
      </div>
      <img className='w-full h-auto' src='videocall.png' alt='video-call' />
    </div>
  </div>
)
