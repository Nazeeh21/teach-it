import React from 'react'
import { PrimaryButton } from '../../../components/Buttons/Index'

export default ({ question, time, date }) => {
  return (
    <React.Fragment>
      <div className='flex rounded-lg border-highlight border-2 bg-white w-full p-6'>
        <p className='w-3/4 font-semibold'>{question}?</p>
        <div className='w-1/4 ml-4'>
          <PrimaryButton label='View' />
        </div>
      </div>
      <div className='grid grid-cols-1 -mt-5 font-semibold'>
        <p className='justify-self-end text-darkGrey text-sm'>4.35pm, 26 September</p>
      </div>
    </React.Fragment>
  )
}
