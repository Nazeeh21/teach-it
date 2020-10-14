import React, { useState } from 'react'
import DatePicker from '../../../components/DateAndTimePicker/DatePicker/DatePicker'
import Pills from '../../../components/Misc/3Pills/3Pills'
import ServiceFreeqSel from './LiveServiceFormComponents/ServiceFreeqSelector/ServiceFreeqSel'
import DaySelector from './LiveServiceFormComponents/DaySelector/DaySelector'
import DateSelector from './LiveServiceFormComponents/DateSelector/DateSelector'
import TimeSelector from './LiveServiceFormComponents/TimeSelector/TimeSelector'
import DurationSelector from './LiveServiceFormComponents/DurationSelector/DurationSelector'
import CustomizeAndMilestoneContainer from './LiveServiceFormComponents/CustomizeAndMilestoneContainer'
// import { useDispatch, useSelector } from 'react-redux'
// import {
//   setDuration,
//   setStartHour,
//   setStartMin,
//   setServiceFrequency,
//   setDaysOfWeek,
//   setStartTimeStamp,
// } from '../../../store/actions/createServiceAction'

const ScheduleSelector = ({
  type,
  weekDaysChangedHandler,
  hour,
  min,
  hourChangedHandler,
  minChangedHandler,
  timeStampChangedHandler,
  duration,
  durationChangedHandler,
  startDate,
  startDateChangeHandler,
  endDate,
  endDateChangeHandler,
  setMilestoneData
}) => {
  // const dispatch = useDispatch()
  // const hour = useSelector(state => state.createService.startHour)
  // const min = useSelector(state => state.createService.startMin)
  // const duration = useSelector((state) => state.createService.duration)

  if (type === 0) {
    return (
      <React.Fragment>
        <ServiceFreeqSel />
        <div className='mt-6'>
          <DaySelector
            changedHandler={(value) => {
              weekDaysChangedHandler(value)
              // dispatch(setDaysOfWeek(value))
            }}
          />
        </div>
        <div className='mt-6'>
          <DateSelector />
        </div>
        <div className='flex mt-6'>
          <div className='w-6/12'>
            <TimeSelector
              hourValue={hour}
              minValue={min}
              timeStampChanged={(value) => {
                timeStampChangedHandler(value)
                // dispatch(setStartTimeStamp(value))
              }}
              hourChanged={(value) => {
                hourChangedHandler(value)
                // dispatch(setStartHour(value))
              }}
              minChanged={(value) => {
                minChangedHandler(value)
                // dispatch(setStartMin(value))
              }}
            />
          </div>
          <div className='w-6/12'>
            <DurationSelector
              duration={duration}
              onDurationChanged={(value) => {
                durationChangedHandler(value)
                // dispatch(setDuration(value))
              }}
            />
          </div>
        </div>
        <div className='mt-10'>
          <CustomizeAndMilestoneContainer setMileStoneData={setMilestoneData} />
        </div>
      </React.Fragment>
    )
  }

  if (type === 1) {
    return (
      <React.Fragment>
        <div className=''>
          <p className='mt-2 text-lg'>Payment frequency</p>
          <p className='mt-1 mb-2 text-darkGrey text-sm'>
            At what frequency subscriber of the service shall pay
          </p>
          <Pills
            width='w-6/12'
            color='white'
            label1='Per day'
            label2='Per week'
            label3='Per month'
          />
        </div>

        <div className='my-4 flex'>
          <div className='w-6/12'>
            <div className='text-lg mb-2'>Start date</div>
            <div>
              <DatePicker value={startDate} changeHandler={value => startDateChangeHandler(value)} />
            </div>
          </div>

          <div className='w-6/12 mx-3'>
            <div className='text-lg mb-2'>End date</div>
            <div>
              <DatePicker value={endDate} changeHandler={value =>  endDateChangeHandler(value)} />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  return null
}

export default ScheduleSelector
