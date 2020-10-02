import React from 'react'
import BackDrop from '../../../../components/Backdrop'
import { PrimaryButton } from '../../../../components/Buttons/Index'
import Avatar from '../../../../components/Images/Avatar'
import loremIpsum from '../../../../utility/loremIpsum'

const AskQuestion = ({ show, clickHandler }) => (
  <React.Fragment>
    <BackDrop show={show} clicked={clickHandler} />
    <div
        style={{
          zIndex: '100',
          borderBottomLeftRadius: '1rem',
          borderTopLeftRadius: '1rem',
          opacity: show ? '1' : '0',
        }}
        className='absolute right-0 top-0 bg-white w-10/12 lg:w-5/12 xl:w-5/12 h-full pt-6 pl-8 pr-5'
      >
        <button
          className='cursor-pointer text-5xl font-small'
          onClick={clickHandler}
        >
          X
        </button>
        <p className='text-2xl font-medium mt-5'>Ask a question</p>
        <p className='text-darkGrey text-sm mt-3'>Question costs ₹300. Experts generally take 48-72 hours to reply.</p>
        <div className='w-full rounded mt-4 bg-lightGrey border-2 border-gray-300 flex items-center py-3 pl-2'>
          <Avatar src='arun-kumar.png' alt='arun-kumar' purpose='isForChat' />
          <p className='ml-2 text-lg font-medium'>Arun Kumar Pattnaik</p>
        </div>
        <p className='text-lg font-medium mt-5'>Your question</p>
        <div className='mt-3 py-3 px-2 text-sm bg-lightGrey rounded'>{loremIpsum}</div>
        <div className='w-4/12 mt-8'>
          <PrimaryButton label='Send' />
        </div>
      </div>
  </React.Fragment>
)

export default AskQuestion