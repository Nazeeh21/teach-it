import React from 'react'

export default ({ index, label, done = false, active = false }) => {

  return (
    <div className='flex items-center w-full mb-10'>
      {done ? (
        <div className='p-2 bg-secondary rounded-full w-auto'>
          <img className='w-4' src='tick.svg' />
        </div>
      ) : (
        <div className={`border-2 rounded-full border-${active ? 'secondary' : 'none'} bg-highlight p-1 px-3 w-auto`}>
          {index}
        </div>
      )}
      <p className='ml-2 text-lg'>{label}</p>
    </div>
  )
}
