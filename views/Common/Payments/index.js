import React from 'react'
import { ViewMoreButton } from '../../../components/Buttons/Index'
import PaymentItem from './PaymentItem'

const Index = () => {
  return (
    <div className='w-full'>
      <h3 className='text-2xl mb-6'>Payments</h3>
      <div className='w-full bg-white border-2 border-highlight p-6 flex flex-col'>
        <h4 className='text-2xl'>₹ 73,265</h4>
        <p className='text-darkGrey text-sm'>Total revenue</p>
        <img alt='Graph' className='w-full mb-10' src='graph.jpg' />
        <h4 className='text-lg'>Transactions</h4>
        <PaymentItem />
        <PaymentItem />
        <PaymentItem />
        <div className='w-4/12 m-auto mt-4'>
        <ViewMoreButton label='View all transactions' />
        </div>
      </div>
    </div>
  )  
};

export default Index;