import React from 'react'
import { PrimaryButton } from '../../Buttons/Index'
import Rating from '../../Rating/Rating'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { createChat } from '../../../services/chat'
import { setActiveChatId } from '../../../store/actions/chatActions'

const Stat = ({ number, label }) => (
  <div className="grid grid-flow-row grid-cols-2 items-center justify-around">
    <h3 className="text-3xl text-primary font-bold">{number}</h3>
    <p>{label}</p>
  </div>
)

const OutlineBtn = ({ label, color }) => (
  <button
    className={`rounded border-2 border-${color} text-${color} text-md pl-4 pr-4 pt-2 pb-2 w-full`}
  >
    {label}
  </button>
)

const Index = ({ profileData }) => {
  const dispatch = useDispatch()

  console.log('Logging profileData from ProfileOverview', profileData)
  let token = useSelector((state) => state.auth.token)
  let profileId = useSelector((state) => state.app.currentProfile)

  const router = useRouter()

  const messageButtonClickHandler = async () => {
    // Create chat
    const chatId = await createChat(token, profileId, pk)

    if (!chatId) {
      return alert('Error while trying to create chat. Try again.')
    } else {
      // Set active chat Id
      dispatch(setActiveChatId(chatId))
      // Redirect to /messages
      router.push('/messages')
    }
  }

  if (!profileData) {
    return null
  }

  const {
    name,
    rating,
    rating_position,
    seekers_count,
    pk,
    service_count,
  } = profileData

  return (
    <div className="w-full bg-white rounded-lg shadow pl-4 pr-4 pt-3 pb-3 flex flex-col">
      <Stat number={service_count} label="Services" />
      <Stat number={seekers_count} label="Learners" />
      <div className="w-full flex flex-row items-center mt-4">
        {/* <Rating value={rating_position} /> */}
        <p className="text-sm">{rating} avg rating</p>
      </div>
      <div className="flex flex-row gap-4 mb-4 mt-4">
        <OutlineBtn label="Share" color="secondary" />
        <OutlineBtn label="Follow" color="primary" />
      </div>
      <PrimaryButton
        clickHandler={() => messageButtonClickHandler()}
        label={`Message ${name}`}
        textSize="md"
      />
    </div>
  )
}

export default Index
