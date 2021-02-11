import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { PrimaryButton } from '../../../components/Buttons/Index'
import ReviewForm from '../../../components/Misc/ReviewForm'
import Rating from '../../../components/Rating/Rating'
import Milestone from './Milestone/Milestone'
import ISO6391 from 'iso-639-1'

const ViewService = ({ response, milestoneData }) => {
  const [showReviewForm, setShowReviewForm] = useState(false)

  const [primaryButtonLabel, setPrimaryButtonLabel] = useState('Subscribe')
  const userServices = useSelector((state) => state.app.userServices)
  const router = useRouter()
  if (!response || !milestoneData) {
    return null
  }

  useEffect(() => {
    userServices.filter((service) => service.pk === router.query.id)
    console.log(router.query.id)
    if (userServices.length !== 0) {
      setPrimaryButtonLabel('Give Reviews')
    }
  }, [userServices, router.query.id])

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
  console.log('Milestone data in viewService', milestoneData)

  const primaryButtonClickedHandler = () => {
    if (userServices.length !== 0) {
      setShowReviewForm(true)
    }
  }
  return (
    <div className="bg-lightGrey text-primary">
      {showReviewForm && (
        <ReviewForm
          show={showReviewForm}
          servicePk={router.query.id}
          backdropClickHandler={() => setShowReviewForm(false)}
          buttonClicked={() => setShowReviewForm(false)}
        />
      )}
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
            {milestoneData.length === 0 && (
              <div className="m-auto text-lg text-gray-600 font-medium">
                There are no Milestones for this service.
              </div>
            )}
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
            <PrimaryButton
              label={primaryButtonLabel}
              clickHandler={primaryButtonClickedHandler}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewService
