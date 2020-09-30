import React from 'react'

const text =
  'Videowork is the top ranked interactive learning platform from subject experts.'

const FounderIntro = () => (
  <div className='flex flex-col pl-5 lg:flex-row justify-center items-center lg:px-10 py-24'>
    <div className='w-full flex flex-row lg:flex-col lg:w-3/12 text-center p-5'>
      <img className='w-4/12 lg:w-7/12 h-auto m-auto rounded-lg' src='founder.png' alt='founder-img' />
      <div>
        <p className='text-xl pt-5 text-darkGrey lg:text-2xl font-medium'>Andesh Bhatti</p>
        <p className='text-lg text-darkGrey lg:text-2xl '>Founder, Videowork</p>
      </div>
      
    </div>
    <div className='w-full lg:w-6/12'>
      <p className=' text-5xl text-secondary'>"</p>
      <p className='text-xl lg:text-3xl font-medium'>{text}</p>
    </div>
  </div>
)

export default FounderIntro