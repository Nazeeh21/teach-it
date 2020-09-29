import React from 'react'
import IntroVideo from './IntroVideo'
import { useRouter } from 'next/router'

const IntroScreen = () => {
  const router = useRouter()

  return (
    <div className='bg-white px-24 pb-24 pt-12 flex justify-center'>
      <div className='w-5/12 m-12'>
        <div style={{ color: '#1d2d50' }} className='text-5xl font-bold '>
          World's first <span style={{ color: '#345DEE' }}>live video</span>{' '}
          freelance platform
        </div>
        <div className='text-xl text-darkGrey'>
          <div className='mt-8 font-medium mb-8'>
            Learn from subject experts around the world, no matter where you
            are.
          </div>
          <div className='mt-8 font-medium mb-8'>
            A safe, trusted and easy to use environment eliminating payment
            related stress.
          </div>
        </div>
        <button onClick={() => router.push('/login')} className='mt-1 p-3 w-5/12 text-xl font-medium bg-learner text-white text-subHeading rounded-md w-auto'>
          Start learning
        </button>
        <div className='text-xl text-darkGrey m-auto mt-40 flex items-center font-medium'>
          <img
            className='m-3 w-5/12 h-auto'
            src='users-online.png'
            alt='users-online'
          />
          127 new users this week
        </div>
      </div>
      <div className='w-7/12 m-12 flex'>
        <div className='w-7/12 h-auto rounded-lg'>
          <IntroVideo />
        </div>
        {/* <img className='w-7/12 h-auto rounded-lg' src='mobile-call.jpg' alt='mobile-call' /> */}
        <div className=' w-5/12 m-8 mt-40 inline-block align-middle text-darkGrey text-xl font-medium'>
          <span className='text-learner block text-5xl'>"</span>I learned to
          cook asian food from a chef in Japan.
          <div className='mt-4 text-black text-right'>Kimberley S., USA</div>
        </div>
      </div>
    </div>
  )
}

export default IntroScreen
