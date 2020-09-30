import React from 'react'
import CardButton from '../../views/Chat/CompactServiceCard/CardButton/CardButton'
import BackDrop from '../Backdrop'

const Index = ({ show, clickHandler }) => (
  <React.Fragment>
    <BackDrop show={show} clicked={clickHandler} />
    <div
      style={{
        zIndex: '100',
        borderBottomLeftRadius: '1rem',
        borderTopLeftRadius: '1rem',
        opacity: show ? '1' : '0',
      }}
      className='absolute right-0 top-0 bg-white w-10/12 lg:w-5/12 xl:w-5/12 h-full pt-6 pl-8'
    >
      <button
        className='cursor-pointer text-5xl font-small'
        onClick={clickHandler}
      >
        X
      </button>
      <div className='grid grid-cols-2 grid-rows-1 mt-5'>
        <p className='text-2xl font-medium'>Notifications</p>
        <div className=' flex justify-self-end items-center'>
          <div
            style={{ color: '#4968FF' }}
            className='cursor-pointer text-sm font-medium'
          >
            Mark all as read
          </div>
          <button className='justify-end ml-6 mr-4'>
            <img
              className='w-full'
              src='nav_icons/settings.svg'
              alt='setting'
            />
          </button>
        </div>
      </div>

      <div className='items-start grid grid-cols-3 grid-rows-1 mt-10'>
        <div className='justify-self-start flex col-span-2'>
          <img src='nav_icons/services.svg' alt='services' />
          <div className='ml-2 w-full'>
            <p>
              <span className='font-medium'>Ravi</span> has subscribed to{' '}
              <span className='font-medium'>learn guitar in 30 days</span>
            </p>
            <p className='text-sm text-darkGrey'>2 mins</p>
          </div>
        </div>
        <button className='justify-self-end w-6 mx-2'>
          <img src='dustbin.svg' alt='delete' />
        </button>
      </div>

      <div className='items-start grid grid-cols-3 grid-rows-1 mt-10'>
        <div className='justify-self-start flex col-span-2'>
          <img src='nav_icons/payments.svg' alt='payments' />
          <div className='ml-2 w-full'>
            <p>Your withdrawl of ₹5500 is complete.</p>
            <p className='text-sm text-darkGrey'>2 mins</p>
          </div>
        </div>
        <button className='justify-self-end w-6 mx-2'>
          <img src='dustbin.svg' alt='delete' />
        </button>
      </div>

      <div className='items-start grid grid-cols-3 grid-rows-1 mt-10'>
        <div className='justify-self-start flex col-span-2'>
          <img src='nav_icons/payments.svg' alt='payments' />
          <div className='ml-2 w-full'>
            <p>
              <span className='font-medium'>Manisha Mehta</span> has changed the
              timing of{' '}
              <span className='font-medium'>
                Learn professional guitar in 30 days
              </span>{' '}
              to <span>7:30pm on Wednesdays & Sundays</span>.{' '}
            </p>
            <p className='text-sm text-darkGrey'>2 mins</p>
          </div>
        </div>
        <button className='justify-self-end w-6 mx-2'>
          <img src='dustbin.svg' alt='delete' />
        </button>
      </div>

      <div className='flex items-center mt-5'>
        <div className='w-2/12 ml-6'>
          <CardButton label='Accept' />
        </div>
        <div className='w-4/12 ml-2 px-2'>
          <button className='shadow bg-secondary text-white text-sm rounded-md my-2 w-full px-3 p-1'>
            Chat with Manisha
          </button>
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default Index
