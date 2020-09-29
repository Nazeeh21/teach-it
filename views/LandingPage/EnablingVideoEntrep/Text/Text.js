import React from 'react'
import { useRouter } from 'next/router'

const heading =
  'Enabling video entrepreneurs to teach amazing skills to learners around the world'

const Text = () => {
  const router = useRouter()
  return (
    <div className='m-8'>
      <p
        style={{ color: '#1d2d50', lineHeight: '120%' }}
        className='text-5xl font-bold'
      >
        {heading}
      </p>
      <button
        onClick={() => router.push('/login')}
        className='bg-expert p-3 w-5/12 my-10 rounded-md text-white text-xl font-medium'
      >
        Become an expert
      </button>
    </div>
  )
}

export default Text
