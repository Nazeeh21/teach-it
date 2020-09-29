import React from 'react'
import { Icon } from '../../../components/Images/Icon'
import loremIpsum from '../../../utility/loremIpsum'
import Question from './Question'

const Questions = () => {
  return (
    <div className='w-full'>
      <div className='grid grid-cols-2 items-center'>
        <h3 className='justify-self-start text-2xl'>Stock Market Ideas</h3>
        <div className='justify-self-end'>
          <Icon src='search.png' />
        </div>
      </div>
      <div className='grid grid-flow-row grid-cols-1 gap-6'>
        <Question question={loremIpsum} />
        <Question question={loremIpsum} />
        <Question question={loremIpsum} />
      </div>
    </div>
  )
};

export default Questions;
