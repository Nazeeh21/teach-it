import React from 'react'

const heading = 'Learn one-on-one or in a group'

const subHeading1 =
  'Dont have fixed time slots? Want to choose your own learning schedule and timing?'

const subHeading2 =
  'Just step up one on one individual sessions with the top experts as per your own availability. You can even take audio-only sessions if you prefer.'

const LearnOneOnOne = () => (
  <div className='bg-white'>
    <div className='m-24 pt-32 flex justify-center '>
      <div className='w-5/12 m-10'>
        <div style={{ color: '#1d2d50' }} className='text-5xl mt-12 font-bold'>
          {heading}
        </div>
        <div className='text-xl text-darkGrey my-8'>{subHeading1}</div>
        <div className='text-xl text-darkGrey my-8'>{subHeading2}</div>
        <button className='bg-secondary p-3 w-5/12 my-8 rounded-md text-white text-xl font-medium'>
          Get Started
        </button>
      </div>
      <div className='w-7/12'>
        <div className='flex items-center'>
          <div className='w-4/12 text-right	'>
            <img
              className='w-10/12 m-2 h-auto'
              src='arrow-1.png'
              alt='arrow-1'
            />
          </div>
          <img
            className='w-8/12 h-auto rounded-lg m-3'
            src='learn-one-on-one-1.png'
            alt='learn-one-on-one-1'
          />
        </div>
        <div className='flex items-center'>
          <div className='w-4/12'>
            <img
              className='w-full m-2 h-auto'
              src='arrow-2.png'
              alt='arrow-2'
            />
          </div>
          <img
            className='w-8/12 h-auto rounded-lg m-3'
            src='learn-one-on-one-2.png'
            alt='learn-one-on-one-2'
          />
        </div>
      </div>
    </div>
  </div>
)

export default LearnOneOnOne
