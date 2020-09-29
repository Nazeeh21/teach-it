import React from 'react'
import { PrimaryButton, SecondaryButton } from '../../../../components/Buttons/Index'
import Avatar from '../../../../components/Images/Avatar'
import Rating from '../../../../components/Rating/Rating'

const Card = ({count, text}) => (
  <div className='font-medium my-3 grid'>
    <p className='text-2xl justify-self-center'>{count}</p>
    <p>{text}</p>
  </div>
)
export default () => (
  <div>
    <PrimaryButton label='Subscribe' />
    <div className='bg-white w-full rounded-md my-5 p-3'>
      <p  className='text-2xl font-bold'>Arun Kumar Pattnaik</p>
      <div className='flex'>
        <div className='w-6/12 p-2' >
          <Avatar src='nazeeh_profile.jpg' alt='profile' purpose='isForProfile' />
        </div>
        <div className='text-center m-2 w-6/12'>
          <p className='text-center text-red text-md'>Unverified</p>
          <Card count='58' text='Services' />
          <Card count='425' text='Learners' />
          <Card count={<Rating size='15' />} text='152 avg rating' />
        </div>
      </div>
      <SecondaryButton label='Send message' color='primary' />
      <SecondaryButton label='View profile & reviews' />
    </div>
  </div>
)