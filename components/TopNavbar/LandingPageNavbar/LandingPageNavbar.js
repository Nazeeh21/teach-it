import React from 'react'
import { SecondaryButton } from '../../Buttons/Index'
import { useRouter } from 'next/router'

const LandingPageNavbar = () => {
  const router = useRouter()

  return (
    <div className='px-3 pt-2 md:px-5 mx:pt-5 lg:px-32 lg:pt-12 bg-white w-full md:grid md:grid-cols-2 md:grid-rows-1'>
      <div className='grid grid-cols-2 md:flex md:justify-items-center md:items-center text-lg text-darkGrey font-medium w-full'>
        <img onClick={() => router.push('/')} className='cursor-pointer' src='Logo.svg' alt='logo' />
        <p style={{ cursor: 'pointer' }} className='hidden md:ml-5 md:w-auto lg:ml-10 md:block'>
          Home
        </p>
        <p style={{ cursor: 'pointer' }} className='hidden md:ml-5 md:w-auto lg:ml-10 md:block'>
          Features
        </p>
        <p style={{ cursor: 'pointer' }} className='hidden md:ml-5 md:w-auto lg:ml-10 md:block'>
          Contact us
        </p>
        <div className='justify-self-end cursor-pointer md:hidden'><img src='hand-burger.svg' alt='hand-burger' /></div>
      </div>
      <div className='hidden justify-self-end md:block'>
        <SecondaryButton label='Get Started' clickHandler={() => router.push('/login')} />
      </div>
    </div>
  )
};

export default LandingPageNavbar;
