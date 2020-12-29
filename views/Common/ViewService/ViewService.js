import React from 'react'
import { PrimaryButton } from '../../../components/Buttons/Index'
import Rating from '../../../components/Rating/Rating'
import Milestone from './Milestone/Milestone'

const ViewService = ({ response, milestoneData }) => {
  if (!response || !milestoneData) {
    return null
  }

  const {
    start_at,
    end_at,
    cost,
    languages,
    media,
    category,
    type,
    title,
    description,
  } = response

  const startTime = new Date(start_at)
  const endTime = new Date(end_at)

  console.log('ViewService')
  console.log(milestoneData)
  return (
    <div className="bg-lightGrey text-primary">
      <div
        style={{
          backgroundImage: `url(${media[0] || '/guitar.png'})`,
          height: '18rem',
        }}
        className="grid grid-cols-1 grid-rows-2 p-5 text-right"
      >
        <p className="justify-self-end text-white text-3xl">4.5</p>
        <div className="justify-self-end -mt-20">
          <Rating size="20" />
        </div>
      </div>
      <div className="bg-lightGrey grid grid-cols-2 gap-4 p-4 h-16 w-full">
        <p className="text-xl text-darkGrey">
          {category === null ? 'MUSIC' : category}
        </p>
        <div className="justify-self-end">
          <p style={{ color: '#0D0B22' }} className="text-xl">
            {type.toUpperCase()}
            {/* LIVE */}
          </p>
        </div>
      </div>
      <div>
        <div className="bg-white border-gray-300 p-5">
          <div className="flex flex-col sm:flex-col lg:flex-row mb-3">
            <div className="w-full sm:w-full lg:w-7/12">
              <p className="text-2xl font-medium">{title}</p>
              <p className="text-darkGrey text-lg my-2">{description}</p>
            </div>
            <div
              style={{
                color: '#6F6E7B',
                background: '#F9F8FD',
                lineHeight: '190%',
              }}
              className="w-full sm:w-full lg:w-5/12 p-5 text-sm font-medium"
            >
              <div className="flex">
                <img src="/Combined-Shape.svg" alt="CombinedShape" />
                <p className="mx-2">
                  {languages.length === 0 && <span>None specified</span>}
                  {languages.map((lang, idx) => (
                    <span key={idx}>{ISO6391.getName(lang)}</span>
                  ))}
                </p>
              </div>
              <div className="flex">
                <img src="/clock.svg" alt="clock-img" />
                <p className="mx-2">
                  {startTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
              </div>
              {/* <div className="flex">
                <img src="/calender.svg" alt="calendar" />
                <p className="mx-2">Tue, Thurs, Fri & Sun</p>
              </div> */}
              <p className="ml-6">
                Start date: {startTime.toLocaleDateString()}
              </p>
              <p className="ml-6">End date: {endTime.toLocaleDateString()}</p>
              <p className="ml-6 text-lg">Weekly cost: {cost}</p>
            </div>
          </div>
          <div className="my-20">
            {milestoneData.map((milestone) => (
              <Milestone
                title={milestone.title}
                sessionsNumber={milestone.sessions_number}
                description={milestone.description}
              />
            ))}
            {/* <Milestone  />
            <Milestone />
            <Milestone /> */}
          </div>
          <div className="w-6/12">
            <PrimaryButton label="Subscribe" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewService
