import React from 'react'
import DatePicker from './DatePicker/DatePicker'
import Pills from '../Misc/3Pills/3Pills'
import { v4 as uuid } from 'uuid'

const WeekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]
const timeStamp = ['AM', 'PM']

const DateAndTimePicker = () => (
  <div>
    <div className="m-4">
      <p className="m-2 p-0.5 text-lg">Service Frequency</p>
      <Pills
        color="white"
        label1="Per day"
        label2="Per week"
        label3="Per month"
      />
    </div>
    <div className="m-4">
      <p className="m-2 mt-6 text-lg">Days of the week</p>
      <div
        className="text-lg bg-lightGrey p-2 w-3/12 m-3 rounded"
        style={{ width: 'fitContent' }}
      >
        <select className="bg-lightGrey w-full ">
          {WeekDays.map((day, index) => (
            <option key={index} className="m-1 p-3">
              {day}
            </option>
          ))}
        </select>
      </div>
    </div>

    <div className="m-4 flex">
      <div className="w-3/12 m-3">
        <div className="text-lg m-2">Start date</div>
        {/* <div className='bg-lightGrey rounded-sm w-full p-2 m-0.5'>
          11 Sept 2020
        </div> */}
        <DatePicker />
      </div>

      <div className="w-3/12 m-3">
        <div className="text-lg m-2">End date</div>
        {/* <div className='bg-lightGrey rounded-sm w-full p-2 m-0.5'>
          20 Nov 2020
        </div> */}
        <DatePicker />
      </div>
    </div>

    <div className="m-4 flex">
      <div className="w-3/12 m-3">
        <div className="text-lg m-2">Start time</div>
        <div className="flex">
          <input
            // value=''
            type="number"
            max="12"
            min="1"
            placeholder="hour"
            className="w-2/12 text-md bg-lightGrey rounded-sm p-2"
            onChange={(e) => e.target.value}
          />
          {/* <div className='w-2/12 text-md bg-lightGrey rouned-sm p-2'>2</div> */}
          <span className="m-2">:</span>
          {/* <div className='w-2/12 text-md bg-lightGrey rouned-sm p-2'>30</div> */}
          <input
            // value=''
            type="number"
            max="59"
            min="0"
            placeholder="minutes"
            className="w-2/12 text-md bg-lightGrey rounded-sm p-2"
            onChange={(e) => e.target.value}
          />
          <div
            className="text-md bg-lightGrey w-3/12 ml-4 p-2 rounded"
            style={{ width: 'fitContent' }}
          >
            <select className="bg-lightGrey w-full ">
              {timeStamp.map((time, index) => (
                <option key={index} className="">
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="w-3/12 m-3">
        <div className="text-lg m-2">Duration</div>
        <div className="flex">
          <input
            type="number"
            max="12"
            min="1"
            className="bg-lightGrey text-md rounded-sm w-2/12 p-2 m-0.5"
            onChange={(e) => e.target.value}
          />
          <span className="p-2 m-0.5">hours</span>
        </div>
      </div>
    </div>
  </div>
)

export default DateAndTimePicker
