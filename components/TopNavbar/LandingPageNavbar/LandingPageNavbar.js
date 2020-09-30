import React from 'react'
import { SecondaryButton } from '../../Buttons/Index'
import { useRouter } from 'next/router'

const LandingPageNavbar = () => {
  const router = useRouter()

  return (
    <div className='px-3 pt-2 lg:px-32 lg:pt-12 lg:justify-center bg-white w-full lg:grid lg:grid-cols-2 lg:grid-rows-1'>
      <div className='grid grid-cols-2 lg:flex lg:justify-items-center lg:items-center text-lg text-darkGrey font-medium w-full'>
        <img onClick={() => router.push('/')} className='cursor-pointer' src='Logo.svg' alt='logo' />
        <p style={{ cursor: 'pointer' }} className='hidden lg:ml-10 lg:block'>
          Home
        </p>
        <p style={{ cursor: 'pointer' }} className='hidden lg:ml-10 lg:block'>
          Features
        </p>
        <p style={{ cursor: 'pointer' }} className='hidden lg:ml-10 lg:block'>
          Contact us
        </p>
        <div className='justify-self-end cursor-pointer lg:hidden'><img src='hand-burger.svg' alt='hand-burger' /></div>
      </div>
      <div className='hidden justify-self-end lg:block'>
        <SecondaryButton label='Get Started' clickHandler={() => router.push('/login')} />
      </div>
    </div>
  )
};

export default LandingPageNavbar;
