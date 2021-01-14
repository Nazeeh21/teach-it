import React, { useState } from 'react'

const DurationSelector = ({
  duration,
  onDurationChanged,
  startDate,
  endDate,
}) => {
  const [hour, setHour] = useState(0)
  const [minute, setMinute] = useState(0)
  const [second, setSecond] = useState(0)

  // let timeInterval = null
  // if(startDate && endDate) {
  //   timeInterval = `${startDate.toISOString()}/${endDate.toISOString()}`
  //   const range = moment.rangeFromISOString(startDate.toISOString(), endDate.toISOString())
  //   console.log("Range", range.toString())
  // }

  const durationChangeHandler = () => {
    setTimeout(() => {
      const mergedValue =
        hour.toString() + ':' + minute.toString() + ':' + second.toString()
      onDurationChanged(mergedValue)
    }, 1000)
    // const mergedValue =
    //   hour.toString() + ':' + minute.toString() + ':' + second.toString()
    // onDurationChanged(mergedValue)
  }
  return (
    <div className="w-full text-lg font-medium">
      <p className="mb-2">Duration</p>
      <div className="flex justify-between">
        <input
          type="number"
          value={hour}
          min="1"
          step="1"
          max="23"
          placeholder="hour"
          className="py-1 pl-2 w-16 bg-lightGrey rounded-sm"
          onChange={(e) => {
            setHour(e.target.value)
            durationChangeHandler()
          }}
        />
        <input
          type="number"
          value={minute}
          min="0"
          max="59"
          step="1"
          placeholder="min"
          className="py-1 pl-2 w-16 bg-lightGrey rounded-sm"
          onChange={(e) => {
            setMinute(e.target.value)
            durationChangeHandler()
          }}
        />
        <input
          type="second"
          value={second}
          min="0"
          max="59"
          step="1"
          placeholder="hour"
          className="py-1 pl-2 w-16 bg-lightGrey rounded-sm"
          onChange={(e) => {
            setSecond(e.target.value)
            durationChangeHandler(e.target.value)
          }}
        />
        <p className="text-md ml-3">hours</p>
      </div>
    </div>
  )
}
export default DurationSelector
