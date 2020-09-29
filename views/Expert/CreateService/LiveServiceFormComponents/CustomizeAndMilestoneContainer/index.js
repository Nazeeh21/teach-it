import React from 'react'
import Container from './Container/Container'
import TimeSelector from '../TimeSelector/TimeSelector'
import DurationSelector from '../DurationSelector/DurationSelector'
import loremIpsum from '../../../../../utility/loremIpsum'
import { SecondaryButton } from '../../../../../components/Buttons/Index'

const Index = () => <div className='w-full text-lg font-medium'>
  <Container label={
    <div>
      <p className=''>Customize</p>
      <p className='mt-4 font-semibold text-sm text-darkGrey'>MONDAY</p>
      <div className='flex mt-4'>
          <div className='w-6/12'><TimeSelector /></div>
          <div className='w-6/12 ml-4'><DurationSelector /></div>
        </div>
      <p className='mt-6 font-semibold text-sm text-darkGrey'>THURSDAY</p>
      <div className='flex mt-4'>
          <div className='w-6/12'><TimeSelector /></div>
          <div className='w-6/12 ml-4'><DurationSelector /></div>
        </div>
    </div>
  } />
  <p className='mt-6'>Milestones</p>
  <p className='text-sm text-darkGrey mt-4 mb-6'>You can break your service into multiple milestones and let the learners know what each milestone will be covering and in how many sessions. </p>
  <Container label={
    <div>
      <p className=''>Enable Milestones</p>
      <p className='mt-4 font-semibold text-sm text-darkGrey'>MILESTONE 1</p>
      <div className='bg-lightGrey rounded-lg w-full p-4 mt-4'>
        <p className='text-lg'>Sessions</p>
        <input className='p-2 text-lg mt-2 w-16' placeholder='4' onChange={e => e.target.value} />
        <p className='text-lg mt-4'>Description</p>
        <textarea className='p-2 text-sm mt-2 w-full text-black' rows='4' placeholder={loremIpsum} onChange={e=>e.target.value} />
      </div>
      <div className='grid grid-cols-2 grid-rows-1 mt-4'>
        <div></div>
        <div className='justify-self-end'><SecondaryButton label='Add another milestone' /></div>
      </div>
    </div>
  } />
</div>;

export default Index;