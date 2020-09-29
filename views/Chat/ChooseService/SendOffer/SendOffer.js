import React from 'react'
import { ContainerWithShadow } from '../../../../containers'
import CardButton from '../../CompactServiceCard/CardButton/CardButton'

const Input = <input className='w-full  text-2xl' type='number' />

const SendOffer = () => (
  <div className='absolute'>
    <ContainerWithShadow width='8/12'>
      <div className='m-3'>
        <p className='mx-2 text-darkGrey'>Price</p>
        {/* <Input /> */}
        <input
          style={{ boxShadow: '0 2px #dddddd' }}
          className='w-auto mx-2  text-2xl'
          type='number'
        />
        <div className='flex justify-center my-8'>
          <div className='w-5/12 mx-2'>
            <p className='mx-2 text-darkGrey'>Date</p>
            {/* <Input /> */}
            <input
              style={{ boxShadow: '0 2px #dddddd' }}
              className='w-full text-2xl'
              type='number'
            />
          </div>
          <div className='w-5/12 mx-2'>
            <p className='mx-2 text-darkGrey'>Time</p>
            <input
              style={{ boxShadow: '0 2px #dddddd' }}
              className='w-full  text-2xl'
              type='number'
            />
            {/* <Input /> */}
          </div>
        </div>

        <div className='w-4/12 ml-56 my-4'>
          <CardButton label='Send Offer' />
        </div>
      </div>
    </ContainerWithShadow>
    4{' '}
  </div>
)

export default SendOffer
