import React from 'react'

const heading =
  'Enabling video entrepreneurs to teach amazing skills to learners around the world'

const Text = () => (
  <div className='m-8'>
    <p
      style={{ color: '#1d2d50', lineHeight: '120%' }}
      className='text-5xl font-bold'
    >
      {heading}
    </p>
    <button className='bg-expert p-3 w-5/12 my-10 rounded-md text-white text-xl font-medium'>
      Become an expert
    </button>
  </div>
)

export default Text
