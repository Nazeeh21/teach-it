import React from 'react'
import { PrimaryButton } from '../../components/Buttons/Index'
import Pills3 from '../../components/Misc/3Pills/3Pills'
import loremIpsum from '../../utility/loremIpsum'
import Question from '../Learner/RichMediaService/Question'

const Support = () => (
  <div className='w-full'>
    <p className='text-2xl font-medium'>Support</p>
    <div className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 lg:girid-rows-1'>
      <div className='hidden lg:block' />
      <Pills3 color='white' width='w-full' label1='Open' label2='Closed' label3='Escalated' />
    </div>
    <div className='grid grid-flow-row grid-cols-1 gap-6 mt-6'>
      <Question question={loremIpsum.substring(100)} />
      <Question question={loremIpsum.substring(100)} />
      <Question question={loremIpsum.substring(100)} />
    </div>
    <div className='mb-20 md:mb-0 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 items-center mt-5'>
        <div className='w-full md:w-11/12'>
          <PrimaryButton label='New ticket' />
          </div></div>
  </div>
)

export default Support