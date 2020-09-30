import React from 'react'
import IntroVideo from './IntroVideo'
import { useRouter } from 'next/router'

const IntroScreen = () => {
  const router = useRouter()

  return (
    <div className='bg-white px-2 lg:px-24 lg:pb-24 lg:pt-12 lg:flex lg:justify-center'>
      <div className='pt-16 pb-16 lg:w-5/12 lg:m-12'>
        <div style={{ color: '#1d2d50' }} className='text-3xl text-center lg:text-5xl lg:text-left font-bold '>
          World's first <span style={{ color: '#345DEE' }}>live video</span>{' '}
          freelance platform
        </div>
        <div className='w-full mt-8 lg:hidden'>
          <div style={{position: 'relative', }} className='rounded-lg border-solid border-8 border-gray-900 w-10/12 mx-auto'>
            <IntroVideo />
          </div>
          <div className='w-11/12 mx-auto mt-10'>
            <span style={{lineHeight: '10%'}} className='text-learner block text-5xl'>"</span>I learned to
            cook asian food from a chef in Japan.
            <div className='lg:mt-4 text-black text-right'>Kimberley S., USA</div>
          </div>
          
        </div>
        <div className='text-center text-lg lg:text-left lg:text-xl text-darkGrey'>
          <div className='mt-6 lg:mt-8 font-medium lg:mb-8'>
            Learn from subject experts around the world, no matter where you
            are.
          </div>
          <div className='mt-6 lg:mt-8 font-medium lg:mb-8'>
            A safe, trusted and easy to use environment eliminating payment
            related stress.
          </div>
        </div>
        <div className='flex justify-center lg:justify-start'>
          <button onClick={() => router.push('/login')} className='justify-self-center mt-6 lg:mt-1 p-3 lg:w-5/12 text-xl font-medium bg-learner text-white text-subHeading rounded-md'>
            Start learning
          </button>
        </div>
        
        <div className='hidden lg:text-xl text-darkGrey m-auto lg:mt-40 lg:flex lg:items-center font-medium'>
          <img
            className='m-3 w-5/12 h-auto'
            src='users-online.png'
            alt='users-online'
          />
          127 new users this week
        </div>
      </div>
      <div className='hidden lg:w-7/12 lg:m-12 lg:flex'>
        <div className='lg:w-7/12 h-auto rounded-lg'>
          <IntroVideo />
        </div>
        {/* <img className='w-7/12 h-auto rounded-lg' src='mobile-call.jpg' alt='mobile-call' /> */}
        <div className=' lg:w-5/12 lg:m-8 lg:mt-40 lg:inline-block align-middle text-darkGrey text-xl font-medium'>
          <span className='text-learner block text-5xl'>"</span>I learned to
          cook asian food from a chef in Japan.
          <div className='lg:mt-4 text-black text-right'>Kimberley S., USA</div>
        </div>
      </div>
    </div>
  )
}

export default IntroScreen
