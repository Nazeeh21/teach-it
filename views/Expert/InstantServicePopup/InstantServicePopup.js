import React from 'react'
import { PrimaryButton } from '../../../components/Buttons/Index'
import Modal from './Modal/Modal'

export default () => (
  // <Modal open='true'>
    <div
      style={{
        zIndex: '50',
        borderBottomLeftRadius: '1rem',
        borderTopLeftRadius: '1rem',
      }}
      className=' fixed right-0 top-0 w-5/12 bg-white '
    >
      <div className='mx-10 my-6 overflow'>
        <button className='text-5xl font-small'>X</button>
        <div className='my-5'>
          <p className='text-2xl font-medium'>Create an instant sevice</p>
          <div className='rounded-md bg-lightGrey text-darkGrey font-medium text-sm p-4 my-4'>
            Instant is a pre-built service template which allows you to quickly
            offer a one time Live service without too many details. It’s ideal
            for learners who look for immediate consultancy. No restrictions on
            categories or audiences. Just set the price and duration and it’s
            done!
          </div>
          <div className='my-2  '>
            <p className='text-xl font-medium'>
              How much will you charge for this service?
            </p>
            <p className='text-sm text-darkGrey font-medium'>
              Video work commission for this service is at 35% is Rs 2100. Learn
              more about{' '}
              <a style={{ color: '#4968FF' }} href='/'>
                commision labs
              </a>
            </p>
          </div>
          <div className='grid grid-rows-1 grid-cols-2 text-sm font-medium my-5'>
            <div className='flex w-6/12'>
              <p className='rounded bg-lightGrey w-6/12 p-2'>6000</p>
              <p className='w-8/12 p-2'>per week</p>
            </div>
            <div className='flex justify-self-end w-7/12 '>
              <p className='w-7/12 p-2 '>You will get</p>
              <p
                style={{ background: '#fafcc2' }}
                className='text-lg rounded w-5/12 p-2'
              >
                3900
              </p>
            </div>
          </div>
          <div className='font-medium my-5'>
            <p className='text-xl'>Duration</p>
            <div className='flex w-6/12 my-2'>
              <p className='rounded bg-lightGrey w-3/12 p-2'>2</p>
              <p className='w-7/12 p-2'>hours</p>
            </div>
          </div>
          <div className='w-4/12 my-10'>
            <PrimaryButton label='Send Invite' />
          </div>
          
        </div>
      </div>
    </div>
  // </Modal>
)
