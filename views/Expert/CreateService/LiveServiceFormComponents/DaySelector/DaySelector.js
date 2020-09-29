import React from 'react'

const WeekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const DaySelector = () => <div className='w-full'>
  <p className='text-lg font-medium'>Days of the week</p>
  <select className='bg-lightGrey text-md w-6/12 mt-2 p-3'>
    {WeekDays.map(day => <option>{day}</option>)}
  </select>
</div>;

export default DaySelector;