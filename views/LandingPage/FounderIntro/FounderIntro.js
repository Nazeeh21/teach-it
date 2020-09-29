import React from 'react'

const text =
  'Videowork is the top ranked interactive learning platform from subject experts.'

const FounderIntro = () => (
  <div className='flex justify-center items-center px-10 py-24'>
    <div className='w-3/12 text-center p-5'>
      <img className='w-7/12 h-auto m-auto rounded-lg' src='founder.png' alt='founder-img' />
      <p className='pt-5 text-darkGrey text-2xl font-medium'>Andesh Bhatti</p>
      <p className='text-darkGrey text-2xl '>Founder, Videowork</p>
    </div>
    <div className='w-6/12'>
      <p className=' text-5xl text-secondary'>"</p>
      <p className='text-3xl font-medium'>{text}</p>
    </div>
  </div>
)

export default FounderIntro