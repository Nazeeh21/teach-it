import React, { useState } from 'react'
import { SecondaryButton } from '../../Buttons/Index'
import { useRouter } from 'next/router';
import SideDrawer from './SideDrawer';

const LandingPageNavbar = () => {
  const router = useRouter()

  const [openSideDrawer, setOpenSideDrawer] = useState(false)

  const toggleSideDrawerHandler = () => setOpenSideDrawer(prevState => !prevState)

  
  return (
    <div className='px-3 pt-2 md:px-5 mx:pt-5 lg:px-32 lg:pt-12 bg-white w-full md:grid md:grid-cols-2 md:grid-rows-1 '>
      <SideDrawer open={openSideDrawer} closed={toggleSideDrawerHandler} />
      <div className='grid grid-cols-2 md:flex md:justify-items-center md:items-center text-md lg:text-lg text-darkGrey font-medium w-full'>
        <img onClick={() => router.push('/')} className='cursor-pointer' src='Logo.svg' alt='logo' />
        <a href='/' style={{ cursor: 'pointer' }} className='hidden md:ml-4 md:w-auto lg:ml-10 md:block'>
          Home
        </a>
        <a href='/' style={{ cursor: 'pointer' }} className='hidden md:ml-4 md:w-auto lg:ml-10 md:block'>
          Features
        </a>
        <a href='/' style={{ cursor: 'pointer' }} className='hidden md:ml-4 md:w-auto lg:ml-10 md:block'>
          Contact us
        </a>
        <div className='justify-self-end cursor-pointer md:hidden' onClick={toggleSideDrawerHandler}><img src='hand-burger.svg' alt='hand-burger' /></div>
      </div>
      <div className='hidden justify-self-end md:block'>
        <SecondaryButton label='Get Started' clickHandler={() => router.push('/login')} />
      </div>
    </div>
  )
};

export default LandingPageNavbar;
