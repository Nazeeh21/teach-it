import React from 'react'
import { PrimaryButton } from '../../../components/Buttons/Index'
import Rating from '../../../components/Rating/Rating'
import loremIpsum from '../../../utility/loremIpsum'
import Milestone from './Milestone/Milestone'

const ViewService = ({ response }) => {
  if (!response) {
    return null
  }

  return (
    <div className='bg-lightGrey text-primary'>
      <div
        style={{ backgroundImage: `url("guitar.png")`, height: '18rem' }}
        className='grid grid-cols-1 grid-rows-2 p-5 text-right'
      >
        <p className='justify-self-end text-white text-3xl'>4.5</p>
        <div className='justify-self-end -mt-20'>
          <Rating size='20' />
        </div>
      </div>
      <div className='bg-lightGrey grid grid-cols-2 gap-4 p-4 h-16 w-full'>
        <p className='text-xl text-darkGrey'>
          {response.category === null ? 'MUSIC' : response.category}
        </p>
        <div className='justify-self-end'>
          <p style={{ color: '#0D0B22' }} className='text-xl'>
            {response.type.toUpperCase()}
            {/* LIVE */}
          </p>
        </div>
      </div>
      <div>
        <div className='bg-white border-gray-300 p-5'>
          <div className='flex flex-col sm:flex-col lg:flex-row mb-3'>
            <div className='w-full sm:w-full lg:w-7/12'>
              <p className='text-2xl font-medium'>{response.title}</p>
              <p className='text-darkGrey text-lg my-2'>{response.description}</p>
            </div>
            <div
              style={{
                color: '#6F6E7B',
                background: '#F9F8FD',
                lineHeight: '190%',
              }}
              className='w-full sm:w-full lg:w-5/12 p-5 text-sm font-medium'
            >
              <div className='flex'>
                <img src='/Combined-Shape.svg' alt='CombinedShape' />
                <p className='mx-2'>{response.languages}</p>
              </div>
              <div className='flex'>
                <img src='/clock.svg' alt='clock-img' />
                <p className='mx-2'>{response.start_at.substring(11, 13)} pm, 2 hours</p>
              </div>
              <div className='flex'>
                <img src='/calender.svg' alt='calender' />
                <p className='mx-2'>Tue, Thurs, Fri & Sun</p>
              </div>
              <p className='ml-6'>Start date: {response.start_at.substring(0, 10)}</p>
              <p className='ml-6'>End date: {response.end_at.substring(0, 10)}</p>
              <p className='ml-6 text-lg'>Weekly cost: {response.cost}</p>
            </div>
          </div>
          <div className='my-20'>
            <Milestone />
            <Milestone />
            <Milestone />
          </div>
          <div className='w-6/12'>
            <PrimaryButton label='Subscribe' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewService
