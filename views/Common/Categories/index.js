import React from 'react'
import { CardFilledWithImage } from '../../../components/Cards/Cards'
import { useRouter } from 'next/router'

const Card = ({ clickHandler }) => (
  <CardFilledWithImage
    clickHandler={clickHandler}
    title='Yoga'
    subTitle='234 learners'
    src='yoga.jpg'
  />
)

const Index = () => {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/services')
  }

  return (
    <div className='w-full'>
      <h3 className='text-2xl text-primary p-2 font-semibold'>Categories</h3>
      <div className='w-full grid grid-flow-row grid-cols-2 gap-6'>
        <Card clickHandler={handleRedirect} />
        <Card clickHandler={handleRedirect} />
        <Card clickHandler={handleRedirect} />
        <Card clickHandler={handleRedirect} />
        <Card clickHandler={handleRedirect} />
        <Card clickHandler={handleRedirect} />
        <Card clickHandler={handleRedirect} />
        <Card clickHandler={handleRedirect} />
        <Card clickHandler={handleRedirect} />
        <Card clickHandler={handleRedirect} />
      </div>
    </div>
  )
}

export default Index
