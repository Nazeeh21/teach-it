import React from 'react'
import Card from './Card/Card'
import LearningCard from './LearningCards/LearningCard'

const cardData = [
  { text: 'Stock trading', color: 'purple', bgColor: '#c3aed6' },
  { text: 'Consulting', color: 'purple', bgColor: '#06ABE0' },
  { text: 'Music', color: 'purple', bgColor: '#4D5D9A' },
  { text: 'Astrology', color: 'purple', bgColor: '#EDE3F8' },
  { text: 'Beauty', color: 'purple', bgColor: '#4A6D78' },
  { text: 'Health', color: '#87431d', bgColor: '#c7b198' },
  { text: 'Games', color: 'purple', bgColor: '#D1F2E0' },
  { text: 'Cooking', color: 'purple', bgColor: '#06ABE0' },
  { text: 'Education', color: 'purple', bgColor: '#23613F' },
  { text: 'Soft Skills', color: 'purple', bgColor: '#EFF5DE' },
  { text: 'Comedy', color: 'purple', bgColor: '#F9EAE7' },
]

const LearnFromRangeOfExperts = () => (
  <div className='text-center my-24'>
    <p style={{ color: '#1d2d50' }} className='text-5xl font-bold'>
      Learn from range of experts and content creators
    </p>
    <div className='flex mt-32 mb-24 '>
      <div className='w-3/12 ml-32'>
        <LearningCard imgSrc='learn-guitar.svg' label='Learn guitar in 7 days' provider='Ravi Sharma' numSeekers='253' />
      </div>
      <div className='w-3/12 ml-32'>
        <LearningCard imgSrc='learn-guitar.svg' label='Learn guitar in 7 days' provider='Ravi Sharma' numSeekers='253' />
      </div>
      <div className='w-3/12 ml-32'>
        <LearningCard imgSrc='learn-guitar.svg' label='Learn guitar in 7 days' provider='Ravi Sharma' numSeekers='253' />
      </div>
      {/* <div className='w-3/12 ml-32'>
        <LearningCard imgSrc='learn-guitar.svg' label='Learn guitar in 7 days' provider='Ravi Sharma' numSeekers='253' />
      </div> */}
    </div>
   
    <div className='m-auto w-8/12'>
      {cardData.map(data => <Card cardData={data} />)}
    </div>
    
  </div>
)

export default LearnFromRangeOfExperts
