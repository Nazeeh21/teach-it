import React, { useEffect, useState } from 'react'
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../components/Buttons/Index'
import Avatar from '../../../../components/Images/Avatar'
import Rating from '../../../../components/Rating/Rating'
import { useRouter } from 'next/router'
import { fetchProviderData } from '../../../../services/viewService'
import { createChat } from '../../../../services/chat'
import { setActiveChatId } from '../../../../store/actions/chatActions'
import { useDispatch, useSelector } from 'react-redux'

const Card = ({ count, text }) => (
  <div className="font-medium my-3 grid">
    <p className="text-2xl justify-self-center">{count}</p>
    <p>{text}</p>
  </div>
)

const ExpertOverview = ({ providerPk }) => {
  const dispatch = useDispatch()

  const router = useRouter()
  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)

  let token = useSelector((state) => state.auth.token)
  let profileId = useSelector((state) => state.app.currentProfile)

  const [providerData, setProviderData] = useState()

  useEffect(() => {
    console.log('Provider pk', providerPk)
    fetchProviderData(providerPk, token, currentProfileId).then((res) =>
      setProviderData(res)
    )
  }, [providerPk])

  if (!providerData || !providerPk) {
    return null
  }

  const messageButtonClickHandler = async () => {
    // Create chat
    const chatId = await createChat(token, profileId, providerPk)

    if (!chatId) {
      return alert('Error while trying to create chat. Try again.')
    } else {
      // Set active chat Id
      dispatch(setActiveChatId(chatId))
      // Redirect to /messages
      router.push('/messages')
    }
  }

  const {
    name,
    pic,
    is_verified,
    rating_position,
    review_count,
    seeker_count,
    service_count,
  } = providerData

  return (
    <div className="text-primary">
      <PrimaryButton label="Subscribe" />
      <div className="bg-white w-full rounded-md my-5 p-3">
        <p className="text-2xl font-bold">{name}</p>
        <div className="flex">
          <div className="w-6/12 p-2">
            <Avatar
              src={pic || '/avis/ana.png'}
              alt="profile"
              purpose="isForProfile"
            />
          </div>
          <div className="text-center m-2 w-6/12">
            <p
              className={`text-center text-${
                is_verified ? 'green' : 'red'
              } text-md`}
            >
              {is_verified ? 'Verified' : 'Unverified'}
            </p>
            <Card count={service_count} text="Services" />
            <Card count={seeker_count || 0} text="Learners" />
            <Card
              count={<Rating size="15" value={rating_position} />}
              text={`${review_count} total reviews`}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SecondaryButton
            clickHandler={messageButtonClickHandler}
            label="Send message"
            color="primary"
          />
          <SecondaryButton
            clickHandler={() => router.push(`/profile/${providerPk}`)}
            label="View profile & reviews"
          />
        </div>
      </div>
    </div>
  )
}

export default ExpertOverview
