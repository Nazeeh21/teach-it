import React from 'react'
import {v4 as uuid} from 'uuid'

const WeekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const DaySelector = ({changedHandler}) => <div className='w-full'>
  <p className='text-lg font-medium'>Days of the week</p>
  <select className='bg-lightGrey text-md w-6/12 mt-2 p-3' onChange={e => changedHandler(e.target.value)}>
    {WeekDays.map(day => <option key={() => uuid()} value={day}>{day}</option>)}
  </select>
</div>;

export default DaySelector;