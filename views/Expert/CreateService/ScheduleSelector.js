import React, { useState } from 'react'
// import DatePicker from '../../../components/DateAndTimePicker/DatePicker/DatePicker'
// import DateTimePicker from 'react-datetime-picker'
import Pills from '../../../components/Misc/3Pills/3Pills'
import ServiceFreeqSel from './LiveServiceFormComponents/ServiceFreeqSelector/ServiceFreeqSel'
import DaySelector from './LiveServiceFormComponents/DaySelector/DaySelector'
// import DateSelector from './LiveServiceFormComponents/DateSelector/DateSelector'
import TimeSelector from './LiveServiceFormComponents/TimeSelector/TimeSelector'
import DurationSelector from './LiveServiceFormComponents/DurationSelector/DurationSelector'
import CustomizeAndMilestoneContainer from './LiveServiceFormComponents/CustomizeAndMilestoneContainer'
import LanguagesSelector from './LiveServiceFormComponents/LanguagesSelector'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    backgroundColor: '#f3f4f8',
    padding: '0.5rem',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}))

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
  setMilestoneData,
  serviceFreq,
  setServiceFreq,
  paymentFreq,
  setPaymentFreq,
  onLanguagesChanged,
}) => {
  // const [activePillLabel, setLabel] = useState('per day')
  const classes = useStyles()

  if (type === 0) {
    return (
      <React.Fragment>
        <ServiceFreeqSel
          activeLabel={serviceFreq}
          setLabel={setServiceFreq}
          heading="Service Freequency"
        />
        <div className="mt-6 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
          <div className="w-10/12">
            <DaySelector
              changedHandler={(value) => {
                weekDaysChangedHandler(value)
              }}
            />
          </div>
          <div className="w-10/12">
            <LanguagesSelector onLanguageChanged={onLanguagesChanged} />
          </div>
        </div>
        <div className="mt-6">
          {/* <DatePicker /> */}
          <div className="w-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 text-lg font-medium">
            <div className="w-full">
              <p className="mb-2">Start date</p>
              <div className="w-full">
                {/* <DatePicker
                  // value={startDate}

                  handleDayChange={startDateChangeHandler}
                /> */}
                {/* <DateTimePicker
                  className="w-10/12 bg-lightGrey border-0 h-10"
                  value={startDate}
                  onChange={startDateChangeHandler}
                /> */}
                <TextField
                  id="datetime-local"
                  color="primary"
                  // classes={}
                  // label=""
                  onChange={(event) =>
                    startDateChangeHandler(new Date(event.target.value))
                  }
                  placeholder="YYYY-MM-DD"
                  size="medium"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
            <div className="w-full">
              <p className="mb-2">End date</p>
              <div className="w-full">
                {/* <DatePicker
                  // value={endDate}

                  handleDayChange={endDateChangeHandler}
                /> */}
                {/* <DateTimePicker
                  className="w-10/12 bg-lightGrey border-0 h-10"
                  value={endDate}
                  onChange={endDateChangeHandler}
                /> */}
                <TextField
                  id="datetime-local"
                  color="primary"
                  // label=""
                  onChange={(event) =>
                    endDateChangeHandler(new Date(event.target.value))
                  }
                  placeholder="YYYY-MM-DD"
                  size="medium"
                  type="datetime-local"
                  defaultValue="2017-05-24T10:30"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 mt-6">
          {/* <div className="w-full">
            <TimeSelector
              hourValue={hour}
              minValue={min}
              timeStampChanged={(value) => {
                timeStampChangedHandler(value)
              }}
              hourChanged={(value) => {
                hourChangedHandler(value)
              }}
              minChanged={(value) => {
                minChangedHandler(value)
              }}
            />
          </div> */}
          <div className="w-full">
            <DurationSelector
              startDate={startDate}
              endDate={endDate}
              duration={duration}
              onDurationChanged={(value) => {
                durationChangedHandler(value)
              }}
            />
          </div>
        </div>
        <div className="mt-10">
          <CustomizeAndMilestoneContainer setMileStoneData={setMilestoneData} />
        </div>
      </React.Fragment>
    )
  }

  if (type === 1) {
    return (
      <React.Fragment>
        <div className="">
          <p className="mt-2 text-lg">Payment frequency</p>
          <p className="mt-1 mb-2 text-darkGrey text-sm">
            At what frequency subscriber of the service shall pay
          </p>
          <Pills
            activeLabel={paymentFreq}
            setLabel={setPaymentFreq}
            width="w-full"
            color="white"
            label1="Per day"
            label2="Per week"
            label3="Per month"
          />
        </div>

        <div className="mt-6 w-full grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-4 text-lg font-medium">
          <div className="w-full">
            <p className="mb-2">Start date</p>
            <div className="w-full">
              {/* <DatePicker
                value={startDate}
                handleDayChange={startDateChangeHandler}
              /> */}
              <DateTimePicker
                className="w-10/12 bg-lightGrey border-0 h-10"
                value={startDate}
                onChange={startDateChangeHandler}
              />
            </div>
          </div>
          <div className="w-full">
            <p className="mb-2">End date</p>
            <div className="w-full">
              {/* <DatePicker
                value={endDate}
                handleDayChange={endDateChangeHandler}
              /> */}
              <DateTimePicker
                className="w-10/12 bg-lightGrey border-0 h-10"
                value={endDate}
                onChange={endDateChangeHandler}
              />
            </div>
          </div>
        </div>
        {/* <div className='my-4 flex'>
          <div className='w-6/12'>
            <div className='text-lg mb-2'>Start date</div>
            <div>
              <DatePicker
                value={startDate}
                changeHandler={(value) => startDateChangeHandler(value)}
              />
            </div>
          </div>

          <div className='w-6/12 mx-3'>
            <div className='text-lg mb-2'>End date</div>
            <div>
              <DatePicker
                value={endDate}
                changeHandler={(value) => endDateChangeHandler(value)}
              />
            </div>
          </div>
        </div> */}
      </React.Fragment>
    )
  }

  return null
}

export default ScheduleSelector
