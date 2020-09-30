import React from 'react'
import { useRouter } from 'next/router'
import TextContainer from './TextContainer/TextContainer'

const heading = 'What makes Videowork such an amazing platform'

const textContainerData = [
  {
    src: 'time.png',
    alt: 'pricing-img',
    title: 'Low Pricing',
    subTitle: 'The courses start from as little as $4. You pay in your local currency. We support all major payment platforms.',
    imgBg: '#d9ecf2'
  },
  {
    src: 'time.png',
    alt: 'clock-img',
    title: 'Safe for kids',
    subTitle: 'We have taken special measures to ensure the safety and well-being of users below 18. They will not be shown any content otherwise.',
    imgBg: '#cffffe'
  },
  {
    src: 'calendar.png',
    alt: 'calendar-img',
    title: 'Truly global',
    subTitle: 'Videowork is being launched around the world in the coming months. Imagine learning French from someone in France or learning to cook pizza from an Italian chef!',
    imgBg: '#ffb0b0'
  },
  {
    src: 'time.png',
    alt: 'availability-img',
    title: 'As per your availability',
    subTitle: 'Since our users are based in different timezones, experts and learners are available round the clock to buy or offer you services. Learn or teach whenever you have time.',
    imgBg: '#c3aed6'
  },
]

const WhatMakesVideoWork = () => {
  const router = useRouter()
  
  return(
  <div className='bg-white flex flex-col lg:flex-row justify-center lg:py-20'>
    <div className='w-full mx-4 mt-2 lg:mt-0 lg:w-4/12 lg:mx-10 lg:my-20 lg:py-12'>
      <p style={{ color: '#1d2d50', lineHeight: '120%' }}
        className='text-5xl text-left font-bold'>
        {heading}
      </p>
      <button onClick={() => router.push('/login')} className='hidden bg-secondary text-white text-xl rounded-md my-10 p-3 px-10 lg:block' >
        Get Started
      </button>
    </div>
    <div className='w-full mt-5 lg:w-6/12 grid-rows-4 grid lg:mt-0 lg:grid-rows-2 lg:grid-cols-2 '>
      {textContainerData.map(data => <TextContainer data={data} />)}
    </div>
    <button onClick={() => router.push('/login')} className='w-6/12 ml-5 mb-16 bg-secondary text-white text-xl rounded-md py-3 px-3 lg:hidden ' >
        Get Started
      </button>
  </div>
)}

export default WhatMakesVideoWork