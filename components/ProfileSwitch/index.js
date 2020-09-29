import React from 'react'

export default () => {
  return (
    <div className='flex items-center w-full'>
      <div className='flex flex-col w-full items-center'>
        <img
          src='avis/ana.png'
          alt='Switch profile'
          className='w-8 h-auto cursor-pointer rounded-full'
        />
        <p className='text-xs'>Anastasia</p>
      </div>
      <img
        src='arrows/down.svg'
        alt='Switch profile'
        className='cursor-pointer'
      />
    </div>
  )
}
