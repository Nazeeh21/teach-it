import React from 'react'

const timeStamp = ['AM', 'PM']

export default () => (
  <div className='w-full text-lg font-medium'>
    <p className='mb-2'>Start time</p>
    <div className='flex'>
      <input
        type='number'
        max='12'
        min='1'
        placeholder='hour'
        className='bg-lightGrey rounded-sm py-1 pl-2'
        onChange={(e) => e.target.value}
      />
      <span className='mx-2'>:</span>
      <input
        type='number'
        max='59'
        min='0'
        placeholder='minutes'
        className='bg-lightGrey rounded-sm py-1 pl-2'
        onChange={(e) => e.target.value}
      />
      <select className='bg-lightGrey ml-4 py-1 px-2'>
        {timeStamp.map(time => <option>{time}</option>)}
      </select>
    </div>
  </div>
)
