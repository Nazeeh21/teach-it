import React from 'react'
import {
  PrimaryButton,
  SecondaryButton,
} from '../../../../components/Buttons/Index'
import Avatar from '../../../../components/Images/Avatar'
import Rating from '../../../../components/Rating/Rating'
import { useRouter } from 'next/router'

const Card = ({ count, text }) => (
  <div className='font-medium my-3 grid'>
    <p className='text-2xl justify-self-center'>{count}</p>
    <p>{text}</p>
  </div>
)

const ExpertOverview = () => {
  const router = useRouter()

  return (
    <div>
      <PrimaryButton label='Subscribe' />
      <div className='bg-white w-full rounded-md my-5 p-3'>
        <p className='text-2xl font-bold'>Arun Kumar Pattnaik</p>
        <div className='flex'>
          <div className='w-6/12 p-2'>
            <Avatar
              src='nazeeh_profile.jpg'
              alt='profile'
              purpose='isForProfile'
            />
          </div>
          <div className='text-center m-2 w-6/12'>
            <p className='text-center text-red text-md'>Unverified</p>
            <Card count='58' text='Services' />
            <Card count='425' text='Learners' />
            <Card count={<Rating size='15' />} text='152 avg rating' />
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <SecondaryButton
            clickHandler={() => router.push('/messages')}
            label='Send message'
            color='primary'
          />
          <SecondaryButton
            clickHandler={() => router.push('/profile')}
            label='View profile & reviews'
          />
        </div>
      </div>
    </div>
  )
}

export default ExpertOverview
