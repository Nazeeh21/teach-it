import React from 'react'

const New = (
  <div style={{backgroundImage: 'linear-gradient(180deg, #B620E0 0%, #6236FF 100%)'}} className='inline-block text-xs rounded-full bg-black text-white px-5 py-1'>
    NEW
  </div>
)

export default () => (
  <div className='bg-white py-16'>
    <div className='flex justify-center px-10 font-medium '>
      <div className='w-3/12 flex flex-col text-lg ml-32'>
        <p className='font-semibold text-2xl mb-8'>Overview</p>
        <a className='mt-5' href='/'>Home</a>
        <a className='mt-5' href='/'>About us</a>
        <div className='mt-5'><a  href='/'>Win a Macbook!</a> {New}</div>
        <a className='mt-5' href='/'>Contact us</a>
      </div>
      <div className='w-3/12 flex flex-col text-lg ml-32'>
        <p className='font-semibold text-xl mb-8'>Legal</p>
        <a className='mt-5' href='/'>Privacy Policy</a>
        <a className='mt-5' href='/'>Terms of use</a>
        <a className='mt-5' href='/'>DMCA</a>
      </div>
      <div className='w-6/12 flex flex-col text-lg ml-48 mr-10'>
        <p className='font-semibold text-xl mb-8'>Updates</p>
        <p className='mt-5'>Sign up for our FREE newsletter and get daily updates on services, offers & promotions.</p>
        <div className='w-full flex mt-5'>
          <div className='w-8/12 shadow rounded-l-md pt-2 pl-3 pb-2'>
            <p style={{color: '#4968FF'}} className='text-xs font-semibold'>Email</p>
            <input type='email' placeholder='your@email.com' onChange={e => e.target.value} />
          </div>
          <button style={{backgroundColor: '#4968FF'}} className='w-4/12 rounded-r-md items-center flex'>
            <p className='py-2 m-auto text-white'>Sign up</p>
          </button>
        </div>
      </div>
    </div>
  </div>
)