import React, { useCallback, useEffect, useState } from 'react'
import Accordion from '../../../components/Accordion'
import ServiceTypeCard from './ServiceTypeCard'
import ScheduleSelector from './ScheduleSelector'
import FeesSelector from './FeesSelector'
import AudienceSelector from './AudienceSelector'
import UpperForm from './UpperForm'
import AllowRecording from './LiveServiceFormComponents/Recording&LearnerName/AllowRecording'
import ShowFullName from './LiveServiceFormComponents/Recording&LearnerName/ShowFullName'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { EXPERT } from '../../../constants'
import { PrimaryButton } from '../../../components/Buttons/Index'
import { createService } from '../../../store/actions/createServiceAction'

const SectionTitle = ({ children }) => (
  <h3 className='text-lg text-primary mb-2'>{children}</h3>
)

const Index = () => {
  const [type, setType] = useState(null)
  const [liveType, setLiveType] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [weekDays, setWeekDays] = useState('null')
  const [startTimeHour, setStartTimeHour] = useState('')
  const [startTimeMin, setStartTimeMin] = useState('')
  const [startTimeStamp, setStartTimeStamp] = useState(null)
  const [duration, setDuration] = useState('')
  const [fees, setFees] = useState('')

  const router = useRouter()
  const userType = useSelector((state) => state.app.userType)
  const dispatch = useDispatch()

  const verifyUserType = useCallback(() => {
    if (userType === EXPERT) {
      return true
    } else {
      return false
    }
  }, [userType])

  useEffect(() => {
    if (!verifyUserType()) {
      router.push('/dashboard')
    }
  }, [verifyUserType])

  const [serviceType, setServiceType] = useState(null)

  const continueClickedHandler = () => {
    const formData = {
      title: title,
      description: description,
      category: null,
      languages: 'english',
      type: type,
      is_group: false,
      is_private: false,
      live_type: liveType,
      cost: fees,
      session_type: 'weekly',
      payment_type: 'weekly',
      allow_questions: false,
      question_fee: '5656',
      allow_subscribe: false,
      allow_recording: false,
      allow_visible_user_names: false,
      // start_at: `10/16/2020 ${startTimeHour} ' : ' ${startTimeMin} ' ' ${startTimeStamp}`,
      // end_at: `12/16/2020 ${startTimeHour} ' : ' ${startTimeMin} ' ' ${startTimeStamp}`,
      start_at: '2020-10-16T02:08:00Z',
      end_at: '2020-10-24T02:08:00Z',
      age_group: '10-18'
    }

    dispatch(createService(formData))
  }

  return (
    <div className='w-full'>
      <h3 className='text-2xl text-primary mb-4'>Create new service</h3>
      <div className='border-2 border-highlight bg-white rounded-sm p-6'>
        <Accordion id='details' label='Service details'>
          {/* TODO: Language selection */}

          <SectionTitle>Service type</SectionTitle>
          <div className='w-full grid grid-cols-2 gap-5 mb-6'>
            <ServiceTypeCard
              label='Live'
              active={serviceType === 0}
              clickHandler={() => {
                setType('live')
                // dispatch(setMediaType('live'))
                setServiceType(0)
              }}
            />
            <ServiceTypeCard
              label='Rich media'
              active={serviceType === 1}
              clickHandler={() => {
                setType('rich')
                // dispatch(setMediaType('rich'))
                setServiceType(1)
              }}
            />
          </div>
          <UpperForm
            title={title}
            titleChangedHandler={(value) => setTitle(value)}
            typeChangedHandler={(type) => setLiveType(type)}
            description={description}
            descriptionChangedHandler={(value) => setDescription(value)}
            type={serviceType === 0 ? 'live' : 'media'}
          />
        </Accordion>

        <Accordion id='schedule' label='Service schedule'>
          <ScheduleSelector
            hour={startTimeHour}
            min={startTimeMin}
            hourChangedHandler={(value) => setStartTimeHour(value)}
            minChangedHandler={(value) => setStartTimeMin(value)}
            timeStampChangedHandler={(value) => setStartTimeStamp(value)}
            weekDaysChangedHandler={(value) => setWeekDays(value)}
            duration={duration}
            durationChangedHandler={value => setDuration(value)}
            type={serviceType}
          />
        </Accordion>

        {/* <Accordion label='AUDIENCE'> */}
        {/* <div className='flex mt-6'>
            <div className='w-6/12'>
              <AllowRecording />
            </div>
            <div className='w-6/12 ml-6'>
              <ShowFullName />
            </div>
          </div> */}
        {/* </Accordion> */}

        <Accordion id='fees' label='Fees'>
          <FeesSelector fees={fees} feesChangedHandler={value => setFees(value)} />
        </Accordion>

        <Accordion id='audience' label='Audience'>
          <AudienceSelector />
        </Accordion>

        <div className='flex gap-4'>
          <AllowRecording />
          <ShowFullName />
        </div>
        <div className='w-4/12 mt-10'>
          <PrimaryButton label='Continue' clickHandler={continueClickedHandler} />
        </div>
      </div>
    </div>
  )
}

export default Index
