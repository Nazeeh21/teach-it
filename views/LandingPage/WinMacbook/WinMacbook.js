import React from 'react'
// import classes from './WinMacbook.css'

const WinMacbook = () => (
  <div className='bg-white py-10'>
    <div style={{background: 'linear-gradient(to right, orange, pink , violet , blue)', height: '18rem'}} className=' flex items-center justify-center'>
      <div style={{position: 'relative', bottom: '5.5rem'}} className='w-3/12 mx-16'>
        <img className='w-11/12 h-auto rounded-lg' src='macbook.png' alt='macbook' />
      </div>
      <div className='w-5/12 mx-12'>
        <p className='text-white text-5xl font-medium my-8'>Win a brand new Macbook!</p>
        <button className='bg-primary text-white text-2xl rounded-full m-2 my-3 py-4 px-10 flex items-center'>
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
