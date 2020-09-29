import React from 'react'
import { SecondaryButton } from '../../Buttons/Index'
import { useRouter } from 'next/router'

const LandingPageNavbar = () => {
  const router = useRouter()

  return (
    <div className='px-32 pt-12 justify-center bg-white w-full grid grid-cols-2 grid rows-1'>
      <div className='flex items-center text-lg text-darkGrey font-medium'>
        <img onClick={() => router.push('/')} className='cursor-pointer w-64' src='Logo.svg' alt='logo' />
        <p style={{ cursor: 'pointer' }} className='ml-10'>
          Home
        </p>
        <p style={{ cursor: 'pointer' }} className='ml-10'>
          Features
        </p>
        <p style={{ cursor: 'pointer' }} className='ml-10'>
          Contact us
        </p>
      </div>
      <div className='justify-self-end'>
        <SecondaryButton label='Get Started' clickHandler={() => router.push('/login')} />
      </div>
    </div>
  )
};

export default LandingPageNavbar;
