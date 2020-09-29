import React from 'react'
import loremIpsum from '../../../../utility/loremIpsum'

const Milestone = () => (
  <div style={{border: '1px solid #F3F3F4'}} className='w-full rounded-md m-2 my-3 p-3'>
    <div className='grid grid-cols-2 grid-rows-1'>
      <p className='justify-self-start'>Milestone 1</p>
      <p className='justify-self-end text-darkGrey text-xs font-semibold'>3 sessions</p>
    </div>
    <p className='text-darkGrey text-sm'>{loremIpsum}</p>
  </div>
)

export default Milestone