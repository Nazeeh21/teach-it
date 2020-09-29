import React from 'react'

const DurationSelector = () => <div className='w-full text-lg font-medium'>
  <p className='mb-2'>Duration</p>
  <div className='flex'>
    <input
        type='number'
        min='1'
        placeholder='hour'
        className='py-1 pl-2 w-20 bg-lightGrey rounded-sm'
        onChange={(e) => e.target.value}
      />
      <p className='text-md ml-3'>hours</p>
  </div>
</div>;

export default DurationSelector;