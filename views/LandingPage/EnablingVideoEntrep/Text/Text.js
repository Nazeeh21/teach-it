import React from 'react'
import { useRouter } from 'next/router'

const heading =
  'Enabling video entrepreneurs to teach amazing skills to learners around the world'

const Text = () => {
  const router = useRouter()
  return (
    <div className='m-4 xl:m-8'>
      <p
        style={{ color: '#1d2d50', lineHeight: '120%' }}
        className='text-4xl xl:text-5xl font-bold'
      >
        {heading}
      </p>
      <button
        onClick={() => router.push('/login')}
        className='bg-expert p-3 xl:w-5/12 my-10 rounded-md text-white text-xl font-medium'
      >
        Become a provider
      </button>
    </div>
  )
}

export default Text
