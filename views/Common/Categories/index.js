import React from 'react'
import { CardFilledWithImage } from '../../../components/Cards/Cards'

const Card = () => (
  <CardFilledWithImage title='Yoga' subTitle='234 learners' src='yoga.jpg' />
)

const Index = () => {
  return (
    <div className='w-full'>
      <h3 className='text-2xl text-primary p-2 font-semibold'>Categories</h3>
      <div className='w-full grid grid-flow-row grid-cols-2 gap-6'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
};

export default Index;
