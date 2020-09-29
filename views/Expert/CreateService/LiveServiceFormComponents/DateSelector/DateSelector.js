import React from 'react'
import DatePicker from './DatePicker/DatePicker'

export default () => (
  <div className='w-full flex text-lg font-medium'>
    <div className='w-6/12'>
      <p className='mb-2'>Start date</p>
      <div className='-ml-2'><DatePicker /></div>
    </div>
    <div className='w-6/12'>
    <p className='mb-2'>End date</p>
      <div className='-ml-2'><DatePicker /></div>
    </div>
  </div>
)