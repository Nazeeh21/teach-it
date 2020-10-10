import React from 'react';

const DatePicker = ({ value, changeHandler }) => (
  <div className='w-full'>
    <input value={value} onChange={e => changeHandler(e.target.value)} type="date" id="birthday" name="birthday" />
  </div>
)

export default DatePicker