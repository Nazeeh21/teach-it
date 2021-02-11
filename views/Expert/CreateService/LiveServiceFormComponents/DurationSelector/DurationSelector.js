import React, { useEffect, useState } from 'react'
import timediff from 'timediff'

const DurationSelector = ({
  duration,
  onDurationChanged,
  startDate,
  endDate,
}) => {
  console.log('startDate', startDate)
  console.log('endDate', endDate)
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)

  useEffect(() => {
    if (startDate && startDate !== '' && endDate && endDate !== '') {
      const newTimeDiff = timediff(startDate, endDate, 'Hms')
      setHours(newTimeDiff.hours)
      setMinutes(newTimeDiff.minutes)
      setSeconds(newTimeDiff.milliseconds)
      console.log('timeDiff', newTimeDiff)
      const mergedValue =
        newTimeDiff.hours.toString() +
        ':' +
        newTimeDiff.minutes.toString() +
        ':' +
        newTimeDiff.milliseconds.toString()
      onDurationChanged(mergedValue)
    }
  }, [startDate, endDate])

  return (
    <div className="w-full text-lg font-medium">
      <p className="mb-2">Duration</p>
      <div className="flex justify-between">
        <div className="py-1 pl-2 w-16 h-8 bg-lightGrey rounded-sm">
          {hours && hours}
        </div>
        <div className="py-1 pl-2 w-16 bg-lightGrey rounded-sm">
          {minutes && minutes}
        </div>
        <div className="py-1 pl-2 w-16 bg-lightGrey rounded-sm">
          {seconds && seconds}
        </div>
        <p className="text-md ml-3">hours</p>
      </div>
    </div>
  )
}
export default DurationSelector
