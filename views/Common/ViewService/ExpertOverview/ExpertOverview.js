import React, { useEffect, useState } from 'react'
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../components/Buttons/Index'
import Avatar from '../../../../components/Images/Avatar'
import Rating from '../../../../components/Rating/Rating'
import { useRouter } from 'next/router'
import { fetchProviderData } from '../../../../services/viewService'
import { useSelector } from 'react-redux'

const Card = ({ count, text }) => (
  <div className="font-medium my-3 grid">
    <p className="text-2xl justify-self-center">{count}</p>
    <p>{text}</p>
  </div>
)

const ExpertOverview = ({ providerPk }) => {
  const router = useRouter()
  const token = useSelector((state) => state.auth.token)
  const currentProfileId = useSelector((state) => state.app.currentProfile)

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

  return (
    <div className="text-primary">
      <PrimaryButton label="Subscribe" />
      <div className="bg-white w-full rounded-md my-5 p-3">
        <p className="text-2xl font-bold">{providerData.name}</p>
        <div className="flex">
          <div className="w-6/12 p-2">
            <Avatar
              src="/stock/girl2.jpg"
              alt="profile"
              purpose="isForProfile"
            />
          </div>
          <div className="text-center m-2 w-6/12">
            <p
              className={`text-center text-${
                providerData.is_verified ? 'green' : 'red'
              } text-md`}
            >
              {providerData.is_verified ? 'Verified' : 'Unverified'}
            </p>
            <Card count="58" text="Services" />
            <Card count="425" text="Learners" />
            <Card
              count={<Rating size="15" value={providerData.rating_position} />}
              text={`${providerData.review_count} total reviews`}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SecondaryButton
            clickHandler={() => router.push('/messages')}
            label="Send message"
            color="primary"
          />
          <SecondaryButton
            clickHandler={() => router.push('/profile')}
            label="View profile & reviews"
          />
        </div>
      </div>
    </div>
  )
}

export default ExpertOverview
