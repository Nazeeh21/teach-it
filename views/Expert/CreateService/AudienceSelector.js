import React from 'react'

const AudienceSelector = () => {
  return (
    <div className='w-full'>
      <p className='mt-2 text-lg'>Age groups allowed</p>
      <p className='mt-1 mb-2 text-darkGrey text-sm'>
        Learners who are not in the specified age group, will not be shown the service.{' '}
        <span className='cursor-pointer text-secondary'>Legal</span>
      </p>
    </div>
  )
};

export default AudienceSelector;