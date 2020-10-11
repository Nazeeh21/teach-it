import React from 'react'
import { useRouter } from 'next/router'

const Index = () => {
  const router = useRouter()

  return (
    <div className='flex items-center w-full'>
      <div onClick={() => router.push('/profile')} className='flex flex-col w-full items-center'>
        <img
          src='/avis/ana.png'
          alt='Switch profile'
          className='w-8 h-auto cursor-pointer rounded-full'
        />
        <p className='text-xs cursor-pointer'>Anastasia</p>
      </div>
      <img
        src='/arrows/down.svg'
        alt='Switch profile'
        className='cursor-pointer'
      />
    </div>
  )
}

export default Index
