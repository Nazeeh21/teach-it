import React from 'react'
import DatePicker from '../../../components/DateAndTimePicker/DatePicker/DatePicker'
import Pills from '../../../components/Misc/3Pills/3Pills'
import ServiceFreeqSel from './LiveServiceFormComponents/ServiceFreeqSelector/ServiceFreeqSel'
import DaySelector from './LiveServiceFormComponents/DaySelector/DaySelector'
import DateSelector from './LiveServiceFormComponents/DateSelector/DateSelector'
import TimeSelector from './LiveServiceFormComponents/TimeSelector/TimeSelector'
import DurationSelector from './LiveServiceFormComponents/DurationSelector/DurationSelector'
import CustomizeAndMilestoneContainer from './LiveServiceFormComponents/CustomizeAndMilestoneContainer'

const ScheduleSelector = ({ type }) => {

  if (type === 0) {
    return (
      <React.Fragment>
        <ServiceFreeqSel />
        <div className='mt-6'>
          <DaySelector />
        </div>
        <div className='mt-6'>
          <DateSelector />
        </div>
        <div className='flex mt-6'>
          <div className='w-6/12'>
            <TimeSelector />
          </div>
          <div className='w-6/12'>
            <DurationSelector />
          </div>
        </div>
        <div className='mt-10'>
          <CustomizeAndMilestoneContainer />
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
            width='6/12'
            color='white'
            label1='Per day'
            label2='Per week'
            label3='Per month'
          />
        </div>

        <div className='my-4 flex'>
          <div className='w-6/12'>
            <div className='text-lg mb-2'>Start date</div>
            <div className='-ml-2'>
              <DatePicker />
            </div>
          </div>

          <div className='w-6/12 mx-3'>
            <div className='text-lg mb-2'>End date</div>
            <div className='-ml-2'>
              <DatePicker />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }

  return null
};

export default ScheduleSelector;
