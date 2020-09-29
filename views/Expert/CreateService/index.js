import React, { useState } from 'react'
import Accordion from '../../../components/Accordion'
import ServiceTypeCard from './ServiceTypeCard'
import ScheduleSelector from './ScheduleSelector'
import FeesSelector from './FeesSelector'
import AudienceSelector from './AudienceSelector'
import UpperForm from './UpperForm'
import AllowRecording from './LiveServiceFormComponents/Recording&LearnerName/AllowRecording'
import ShowFullName from './LiveServiceFormComponents/Recording&LearnerName/ShowFullName'

const SectionTitle = ({ children }) => (
  <h3 className='text-lg text-primary mb-2'>{children}</h3>
)

export default () => {
  const [serviceType, setServiceType] = useState(null)

  return (
    <div className='w-full'>
      <h3 className='text-2xl text-primary mb-4'>Create new service</h3>
      <div className='border-2 border-highlight bg-white rounded-sm p-6'>
        <Accordion label='Service details'>
          {/* TODO: Language selection */}

          <SectionTitle>Service type</SectionTitle>
          <div className='w-full grid grid-cols-2 gap-5 mb-6'>
            <ServiceTypeCard
              label='Live'
              active={serviceType === 0}
              clickHandler={() => setServiceType(0)}
            />
            <ServiceTypeCard
              label='Rich media'
              active={serviceType === 1}
              clickHandler={() => setServiceType(1)}
            />
          </div>
          <UpperForm type={serviceType === 0 ? 'live' : 'media'} />
        </Accordion>

        <Accordion label='Service schedule'>
          <ScheduleSelector type={serviceType} />
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

        <Accordion label='Fees'>
          <FeesSelector />
        </Accordion>

        <Accordion label='Audience'>
          <AudienceSelector />
        </Accordion>

        <div className='flex gap-4'>
          <AllowRecording />
          <ShowFullName />
        </div>
      </div>
    </div>
  )
}
