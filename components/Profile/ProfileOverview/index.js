import React from 'react'
import { PrimaryButton } from '../../Buttons/Index'
import Rating from '../../Rating/Rating'
import { useRouter } from 'next/router'

const Stat = ({ number, label }) => (
  <div className='grid grid-flow-row grid-cols-2 items-center justify-around'>
    <h3 className='text-3xl text-primary font-bold'>{number}</h3>
    <p>{label}</p>
  </div>
)

const OutlineBtn = ({ label, color }) => (
  <button
    className={`rounded border-2 border-${color} text-${color} text-md pl-4 pr-4 pt-2 pb-2 w-full`}
  >
    {label}
  </button>
)

const Index = ({}) => {
  const router = useRouter()

  return (
    <div className='w-full bg-white rounded-lg shadow pl-4 pr-4 pt-3 pb-3 flex flex-col'>
      <Stat number={58} label='Services' />
      <Stat number={245} label='Learners' />
      <div className='w-full flex flex-row items-center mt-4'>
        <Rating />
        <p className='text-sm'>142 avg rating</p>
      </div>
      <div className='flex flex-row gap-4 mb-4 mt-4'>
        <OutlineBtn label='Share' color='secondary' />
        <OutlineBtn label='Follow' color='primary' />
      </div>
      <PrimaryButton
        clickHandler={() => router.push('/messages')}
        label='Message Nazeeh'
        textSize='md'
      />
    </div>
  )
}

export default Index
