import React from 'react'
import LandingPageNavbar from '../../components/TopNavbar/LandingPageNavbar/LandingPageNavbar'
import BottomNavbar from '../LandingPage/BottomNavbar/BottomNavbar'
import VideoWorkDesc from '../LandingPage/VideoWorkDesc/index'
import Footer from '../LandingPage/Footer/index'

const ContactUs = () => (
  <div>
    <LandingPageNavbar />
    <div className='grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-1'>
      <div className='w-full justify-self-center m-auto px-32 py-32 pr-48'>
        <p className='text-5xl font-semibold'>Contact us</p>
        <p className='font-semibold text-lg text-darkGrey my-3'>
          Let us know how we can help!
        </p>
        <form>
          <div className='mt-6 '>
            <p className='font-medium text-lg mb-2'>Name</p>
            <input className='bg-highlight p-2  rounded w-full' type='text' width='full' />
          </div>
          <div className='mt-6 '>
            <p className='font-medium text-lg mb-2'>Email</p>
            <input className='bg-highlight p-2  rounded w-full' type='email' width='full' />
          </div>
          <div className='mt-6 '>
            <p className='font-medium text-lg mb-2'>Message</p>
            <textarea
              className='bg-highlight p-2  rounded w-full'
              width='full'
              rows='3'
              cols='25'
            />
          </div>
          <button className='bg-secondary text-white text-xl font-medium py-2 rounded-md w-6/12 mt-8'>Send</button>
        </form>
      </div>
      <div style={{zIndex: '-100'}} className='hidden xl:block absolute top-0 right-0 w-6/12 '>
        <img src='/contact-us.jpg' alt='contact-us' />
      </div>
    </div>
    <BottomNavbar />
    <VideoWorkDesc />
    <div className='bg-lightGrey'><Footer /></div>
  </div>
)

export default ContactUs
