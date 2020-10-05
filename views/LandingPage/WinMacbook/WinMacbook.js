import React from 'react'
// import classes from './WinMacbook.css'

const WinMacbook = () => (
  <div className='bg-white py-10'>
    <div style={{background: 'linear-gradient(to right, orange, pink , violet , blue)', height: 'auto'}} className=' flex flex-col md:flex-row items-center justify-center'>
      <div style={{position: 'relative', bottom: '5.5rem'}} className='hidden md:block w-full md:w-5/12 lg:w-3/12 lg:mx-16'>
        <img className='m-auto md:w-10/12 lg:w-11/12 h-auto rounded-lg' src='/macbook.png' alt='macbook' />
      </div>
      <div style={{position: 'relative', bottom: '6rem'}} className='w-full md:hidden'>
        <img className='w-8/12 m-auto h-auto rounded-lg' src='/macbook.png' alt='macbook' />
      </div>
      <div className='w-full text-center mb-8 -mt-24 md:text-left md:w-6/12 lg:w-5/12 lg:mx-12 md:mt-0 md:mb-2 xl:mb-0'>
        <p className='text-4xl text-white lg:text-5xl font-medium my-8'>Win a brand new Macbook!</p>
        <button className='bg-primary text-white text-2xl rounded-full m-auto md:m-3 md:mb-4 xl:m-2 my-3 py-4 px-10 flex items-center'>
          Find out how
          <span className='mx-2'>
            <span className='arrow right' />
            <span className='arrow right' />
          </span>
        </button>
      </div>
    </div>
  </div>
)

export default WinMacbook
