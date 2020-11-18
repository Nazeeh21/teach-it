import React from 'react'
import { v4 as uuid } from 'uuid'

const timeStamp = ['AM', 'PM']

const TimeSelector = ({
  hourValue,
  minValue,
  hourChanged,
  minChanged,
  timeStampChanged,
}) => {
  return (
    <div className="w-full text-lg font-medium">
      <p className="mb-2">Start time</p>
      <div className="flex">
        <input
          value={hourValue}
          type="number"
          max="12"
          min="1"
          placeholder="hour"
          className="bg-lightGrey rounded-sm py-1 pl-2"
          onChange={(e) => hourChanged(e.target.value)}
        />
        <span className="mx-2">:</span>
        <input
          value={minValue}
          type="number"
          max="59"
          min="0"
          placeholder="minutes"
          className="bg-lightGrey rounded-sm py-1 pl-2"
          onChange={(e) => minChanged(e.target.value)}
        />
        <select
          id="time-stamp"
          className="bg-lightGrey ml-4 py-1 px-2"
          onChange={(e) => timeStampChanged(e.target.value)}
        >
          {timeStamp.map((time) => (
            <option key={() => uuid()}>{time}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default TimeSelector
