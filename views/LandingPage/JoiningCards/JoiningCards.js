import React from 'react'
import Card from './Card/Card'

const cardData = [
  {
    name: 'learner',
    description: `We have hundereds of experts ready to teach you all the skills you're looking to learn.`,
    buttonText: 'learn',
    buttonColor: 'learner',
  },
  {
    name: 'expert',
    description: `If you are good in any skill, you can start earning immediately by sharing your knowledge with others.`,
    buttonText: 'teach',
    buttonColor: 'expert',
  },
]
const JoiningCards = () => (
  <div className='my-10 lg:my-32'>
    <div className='flex flex-col lg:flex-row justify-center'>
      {cardData.map((data) => (
        <div className='w-11/12 lg:w-4/12 m-6'>
          <Card data={data} />
        </div>
      ))}
    </div>
  </div>
)

export default JoiningCards
