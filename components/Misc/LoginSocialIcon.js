import React from 'react'

export default ({ name }) => (
  <div className='border-2 border-darkGrey rounded-full w-16 pl-4 pr-4 p-3 cursor-pointer'>
    <img
      className='w-full'
      src={`socials/${name}.png`}
      alt={`Login using ${name}`}
    />
  </div>
)
